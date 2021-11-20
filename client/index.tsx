import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import React from 'react';
import { render } from 'react-dom';

import { Application } from './components/Application';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

const application = (
  <ApolloProvider client={client}>
    <Application />
  </ApolloProvider>
);

render(application, document.querySelector('#app'));
