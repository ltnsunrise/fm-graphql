import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  gql,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

const link = new HttpLink({ uri: 'http://localhost:4000/' });
const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

// const query = gql`
//   {
//     characters {
//       results {
//         name
//         id
//       }
//     }
//   }
// `;

// client.query({ query }).then((result) => console.log(result));

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
