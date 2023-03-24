import {
  Injectable,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import { CoverageModel } from 'src/models/coverage.model';
import { Repository } from 'typeorm';

@Injectable()
export class CoverageService {
  constructor(
    @Inject('COVERAGE_REPOSITORY')
    private coverageRepository: Repository<CoverageModel>,
  ) {}

  async createInitialData(): Promise<void> {
    try {
      const coverage = [{ cep_true: '323200' }];
      await Promise.all(
        coverage.map(async (cep) => await this.coverageRepository.save(cep)),
      );
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  async findAll() {
    const result = await this.coverageRepository.find();
    return result;
  }

  async findCep(cep_true: string): Promise<boolean> {
    const result = await this.coverageRepository.findOne({
      where: { cep_true },
    });
    return !!result;
  }
}
