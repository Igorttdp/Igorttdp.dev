import {
  Injectable,
  ConflictException,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsRepository } from './repositories/products.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private productsRepository: ProductsRepository) {}

  async create(createProductDto: CreateProductDto) {
    const product = await this.productsRepository
      .create(createProductDto)
      .catch((e) => {
        if (
          e instanceof Prisma.PrismaClientKnownRequestError &&
          e.code === 'P2002'
        ) {
          throw new ConflictException();
        }

        throw new BadRequestException();
      });
    return product;
  }

  async findAll() {
    return await this.productsRepository.findAll().catch((e) => {
      throw new BadRequestException();
    });
  }

  async findOne(id: number) {
    return await this.productsRepository.findOne(id).catch((e) => {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        throw new NotFoundException();
      }

      throw new BadRequestException();
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.productsRepository
      .update(id, updateProductDto)
      .catch((e) => {
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
    return await this.productsRepository.delete(id).catch((e) => {
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
