import getConnection from './index';
import config from '../config';

describe('Tests suite for Mongodb connection', () => {

  it('Should get connection from mongodb successfully', async () => {
    const connection = await getConnection(config.mongoUrl);
    expect(connection).to.not.undefined;
  });

  it('Should throw error when connection URL is wrong', async () => {
    await getConnection('mongodb://localhost:27018/mydb').catch((error) => {
      expect(error).to.not.undefined;
    });
  });

});
