import React from 'react'
import Terminal from '../features/terminal/components/Terminal/Terminal'

const TerminalPage = () => {
    return (
        <div className="terminal-page" style={{ height: '100vh', width: '100vw', background: '#1a1b26' }}>
            <Terminal />
        </div>
    )
}

export default TerminalPage
