import { Controller, Get, Param } from '@nestjs/common';

import { CoverageService } from 'src/service/coverage.service';

@Controller('cep')
export class CoverageController {
  constructor(private readonly coverageSerive: CoverageService) {}

  @Get()
  async findAll() {
    const result = await this.coverageSerive.findAll();
    return result;
  }
  @Get(':cep')
  async findCep(@Param('cep') cep: string) {
    const result = await this.coverageSerive.findCep(cep);
    return { exists: result };
  }
}
