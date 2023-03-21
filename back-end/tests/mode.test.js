const sinon = require('sinon');
const { expect } = require('chai');
import clientsModel from '../src/models/clients.model'

describe('testa clients model', function () {
  beforeEach(sinon.restore)

  describe('testa se é criado um novo cliente com o id 2', function () {
    it('testa se retorna todos os produtos', async function() {
      const query = [{insertId: 2}];
        sinon.stub(connection, 'query').resolves(query);
      const cliente = await clientsModel.registerClient('client');
        expect(product).to.be.equal(4);
    })
  })
})
