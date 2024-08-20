// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Main from './components/Main'
// import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
// import DemoTabs from './components/DemoTabs'
// import { MantineProvider } from '@mantine/core'


const App = createBrowserRouter(
  
  
  [
  
  {
  path:"/",
  element:<Main/>
},
{
path:"/project",
  element:<Projects/>
},
{
  path:"/experience",
    element:<Experience/>
  },
  {
    path:"/skills",
      element:<Skills/>
    },
    {
      path:"/contact",
        element:<Contact/>
      },

])



export default App