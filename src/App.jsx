import React from 'react';
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="logo-header">
        <div className="brand">
          <div className="shield">
            <span className="snowflake">❄️</span>
          </div>
          <h1 className="brand-name">WinterShield</h1>
        </div>
        <div className="auth-buttons">
          <button className="login">Log In</button>
          <button className="sign-up-button">Sign Up</button>
        </div>
      </header>
    </div>
  )
}

export default App