import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  if (models[modelName] && models[modelName].db && models[modelName].db.db) {
    let modelExists = await models[modelName].db.db.listCollections({
      name: collectionName
    }).toArray()

    if (modelExists && modelExists.length) {
      await db.dropCollection(collectionName);
    }
  }
}