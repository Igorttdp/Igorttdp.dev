import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { CreateCostumerDto } from './dto/create-costumer.dto';
import { UpdateCostumerDto } from './dto/update-costumer.dto';
import { CostumersRepository } from './repositories/costumers.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class CostumersService {
  constructor(private costumersRepository: CostumersRepository) {}

  async create(createCostumerDto: CreateCostumerDto) {
    return this.costumersRepository.create(createCostumerDto).catch((e) => {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2002'
      ) {
        throw new ConflictException();
      }

      throw new BadRequestException();
    });
  }

  async findAll() {
    return this.costumersRepository.findAll().catch((e) => {
      throw new BadRequestException();
    });
  }

  async findOne(id: number) {
    return this.costumersRepository.findOne(id).catch((e) => {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        throw new NotFoundException();
      }
    });
  }

  async update(id: number, updateCostumerDto: UpdateCostumerDto) {
    return this.costumersRepository.update(id, updateCostumerDto).catch((e) => {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        throw new NotFoundException();
      }
      throw new BadRequestException();
    });
  }

  async remove(id: number) {
    return this.costumersRepository.remove(id).catch((e) => {
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
