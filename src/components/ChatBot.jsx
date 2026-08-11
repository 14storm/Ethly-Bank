import { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { MessageQuestion, CloseCircle, Send2 } from 'iconsax-react'
import '../styles/chatbot.css'

const canned = [
  "Thanks for reaching out! A member of our team will be with you shortly.",
  "Great question — you can open an Ethly account in under 2 minutes.",
  "We're here to help with transfers, bills, and account setup.",
  "You can reach us anytime at help@ethlybank.com too.",
]

function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi 👋 I'm Ethly's assistant. How can I help you today?" },
  ])
  const [input, setInput] = useState('')
  const panelRef = useRef(null)
  const buttonRef = useRef(null)
  const messagesEndRef = useRef(null)

  useGSAP(() => {
    if (open && panelRef.current) {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 20, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power3.out' }
      )
    }
  }, [open])

  function toggleOpen() {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        rotate: open ? 0 : 90,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
    setOpen((prev) => !prev)
  }

  function sendMessage(e) {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg = { from: 'user', text: input }
    setMessages((prev) => [...prev, userMsg])
    setInput('')

    setTimeout(() => {
      const reply = canned[Math.floor(Math.random() * canned.length)]
      setMessages((prev) => [...prev, { from: 'bot', text: reply }])
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    }, 900)

    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <div className="chatbot-wrap">
      {open && (
        <div className="chatbot-panel" ref={panelRef}>
          <div className="chatbot-header">
            <div>
              <span className="chatbot-header-title">Ethly Support</span>
              <span className="chatbot-header-status">
                <span className="status-dot" /> Online
              </span>
            </div>
          </div>

          <div className="chatbot-messages">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`chatbot-bubble ${m.from === 'user' ? 'bubble-user' : 'bubble-bot'}`}
              >
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input-row" onSubmit={sendMessage}>
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="chatbot-input"
            />
            <button type="submit" className="chatbot-send">
              <Send2 size={18} color="#111111" />
            </button>
          </form>
        </div>
      )}

      <button className="chatbot-fab" onClick={toggleOpen} aria-label="Open chat">
        <span ref={buttonRef} className="chatbot-fab-icon">
          {open ? (
            <CloseCircle size={26} color="#111111" variant="Bold" />
          ) : (
            <MessageQuestion size={26} color="#111111" variant="Bold" />
          )}
        </span>
      </button>
    </div>
  )
}

export default ChatBot