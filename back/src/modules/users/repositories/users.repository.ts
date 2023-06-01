import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

export abstract class UsersRepository {
  abstract create(data: CreateUserDto): Promise<User>;
  abstract getProfile(id: number): Promise<User>
  abstract findByEmail(email: string): Promise<User | undefined>
  abstract update(id: number, data: UpdateUserDto): Promise<User>;
}
