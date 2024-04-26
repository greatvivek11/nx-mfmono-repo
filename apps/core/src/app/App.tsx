import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Todos = await import('todos/Module').then((m) => m.default);

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="core" />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
