import React from 'react'
import { ToggleConsumer } from './toggleContext'

const Recommendation = () =>
  <ToggleConsumer>{({ isFeatureEnabled }) => isFeatureEnabled("recommendation") ?
    < div >
      <h2>Related articles</h2>
      <div className="wrapper">
        <div>
          <h2>Feature toggles</h2>
          <p>eature Toggles (often also refered to as Feature Flags) are a powerful technique, allowing teams to modify system behavior without changing code. </p>
          <a rel="noopener noreferrer" href="https://www.martinfowler.com/articles/feature-toggles.html" target="_blank">martinfowler.com</a>
        </div>
        <div>
          <h2>Feature toggles</h2>
          <p>eature Toggles (often also refered to as Feature Flags) are a powerful technique, allowing teams to modify system behavior without changing code. </p>
          <a rel="noopener noreferrer" href="https://www.martinfowler.com/articles/feature-toggles.html" target="_blank">martinfowler.com</a>
        </div>
        <div>
          <h2>Feature toggles</h2>
          <p>eature Toggles (often also refered to as Feature Flags) are a powerful technique, allowing teams to modify system behavior without changing code. </p>
          <a rel="noopener noreferrer" href="https://www.martinfowler.com/articles/feature-toggles.html" target="_blank">martinfowler.com</a>
        </div>
      </div>

      <style scoped jsx>{`
      .wrapper {
        display: flex;
      }
    `}</style>
    </div >

    : ""}</ToggleConsumer>

export default Recommendation