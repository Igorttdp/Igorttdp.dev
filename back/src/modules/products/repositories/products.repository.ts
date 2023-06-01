import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Product } from '../entities/product.entity';

export abstract class ProductsRepository {
  abstract create(data: CreateProductDto): Promise<Product>;
  abstract findAll(): Promise<Product[]>;
  abstract findOne(id: number): Promise<Product | undefined> | undefined;
  abstract update(id: number, data: UpdateProductDto): Promise<Product>;
  abstract delete(id: number): Promise<void>;
}
