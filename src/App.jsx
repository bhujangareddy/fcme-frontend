import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import './App.css'
import { Button } from 'antd';
import Signin from './pages/public/Signin'

function App() {

  return (
    <div className='App'>
      {/* <Button type="primary">Button</Button> */}
      <Signin />
    </div>
  )
}

export default App
