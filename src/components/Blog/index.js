import './index.css'

const Blog = () => (
  <div className="blog-conatiner">
    <div className="context-container">
      <div className="solo-conatiner">
        <ul className="list">
          <li>
            <h1 className="blog-headings codext-text">Codext</h1>
          </li>
          <li className="blog-list-item">
            Lorem ipsum dolor sit amet, consect etur adipiscing elit.
            Ullamcorper purus eleifend purus faucibus facibus.
          </li>
          <li>
            <div className="social-media-container">
              <img
                className="social-media-icon"
                alt="twitter"
                src="https://res.cloudinary.com/dpm4p4bpe/image/upload/v1656649838/twitter_vnec1k.png"
              />
              <img
                className="social-media-icon"
                alt="facebook"
                src="https://res.cloudinary.com/dpm4p4bpe/image/upload/v1656649845/facebook_gua8sw.png"
              />
              <img
                className="social-media-icon"
                alt="instagram"
                src="https://res.cloudinary.com/dpm4p4bpe/image/upload/v1656649859/instagram_hsxafj.png"
              />
              <img
                className="social-media-icon"
                alt="linkedin"
                src="https://res.cloudinary.com/dpm4p4bpe/image/upload/v1656649852/linkedin_tlnoad.png"
              />
            </div>
          </li>
        </ul>
      </div>
      <div className="remaining-containers ">
        <ul className="list">
          <li>
            <h1 className="blog-headings">Resources </h1>
          </li>
          <li className="blog-list-item">Services</li>
          <li className="blog-list-item">Pricing</li>
          <li className="blog-list-item">Testimonials</li>
          <li className="blog-list-item">Blog</li>
        </ul>
      </div>
      <div className="remaining-containers">
        <ul className="list">
          <li>
            <h1 className="blog-headings"> Usefull Links</h1>
          </li>
          <li className="blog-list-item">Terms of services</li>
          <li className="blog-list-item">Privacy Policy</li>
          <li className="blog-list-item">Cookie Policy</li>
          <li className="blog-list-item">Contact Us</li>
        </ul>
      </div>
      <div className="solo-conatiner">
        <ul className="list">
          <li>
            <h1 className="blog-headings">Newsletter</h1>
          </li>
          <li className="blog-list-item">
            Sign up and recieve the latest news via email.
          </li>
          <li className="blog-list-item">
            <input type="text" className="input" placeholder="Email Address" />
            <button type="button" className="button">
              Send
            </button>
          </li>
        </ul>
      </div>
    </div>
    <hr className="hr-line" />
    <p>Copyright 2021 The Codext All Rights Reserved.</p>
  </div>
)

export default Blog
