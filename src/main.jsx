import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import { ChatBubble } from 'react-ai-chatbubble';
import 'react-ai-chatbubble/dist/style.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer>    </ToastContainer>
    <ChatBubble 
     bot-name="My Bot"
     primary-color="#8b5cf6"
     welcome-message="Hello! How can I help?"
     apiKey="2aa448ad9dad3271051b2bd6037ffd297ac59c8cb64a50ad210f705f967a58eb"
   />
      <App />
  </StrictMode>,
)

