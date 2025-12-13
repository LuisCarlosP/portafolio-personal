import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { LanguageProvider } from './providers/LanguageProvider'
import './i18n/config'
import '@fortawesome/fontawesome-free/css/all.min.css'

// Apply saved theme on load
const savedTheme = localStorage.getItem('terminal-theme');
if (savedTheme && savedTheme !== 'dracula') {
    document.documentElement.setAttribute('data-theme', savedTheme);
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <LanguageProvider>
            <HashRouter>
                <App />
            </HashRouter>
        </LanguageProvider>
    </React.StrictMode>,
)
