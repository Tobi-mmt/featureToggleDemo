import React, { Component } from 'react'
import Article from "./components/article"

class Home extends Component {
  render() {
    return (
      <div>
        <Article
          headline="Awsome feature toggles and how they work"
          text="Feature toogle are awesome to change the behavier of your app without changing your code" />
      </div>
    )
  }
}

export default Home
