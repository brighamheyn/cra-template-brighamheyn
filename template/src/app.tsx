import React from 'react';

import './style.scss';

import Counter from 'features/counter';

const App: React.FC = () => {
  return (
    <div className="h-100p w-100p bg-alabaster flex-col flex-1">
      <Counter />
    </div>
  );
}

export default App;
