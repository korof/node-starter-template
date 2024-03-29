import logger from "../util/logger.util";
import {APP_IDENTIFIER} from "../util/secrets.util";

class DBService {
  private constructor() {
    logger.silly(`[${APP_IDENTIFIER}] DBService`);

    this.initModels();
  }

  static getInstance(): DBService {
    return new DBService();
  }

  private initModels(): void {
  }
}

export const dbService = DBService.getInstance();

