import './index.css'

const Review = () => (
  <div className="review-container">
    <h1 className="review">Let&apos;s see our User&apos;s Review</h1>
    <p className="review-desc">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque
      tellus <br />
      interdum venenatis auctor et nibh. Rhoncus a, sed lobortis nisi.
    </p>
    <div className="review-three-container">
      <div className="review-single-container highlight-container">
        <div>
          <p className="upper-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
            elit nunc donec elit iaculis arcu. Quis fe......
          </p>
        </div>
        <div className="profile-container">
          <img
            className="review-profile-img"
            alt="profile"
            src="https://res.cloudinary.com/dpm4p4bpe/image/upload/v1656648421/user_jca72j.png"
          />
          <div>
            <p className="name">Wilson Bergson</p>
            <p className="role">Marketing Manager</p>
          </div>
        </div>
      </div>
      <div className="review-single-container ">
        <div>
          <p className="upper-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
            elit nunc donec elit iaculis arcu. Quis fe......
          </p>
        </div>
        <div className="profile-container">
          <img
            className="review-profile-img"
            alt="profile"
            src="https://res.cloudinary.com/dpm4p4bpe/image/upload/v1656648512/man_kqx0bz.png"
          />
          <div>
            <p className="name">Zaire Aminoff</p>
            <p className="role">Marketing Manager</p>
          </div>
        </div>
      </div>
      <div className="review-single-container">
        <div>
          <p className="upper-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
            elit nunc donec elit iaculis arcu. Quis fe......
          </p>
        </div>
        <div className="profile-container">
          <img
            className="review-profile-img"
            alt="profile"
            src="https://res.cloudinary.com/dpm4p4bpe/image/upload/v1656648615/profile_bwg3i7.png"
          />
          <div>
            <p className="name">Ryan Press</p>
            <p className="role">Marketing Manager</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Review
