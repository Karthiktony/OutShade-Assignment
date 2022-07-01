import './index.css'

const Pricing = () => (
  <div className="pricing-container">
    <h1 className="heading">Choose Your Best Pricing Plan</h1>
    <p className="add-text ">
      Added for Monthly
      <span>
        <input type="radio" checked />
      </span>{' '}
      Yearly
    </p>
    <div className="three-container">
      <div className="single-pricing-container">
        <div className="top-container">
          <p className="price-heading">Start-Up</p>
          <hr />
          <h1 className="price">$10/mo</h1>
        </div>
        <div>
          <p>Easy Customizable</p>
          <p>Commerical License</p>
          <p>Single User License</p>
          <p>Hotline Support 24/7</p>
          <button className="pricing-button" type="button">
            Try This Package
          </button>
        </div>
      </div>
      <div className="single-pricing-container req">
        <div className="top-container highlight">
          <p className="price-heading">Classic</p>
          <hr />
          <h1 className="price">$30/mo</h1>
        </div>
        <div>
          <p>Easy Customizable</p>
          <p>Commerical License</p>
          <p>5 User License</p>
          <p>Hotline Support 24/7</p>
          <button className="pricing-button highlight-button" type="button">
            Try This Package
          </button>
        </div>
      </div>
      <div className="single-pricing-container">
        <div className="top-container">
          <p className="price-heading">Premium</p>
          <hr />
          <h1 className="price">$49/mo</h1>
        </div>
        <div>
          <p>Easy Customizable</p>
          <p>Commerical License</p>
          <p>10 User License</p>
          <p>Hotline Support 24/7</p>
          <button className="pricing-button" type="button">
            Try This Package
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default Pricing
