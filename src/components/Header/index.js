import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="wave"
        className="logo"
        src="https://res.cloudinary.com/dpm4p4bpe/image/upload/v1656666522/codext_vpaynd.png"
      />
    </div>
    <ul className="nav-items-list">
      <li className="link-item home-text">Home</li>
      <li className="link-item">Services</li>
      <li className="link-item">Pricing</li>
      <li className="link-item">Testimonials</li>
      <li className="link-item">Testimonials</li>
      <li className="link-item">Blog</li>
    </ul>
    <button type="button" className="free-trial-btn">
      Free Trial
    </button>
  </nav>
)

export default Header
