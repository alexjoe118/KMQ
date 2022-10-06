import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {AuthProvider} from './contexts/AuthContext'
import CssBaseline from '@mui/material/CssBaseline'
import '@fontsource/roboto'
import './styles/output.css'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CssBaseline />
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
