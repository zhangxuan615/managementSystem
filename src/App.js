import React from 'react';
import Com1 from './component/Test';

function App() {
  return (
    <div className="App">
      <Com1 children='xb'>abc<p>xx</p></Com1>
      <Com1></Com1>
    </div>
  );
}

export default App;
