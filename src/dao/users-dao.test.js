import config from '../config';
import getConnection from '../db-connection';
import UsersDao from './users-dao';

describe('Tests suite for Users Dao', () => {

  let usersDao = null;
  beforeEach(async () => {
    const dbConnection = await getConnection(config.mongoUrl);
    usersDao = new UsersDao(dbConnection);
  });

  it('Should get dao object on initialization', () => {
    expect(usersDao).to.be.not.undefined;
  });

  it('Should get user by username and password', async () => {
    const user = await usersDao.getUserByEmailAndPassword('gwinton0@unc.edu', 'WpwWZq60Qb5S');
    expect(user.firstName).to.eq('Gisella');
    expect(user.lastName).to.eq('Winton');
  });

  it('Should get null when wrong email or password is passed to getUserByEmailAndPassword', async () => {
    const user = await usersDao.getUserByEmailAndPassword('gwinton0@unc.edu1', 'WpwWZq60Qb5S');
    expect(user).to.be.null;
  });

});
