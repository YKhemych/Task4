import { Injectable } from '@nestjs/common';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  getUsers(): IUser[] {
    return [
      {
        id: 1,
        name: 'Vova',
        email: 'vova@mail.com',
      },
      {
        id: 2,
        name: 'Yura',
        email: 'yura@mail.com',
      },
      {
        id: 3,
        name: 'Roman',
        email: 'roman@mail.com',
      },
    ];
  }
  createUser(user: IUser): IUser {
    return user;
  }
  updateUser(user: IUser): IUser {
    return user;
  }
  deleteUser(id: string): object {
    return {message: `delete user with id ${id} was success`};
  }
}
