import logger from "../util/logger.util";
import {APP_IDENTIFIER, DB_PASS, DB_PATH, DB_USER} from "../util/secrets.util";
import mongoose from "mongoose";
import Sample from "../models/sample.model";

class DBService {
  private constructor() {
    logger.silly(`[${APP_IDENTIFIER}] DBService`);

    const options = {
      useNewUrlParser: true,
      user: DB_USER,
      pass: DB_PASS,
    };

    mongoose.connect(DB_PATH, options)
      .then(() => logger.silly("Connected to MongoDb..."))
      .catch((error) => logger.error(error));

    this.initModels();
  }

  static getInstance(): DBService {
    return new DBService();
  }

  private initModels(): void {
    Sample
  }
}

export const dbService = DBService.getInstance();

