import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsString({
    message: (args) => `${args.property} deve ser uma string válida.`,
  })
  @IsNotEmpty({
    message: (args) => `${args.property} não pode ser vazio.`,
  })
  description: string;

  @IsString({
    message: (args) => `${args.property} deve ser uma string válida.`,
  })
  @IsNotEmpty({
    message: (args) => `${args.property} não pode ser vazio.`,
  })
  bar_code: string;

  @IsNumber(
    {},
    {
      message: (args) => `${args.property} deve ser um número válido.`,
    },
  )
  @IsNotEmpty({
    message: (args) => `${args.property} não pode ser vazio.`,
  })
  value: number;

  @IsNumber(
    {},
    {
      message: (args) => `${args.property} deve ser um número válido.`,
    },
  )
  @IsNotEmpty({
    message: (args) => `${args.property} não pode ser vazio.`,
  })
  gross_weight: number;

  @IsNumber(
    {},
    {
      message: (args) => `${args.property} deve ser um número válido.`,
    },
  )
  @IsNotEmpty({
    message: (args) => `${args.property} não pode ser vazio.`,
  })
  net_weight: number;
}
