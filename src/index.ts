import * as fs from 'fs';
import * as path from 'path';
import { buildSchema, graphql } from 'graphql';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);

export const credentialsFromKubeConfig = async() => {
    // TODO: Load/parse kubeconfig.yaml
};

export const credentialsFromCluster = async() => {
    const rootDir = '/var/run/secrets/kubernetes.io/serviceaccount/';
    const namespace = await readFile(path.join(rootDir, 'namespace'));
    const token = await readFile(path.join(rootDir, 'token'));
    const crt = await readFile(path.join(rootDir, 'ca.crt'));

    return {namespace, token, crt};
};

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

graphql(schema, '{ hello }').then(response => {
    console.log(response);
});

export type Credentials = {
    namespace: string;
    token: string;
    crt: string;
};
export type CredentialsFrom = () => Promise<{creds: Credentials}>;
