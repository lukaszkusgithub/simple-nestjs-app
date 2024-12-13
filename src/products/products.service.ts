import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './products.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private repo: Repository<Product>) {}

  getAll() {
    return this.repo.find();
  }

  getById(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  createProduct(title: string, price: number) {
    const newProduct = this.repo.create({ title, price });
    this.repo.save(newProduct);
    return newProduct;
  }

  async deleteProduct(id: number) {
    const product = await this.repo.findOne({ where: { id } });
    await this.repo.delete(product);
  }
  updateProduct(id: number, title: string, price: number) {
    return this.repo.update(id, { title, price });
  }
}
