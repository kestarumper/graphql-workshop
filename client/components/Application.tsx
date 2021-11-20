import React from 'react';
import pick from 'lodash/pick';
import { gql, useQuery } from "@apollo/client";

import SIMPLE from '../queries/simple.graphql';

export function Application() {
  const response = useQuery(gql(SIMPLE), { variables: { id: 7 } });
  const results = pick(response, ['data', 'error', 'loading']);

  return (
    <pre>
      <code>{JSON.stringify(results, null, 2)}</code>
    </pre>
  );
}
