import Header from '../Header'
import Service from '../Service'
import Features from '../Features'
import Pricing from '../Pricing'
import Review from '../Review'
import InsightNews from '../InsightNews'
import Blog from '../Blog'

import './index.css'

const Home = () => (
  <div>
    <div className="bg-container">
      <Header />
      <div className="home-page-container">
        <div className="div-width">
          <h1 className="codext-heading">
            Codext one of the best system in SAAS.
          </h1>
          <p className="codext-description">
            Lorem ipsum dolar sit amet, consectetur adipiscing elit. <br />A
            nulla nulla etiam turpis quam diam et. <br />
            Arcu nisi, sed aenean sit nisl.
          </p>
          <button className="live-demo-btn" type="button">
            Try A Live Demo
          </button>
        </div>
        <img
          alt="img"
          src="https://res.cloudinary.com/dpm4p4bpe/image/upload/v1656663350/assignment_z8hfhu.png"
          className="login-img"
        />
      </div>
    </div>
    <Service />
    <Features />
    <Pricing />
    <Review />
    <InsightNews />
    <Blog />
  </div>
)

export default Home
