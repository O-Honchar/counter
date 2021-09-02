import React, { Fragment } from 'react';
import CounterFunc from './CounterFunc';
import CounterClass from './CounterClass';

function App() {

  return (
    <Fragment>
      <CounterFunc />
      <CounterClass initialValue={0} initialStep={1} />
    </Fragment>
  )
}

export default App;
