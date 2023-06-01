import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { UsersRepository } from '../users.repository';
import { PrismaService } from 'src/database/prisma.service';
import { User } from '../../entities/user.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UsersPrismaRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}
  serializeUser = (user: User) => {
    return {
      ...user,
      id: parseInt(user.id.toString(), 10),
    };
  };

  async create(data: CreateUserDto): Promise<User> {
    const user = new User();
    Object.assign(user, {
      ...data,
    });

    const newUser = await this.prisma.user.create({
      data: { ...user },
    });

    const newHandledUser = this.serializeUser(newUser);

    return plainToInstance(User, newHandledUser);
  }

  async getProfile(id: number): Promise<User> {
    const user = await this.prisma.user.findUniqueOrThrow({ where: { id } });
    const handledUser = this.serializeUser(user);

    return plainToInstance(User, handledUser);
  }

  async findByEmail(email: string): Promise<User> {
    return await this.prisma.user.findUniqueOrThrow({ where: { email } });
  }

  async update(id: number, data: UpdateUserDto): Promise<User> {
    const user = await this.prisma.user.update({
      where: { id },
      data: { ...data },
    });

    const handledUser = this.serializeUser(user);
    return plainToInstance(User, handledUser);
  }
}
