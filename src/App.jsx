import './App.scss'
import React from 'react'
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

function App() {

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
