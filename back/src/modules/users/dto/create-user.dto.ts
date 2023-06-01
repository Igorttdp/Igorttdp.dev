import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({
    message: (args) => `${args.property} deve ser uma string válida.`,
  })
  @IsNotEmpty({
    message: (args) => `${args.property} não pode ser vazio.`,
  })
  name: string;

  @IsEmail({}, {
    message: (args) => `${args.property} deve ser um email válido.`,
  })
  @IsNotEmpty({
    message: (args) => `${args.property} não pode ser vazio.`,
  })
  email: string;

  @IsString({
    message: (args) => `${args.property} deve ser uma string válida.`,
  })
  @IsNotEmpty({
    message: (args) => `${args.property} não pode ser vazio.`,
  })
  @MinLength(8, {
    message: (args) => `${args.property} deve ter no mínimo ${args.constraints} caracteres`
  })
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform']
  })
  password: string;
}
