import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Param,
  BadRequestException,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiParam, ApiResponse } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';
import { AuthenticatedGuard } from '../auth/authenticated.guard';
import { LocalAuthGuard } from '../auth/local.auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) { }
  
  //signup
  @Post('/signup')
  @ApiParam({
    name:"username"
  })
  @ApiParam({
    name:"password"
  })
  @ApiParam({
    name:"email"
  })
  @ApiCreatedResponse({ description: "User registered correctly" })
  @ApiResponse({ status: 500, description: "User already exists" })
  async addUser(
    @Body('password') userPassword: string,
    @Body('username') userName: string,
    @Body('email') email: string,
  ) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(userPassword, saltOrRounds);
    const result = await this.usersService.insertUser(
      userName,
      hashedPassword,
      email
    );
    return {
      msg: 'User successfully registered',
      userId: result.id,
      userName: result.username,
      email: result.email,
      realname: result.realname,
      description: result.description
    };
  }
  //Post / Login
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  @ApiParam({
    name:"username"
  })
  @ApiParam({
    name:"password"
  })
  @ApiCreatedResponse({ description: "User loged in" })
  @ApiResponse({ status: 401, description: "Incorrect password" })
  login(@Request() req): any {
    return {
      User: req.user,
      msg: 'User logged in'
    };
  }
  //Get / protected
  @UseGuards(AuthenticatedGuard)
  @Get('/protected')
  getHello(@Request() req): string {
    return req.user;
  }
  //Get / logout
  @Get('/logout')
  logout(@Request() req): any {
    req.session.destroy();
    return { msg: 'The user session has ended' }
  }

  //Get / user
  @Get('/user/:username')
  @ApiParam({
    name:"username"
  })
  async user(@Param() params) {
    const user = await this.usersService.getUser(params.username);
    if (user == undefined) {
      throw new BadRequestException('Invalid user');
    }
    return user;
  }

   //Get / userId
   @Get('/id/:id')
   async userById(@Param() params) {
     const user = await this.usersService.getUserById(params.id);
     if (user == undefined) {
       throw new BadRequestException('Invalid user');
     }
     return user;
   }

  //Post / set real name
  @Post('/setRealName')
  @ApiParam({
    name:"username"
  })
  @ApiParam({
    name:"realname"
  })
  async setRealName(
    @Body('username') username: string,
    @Body('realname') realname: string,
  ) {
    const user = await this.usersService.setRealName(username,realname);
    if (user == undefined) {
      throw new BadRequestException('Invalid user');
    }
    return user;
  }

  //Post / set description
  @Post('/setDescription')
  @ApiParam({
    name:"username"
  })
  @ApiParam({
    name:"description"
  })
  async setDescription(
    @Body('username') username: string,
    @Body('description') description: string,
  )
   {   
    const user = await this.usersService.setDescription(username,description);
    if (user == undefined) {
      throw new BadRequestException('Invalid user');
    }
    return user;
  }

  //Post / set image
  @Post('/setImage')
  @ApiParam({
    name:"username"
  })
  @ApiParam({
    name:"image"
  })
  async setImage(
    @Body('username') username: string,
    @Body('image') image: string,
  )
   {   
    const user = await this.usersService.setImage(username,image);
    if (user == undefined) {
      throw new BadRequestException('Invalid user');
    }
    return user;
  }

}
