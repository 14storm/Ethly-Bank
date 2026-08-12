import { Warning2 } from 'iconsax-react'
import '../styles/disclaimer.css'

const message = "This is a student portfolio project, not a real bank — Do not enter your BVN, card details, passwords, or any real personal or financial information anywhere on this site."

function DisclaimerBanner() {
  return (
    <div className="disclaimer-banner">
      <div className="disclaimer-track">
        {[...Array(4)].map((_, i) => (
          <span className="disclaimer-item" key={i}>
            <Warning2 size={15} color="#ffffff" variant="Bold" />
            {message}
          </span>
        ))}
      </div>
    </div>
  )
}

export default DisclaimerBanner