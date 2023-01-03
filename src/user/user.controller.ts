import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get()
  getUser() {
    return this.UserService.getUser();
  }

  @Post()
  store(@Req() req: Request) {
    return req.body;
  }
  @Patch('/:userId')
  update(@Req() req: Request) {
    return req.body;
  }
  @Get('/:userId')
  singleUser(@Param() params: { userId: number }) {
    return params;
  }

  @Delete('/:userId')
  deleteUser(@Param() params: { userId: number }) {
    return params;
  }
}
