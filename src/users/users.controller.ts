import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): Promise<IUser[]> {
    return this.usersService.getUsers();
  }
  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    return this.usersService.createUser(createUserDto);
  }
  @Put(":id")
  updateUser(@Param('id') id, @Body() createUserDto: CreateUserDto): Promise<IUser> {
    return this.usersService.updateUser(id, createUserDto);
  }
  @Delete(':id')
  deleteUser(@Param('id') id): Promise<IUser> {
    return this.usersService.deleteUser(id);

  }
}
