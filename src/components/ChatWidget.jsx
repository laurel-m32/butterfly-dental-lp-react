import { useEffect } from 'react'

export default function ChatWidget() {
  useEffect(() => {
    // Load the chat widget script
    const script = document.createElement('script')
    script.src = 'https://widgets.leadconnectorhq.com/loader.js'
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js')
    script.async = true
    document.body.appendChild(script)
    
    return () => {
      // Cleanup on unmount
      document.body.removeChild(script)
    }
  }, [])
  
  return null // This component just loads the script
}
