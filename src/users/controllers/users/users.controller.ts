import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get('')
  getUser() {
    const userList = this.userService.findAllUsers();
    if (userList) {
      return userList;
    } else {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
  }

  @Get('all/relations')
  getUserUser() {
    const userList = this.userService.findAllUser_User();
    if (userList) {
      return userList;
    } else {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':userId/friends')
  async getUserFriends(@Param('userId') userId: number) {
    return this.userService.findFriends(userId);
  }
}
