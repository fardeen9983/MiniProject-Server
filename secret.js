const secrets = {
    dbUri: 'mongodb://localhost:27017/TodoApp',
  };
  
  const getSecret = (key) => secrets[key];
  
  module.exports = { getSecret };