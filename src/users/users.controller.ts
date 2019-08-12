import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): IUser[] {
    return this.usersService.getUsers();
  }
  @Post()
  createUser(@Body() createUserDto: CreateUserDto): IUser {
    return this.usersService.createUser(createUserDto);
  }
  @Put()
  updateUser(@Body() createUserDto: CreateUserDto): IUser {
    return this.usersService.updateUser(createUserDto);
  }
  @Delete(':id')
  deleteUser(@Param('id') id): object {
    return this.usersService.deleteUser(id);

  }
}
