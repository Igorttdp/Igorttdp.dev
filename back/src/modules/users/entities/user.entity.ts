import { Exclude } from 'class-transformer';

export class User {
  readonly id: bigint;
  name: string;
  email: string;

  @Exclude()
  password: string;
}
