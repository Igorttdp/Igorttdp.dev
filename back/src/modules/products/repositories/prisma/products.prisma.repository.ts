import { PrismaService } from 'src/database/prisma.service';
import { ProductsRepository } from '../products.repository';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../../dto/create-product.dto';
import { UpdateProductDto } from '../../dto/update-product.dto';
import { Product } from '../../entities/product.entity';
import { instanceToPlain, plainToInstance, serialize } from 'class-transformer';

@Injectable()
export class ProductsPrismaRepository implements ProductsRepository {
  constructor(private prisma: PrismaService) {}

  private serializeProduct = (product: Product) => {
    return {
      ...product,
      value: Number(product.value.toString()),
      gross_weight: Number(product.gross_weight.toString()),
      net_weight: Number(product.net_weight.toString()),
    };
  };

  async create(data: CreateProductDto): Promise<Product> {
    const product = new Product();
    Object.assign(product, {
      ...data,
    });

    const newProduct = await this.prisma.product.create({
      data: { ...product },
    });

    return plainToInstance(Product, this.serializeProduct(newProduct));
  }
  async findAll(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();

    const handledProducts = products.map((el) => this.serializeProduct(el));

    return plainToInstance(Product, handledProducts);
  }
  async findOne(id: number): Promise<Product> {
    const product = await this.prisma.product.findUniqueOrThrow({
      where: { cod: id },
    });

    return plainToInstance(Product, this.serializeProduct(product));
  }
  async update(id: number, data: UpdateProductDto): Promise<Product> {
    const updatedProduct = await this.prisma.product.update({
      where: { cod: id },
      data: { ...data },
    });

    return plainToInstance(Product, this.serializeProduct(updatedProduct));
  }
  async delete(id: number): Promise<void> {
    await this.prisma.product.delete({ where: { cod: id } });
    return;
  }
}
