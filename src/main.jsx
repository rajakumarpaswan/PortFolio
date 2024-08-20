import React from 'react'
import '@mantine/core/styles.css';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MantineProvider } from '@mantine/core'
import { RouterProvider } from 'react-router-dom'
import { pdfjs } from 'react-pdf';




pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <MantineProvider>
    <RouterProvider router={App}/>
    </MantineProvider>
   
  </React.StrictMode>,
)
