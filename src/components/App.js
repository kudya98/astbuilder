import React, { Suspense, lazy } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/App.css'
import '../styles/MenuBar.css'
import '../styles/Editors.css'
const MenuBar = lazy(() => import('../containers/MenuBar'))
const InputWindow = lazy(() => import('../containers/InputWindow'))
const OutputWindow = lazy(() => import('../containers/OutputWindow'))

const App = () => {
  return (
    <div className='app'>
      <Suspense fallback={<div className='loader' />}>
        <MenuBar />
        <div className='editors'>
          <InputWindow />
          <OutputWindow />
        </div>
      </Suspense>
    </div>
  )
}

export default App
