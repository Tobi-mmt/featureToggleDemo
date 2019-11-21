import React, { Component } from 'react'
import bulletTrain from "bullet-train-client";

const ToggleContext = React.createContext({});

class ToggleProvider extends Component {

  isFeatureEnabled = (name) => {
    if (!this.state.toggles || !this.state.toggles[name]) return false
    return this.state.toggles[name].enabled
  }

  state = {
    isFeatureEnabled: this.isFeatureEnabled,
    toggles: {}
  }

  initBulletTrain = () => {
    try {
      bulletTrain.init({
        environmentID: "KrEmRfGHnCaSGDz5TtJGRT",
        onChange: (toggles) => {
          console.log("flags", toggles)
          this.setState({ toggles })
        }
      });
    }
    catch (err) {
      console.error(err)
    }
  }



  componentDidMount() {
    this.initBulletTrain()
  }

  render() {
    return <ToggleContext.Provider value={this.state}>
      {this.props.children}
    </ToggleContext.Provider>
  }
}

const ToggleConsumer = ToggleContext.Consumer


export { ToggleConsumer, ToggleProvider }
