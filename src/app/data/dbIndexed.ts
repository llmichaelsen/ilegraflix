import { DBConfig } from 'ngx-indexed-db';

export const dbConfig: DBConfig = {
    name: 'MyDb',
    version: 1,
    objectStoresMeta: [{
      store: 'user',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'email', keypath: 'email', options: { unique: false } },
        { name: 'password', keypath: 'password', options: { unique: false } },
        { name: 'bestGenre', keypath: 'bestGenre', options: { unique: false } },
        { name: 'country', keypath: 'country', options: { unique: false } },
        { name: 'image', keypath: 'image', options: { unique: false } },
      ]
    },
    {
      store: 'movie',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'title', keypath: 'title', options: { unique: false } },
        { name: 'duration', keypath: 'duration', options: { unique: false } },
        { name: 'genre', keypath: 'genre', options: { unique: false } },
        { name: 'image', keypath: 'image', options: { unique: false } },
        { name: 'year', keypath: 'year', options: { unique: false } },
        { name: 'country', keypath: 'country', options: { unique: false } },
      ]
    },
    {
      store: 'movie-watched',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'user', keypath: 'user', options: { unique: false } },
        { name: 'movie', keypath: 'movie', options: { unique: false } }
      ]
    },
    ]
  };
