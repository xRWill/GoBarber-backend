import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    // For all itens in array models load init() with connection
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
