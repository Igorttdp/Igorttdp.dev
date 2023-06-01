import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user) return null;

    const comparePassword = await compare(password, user.password);

    if (!comparePassword) return null;

    return { email: user.email };
  }

  async login(email: string) {
    const user = await this.usersService.findByEmail(email);

    return {
      token: this.jwtService.sign({ email }, { subject: user.id.toString() }),
    };
  }
}
