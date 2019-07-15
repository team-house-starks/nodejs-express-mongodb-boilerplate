export default class UsersDao {

  constructor(dbConnection) {
    this.collection = dbConnection.collection('users');
  }

  async getUserByEmailAndPassword(email, password) {
    return await this.collection.findOne({email, password});
  }
}
