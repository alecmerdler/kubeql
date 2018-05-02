import { buildSchema, graphql } from 'graphql';

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

graphql(schema, '{ hello }').then(response => {
    console.log(response);
});
