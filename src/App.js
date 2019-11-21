import React, { Component } from 'react'
import Article from "./components/article"
import Recommendation from "./components/recommendation"
import { ToggleProvider } from './components/toggleContext'


class Home extends Component {


  render() {
    return (
      <div>
        <ToggleProvider >
          <Article
            headline="Awsome feature toggles and how they work"
            text="Feature toogle are awesome to change the behavier of your app without changing your code" />
        </ToggleProvider >
      </div>
    )
  }
}

export default Home
