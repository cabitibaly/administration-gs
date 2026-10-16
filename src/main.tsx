import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './contexts/authContext/authProvider'

const client = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
        <QueryClientProvider client={client}>
            <AuthProvider>
                <App />
            </AuthProvider>
        </QueryClientProvider>
        </BrowserRouter>
    </StrictMode>,
)
