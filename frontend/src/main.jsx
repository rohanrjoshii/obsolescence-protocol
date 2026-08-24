import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }
  static getDerivedStateFromError(error) {
    return { error }
  }
  componentDidCatch(error, info) {
    console.error('App crashed:', error, info)
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{
          minHeight: '100vh',
          background: '#0f0f13',
          color: '#e07a5f',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'monospace',
          padding: '2rem',
          gap: '1rem',
        }}>
          <h1 style={{ color: '#d4a373', fontSize: '1.5rem' }}>RUNTIME ERROR</h1>
          <pre style={{
            background: '#1a192a',
            color: '#81b29a',
            padding: '1rem',
            borderRadius: '8px',
            maxWidth: '800px',
            overflow: 'auto',
            fontSize: '0.75rem',
            border: '1px solid #2e2d3e',
          }}>
            {this.state.error?.toString()}
          </pre>
          <button
            onClick={() => this.setState({ error: null })}
            style={{
              background: '#d4a373',
              color: '#0f0f13',
              border: 'none',
              padding: '0.5rem 1.5rem',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontFamily: 'monospace',
            }}
          >
            RETRY
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
