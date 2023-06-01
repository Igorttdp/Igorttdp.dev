import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ProductsRepository } from './repositories/products.repository';
import { ProductsPrismaRepository } from './repositories/prisma/products.prisma.repository';

@Module({
  controllers: [ProductsController],
  providers: [
    ProductsService,
    PrismaService,
    { provide: ProductsRepository, useClass: ProductsPrismaRepository },
  ],
})
export class ProductsModule {}
