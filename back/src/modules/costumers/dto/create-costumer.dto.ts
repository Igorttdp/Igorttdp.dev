import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreateCostumerDto {
  @IsString({
    message: (args) => `${args.property} deve ser uma string válida.`,
  })
  @IsNotEmpty({
    message: (args) => `${args.property} não pode ser vazio.`,
  })
  name: string;

  @IsString({
    message: (args) => `${args.property} deve ser uma string válida.`,
  })
  @IsNotEmpty({
    message: (args) => `${args.property} não pode ser vazio.`,
  })
  fantasy: string;

  @IsString({
    message: (args) => `${args.property} deve ser uma string válida.`,
  })
  @IsNotEmpty({
    message: (args) => `${args.property} não pode ser vazio.`,
  })
  @Length(11, 11, {
    message: 'Deve conter 11 caracteres estritos.',
  })
  document: string;

  @IsString({
    message: (args) => `${args.property} deve ser uma string válida.`,
  })
  @IsNotEmpty({
    message: (args) => `${args.property} não pode ser vazio.`,
  })
  address: string;
}
