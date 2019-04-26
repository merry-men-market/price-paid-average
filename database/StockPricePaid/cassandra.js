const ExpressCassandra = require('express-cassandra');

const models = ExpressCassandra.createClient({
  clientOptions: {
    contactPoints: ['127.0.0.1'],
    protocolOptions: { port: 9042 },
    keyspace: 'mykeyspace',
    queryOptions: { consistency: ExpressCassandra.consistencies.one },
  },
  ormOptions: {
    defaultReplicationStrategy: {
      class: 'SimpleStrategy',
      replication_factor: 1,
    },
    migration: 'safe',
  },
});

const MyModel = models.loadSchema('Stock', {
  fields: {
    id: 'varchar',
    company: 'varchar',
    price: 'varchar',
    day: 'varchar',
    ticker: 'varchar',
  },
  key: ['id'],
});

MyModel.syncDB((err, result) => {
  if (err) throw err;
  // result == true if any database schema was updated
  // result == false if no schema change was detected in your models
  if (result) {
    console.log('Database updated');
  } else {
    console.log('No changes made.');
  }
});
