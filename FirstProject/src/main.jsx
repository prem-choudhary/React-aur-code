import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Hello from './secondfle'
// import App from './App.jsx'
// import File from './firstFile.jsx'
import Hello from './secondfle'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <File/> */}
    <Hello/>
  </StrictMode>,
)
