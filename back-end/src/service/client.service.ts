import {
  Injectable,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import { ClientModel } from 'src/models/clients.model';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
  constructor(
    @Inject('ClIENT_REPOSITORY')
    private clientRepository: Repository<ClientModel>,
  ) {}

  async create(client: ClientModel): Promise<ClientModel> {
    try {
      return await this.clientRepository.save(client);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}
