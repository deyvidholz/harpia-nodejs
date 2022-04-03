import { Repository } from 'typeorm';

export class BaseService {
  protected repository: Repository<any>;

  async findOne(id: string) {
    return this.repository.findOne({ where: { id } });
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
    return this.repository.delete(id);
  }
}

type FindParam = {};

type CreateParam = any;

type UpdateParam = any;
