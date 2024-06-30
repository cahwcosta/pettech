import { IProductRepository } from "@/repositories/product.repository.interface";

export class FindAllProductsUseCase {
  constructor(private productRepository: IProductRepository) {}

  async handler(page: number, limit: number) {
    return this.productRepository.findAll(page, limit);
  }
}
