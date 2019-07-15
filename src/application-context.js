import {UsersDao} from './dao';
import getConnection from './db-connection';
import config from './config';

let dbConnection = null, usersDao;

getConnection(config.mongoUrl).then((connection) => {
  dbConnection = connection;
  usersDao = new UsersDao(dbConnection);
});


export {
  usersDao
}
