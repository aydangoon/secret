import React from 'react'

export default class Rain extends React.Component {
  componentDidMount() {
    let hrElement
    let counter = 100
    for (let i = 0; i < counter; i++) {
      hrElement = document.createElement('HR')

      hrElement.style.left =
        Math.floor(Math.random() * (window.innerWidth + 50)) + 'px'
      hrElement.style.animationDuration = 0.75 + Math.random() * 0.3 + 's'
      hrElement.style.animationDelay = Math.random() * 5 + 's'

      document.body.appendChild(hrElement)
    }
  }
  render() {
    return null
  }
}
