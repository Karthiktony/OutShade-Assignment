import './index.css'

const InsightNews = () => (
  <div className="insightNews-container">
    <h1 className="insightNews-heading">Latest Insights News</h1>
    <div className="insight-two-container">
      <div className="single-insight-container">
        <div>
          <img
            className="group-image"
            alt="group profile"
            src="https://res.cloudinary.com/dpm4p4bpe/image/upload/v1656604809/group_2_esxx5s.jpg"
          />
          <div className="para-conatiner">
            <p>Our Creative Team </p>
            <p>17 June, 2021</p>
            <p>by Stive Smithi</p>
          </div>
          <div className="main-container">
            <p className="insight-heading">
              Running Remotes onsight & offsight
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
              fermentum, enim vel adipiscing non. Lacus, nunc, at et vel tellus
              dignissim Quis.
            </p>
            <button className="continue-button" type="button">
              Continue
            </button>
          </div>
        </div>
      </div>
      <div className="single-insight-container">
        <div>
          <img
            className="group-image"
            alt="group profile"
            src="https://res.cloudinary.com/dpm4p4bpe/image/upload/v1656604803/group_1_algq6e.jpg"
          />
          <div className="para-conatiner">
            <p>Create presentations </p>
            <p>17 June, 2021</p>
            <p>by Thomas Lewes</p>
          </div>
          <div className="main-container">
            <p className="insight-heading">
              A new look and new ways to collabarate
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
              fermentum, enim vel adipiscing non. Lacus, nunc, at et vel tellus
              dignissim Quis.
            </p>
            <button className="continue-button" type="button">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default InsightNews
