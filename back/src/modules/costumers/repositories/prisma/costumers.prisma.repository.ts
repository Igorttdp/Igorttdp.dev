import { PrismaService } from 'src/database/prisma.service';
import { CostumersRepository } from '../costumers.repository';
import { CreateCostumerDto } from '../../dto/create-costumer.dto';
import { UpdateCostumerDto } from '../../dto/update-costumer.dto';
import { Costumer } from '../../entities/costumer.entity';
import { plainToInstance } from 'class-transformer';
import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class CostumersPrismaRepository implements CostumersRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateCostumerDto): Promise<Costumer> {
    const costumer = new Costumer();
    Object.assign(costumer, {
      ...data,
    });

    const newCostumer = await this.prisma.costumer.create({
      data: { ...costumer },
    });

    return newCostumer;
  }
  async findAll(): Promise<Costumer[]> {
    return await this.prisma.costumer.findMany();
  }
  async findOne(id: number): Promise<Costumer> {
    return await this.prisma.costumer.findUniqueOrThrow({
      where: { cod: id },
    });
  }
  async update(id: number, data: UpdateCostumerDto): Promise<Costumer> {
    return await this.prisma.costumer.update({
      where: { cod: id },
      data: { ...data },
    });
  }
  async remove(id: number): Promise<void> {
    await this.prisma.costumer.delete({
      where: { cod: id },
    });

    return;
  }
}
