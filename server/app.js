const express = require('express');
const graphqlHTTL = require('express-graphql');

const app = express();

app.use('/graphql',graphqlHTTL({

}));

app.listen(4000,() => {
  console.log('listening port 4000');
})
