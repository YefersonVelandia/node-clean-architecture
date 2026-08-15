import mongoose from "mongoose";

interface Options {
  mongoUrl: string;
  dbName: string;
}

/**
 * Handles the connection to the MongoDB database.
 */
export class MongoDatabase {
  /**
   * Establishes a connection to MongoDB using the provided configuration.
   *
   * @param options - MongoDB connection configuration.
   * @param options.mongoUrl - MongoDB connection URI.
   * @param options.dbName - Name of the database to connect to.
   * @throws {Error} If the connection to MongoDB fails.
   */
  static async connect(options: Options) {
    const { mongoUrl, dbName } = options;

    try {
      await mongoose.connect(mongoUrl, {
        dbName,
      });

      console.log("Mongo connected");
    } catch (error) {
      console.log("Mongo connection error");
      throw error;
    }
  }
}
