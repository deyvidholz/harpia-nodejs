import { Repository } from 'typeorm';
import { ResourceNotFoundException } from './exceptions/resource-not-found.exception';

export class BaseService {
  protected repository: Repository<any>;

  async findOne(id: string) {
    const response = await this.repository.findOne({ where: { id } });

    if (!response) {
      throw new ResourceNotFoundException();
    }

    return response;
  }

  async find(options?: FindParam) {
    return this.repository.find();
  }

  async create(payload: CreateParam) {
    return this.repository.save(payload);
  }

  async update(id: string, payload: UpdateParam) {
    return this.repository.update(id, payload);
  }

  async delete(id: string) {
    this.repository.delete(id);
    return;
  }
}

type FindParam = {};

type CreateParam = any;

type UpdateParam = any;
