import {
  Injectable,
  BadRequestException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';
import { Prisma, User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import 'dotenv/config';

@Injectable()
export class UsersService {
  constructor(
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.usersRepository.create(createUserDto).catch((e) => {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2002'
      ) {
        throw new ConflictException();
      }

      throw new BadRequestException();
    });
    return user;
  }

  async getProfile(authorization: string) {
    const token = authorization.split(' ')[1];

    const decoded = await this.jwtService.verifyAsync(token, {
      secret: process.env.SECRET_KEY,
    });

    if (!decoded) throw new BadRequestException('Invalid JWT');

    const id = Number(decoded.sub);

    const profile = await this.usersRepository.getProfile(id).catch((e) => {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        throw new NotFoundException();
      }

      throw new BadRequestException();
    });

    return profile;
  }

  async findByEmail(email: string) {
    return await this.usersRepository.findByEmail(email).catch((e) => {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        throw new NotFoundException();
      }

      throw new BadRequestException();
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.usersRepository.update(id, updateUserDto).catch((e) => {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        throw new NotFoundException();
      }
      throw new BadRequestException();
    });
  }
}
