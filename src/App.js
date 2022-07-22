import React from 'react'
import memories from './memories'
import { generateFlowers } from './flowers'
import ReactAudioPlayer from 'react-audio-player'
import './App.css'
import Rain from './Rain'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      memoryI: 0,
      i: 0,
      letterI: 0,
      show: false,
    }
    this.spaceDown = false
    this.next = this.next.bind(this)
    this.nextLetter = this.nextLetter.bind(this)
    this.start = this.start.bind(this)
  }

  next() {
    if (
      this.state.letterI <
      memories[this.state.memoryI].texts[this.state.i].text.length
    ) {
      this.setState({
        letterI: memories[this.state.memoryI].texts[this.state.i].text.length,
      })
      this.talking.pause()
    } else if (this.state.i < memories[this.state.memoryI].texts.length - 1) {
      this.setState({ i: this.state.i + 1, letterI: 0 })
      this.talking.play()
    } else {
      this.setState({
        memoryI:
          this.state.memoryI < memories.length - 1
            ? this.state.memoryI + 1
            : this.state.memoryI,
        i: 0,
        letterI: 0,
      })
      this.talking.play()
    }
  }

  nextLetter() {
    if (
      this.state.letterI <
      memories[this.state.memoryI].texts[this.state.i].text.length
    ) {
      this.setState({ letterI: this.state.letterI + 1 })
    } else {
      this.talking.pause()
    }
  }

  start() {
    this.audio.play()
    this.audio2.play()
    this.talking.play()
    this.setState({ show: true })
    setInterval(this.nextLetter, 50)
  }

  componentDidMount() {
    document.addEventListener('keydown', ({ code }) => {
      if (!this.spaceDown && code === 'Space') {
        this.spaceDown = true
      }
    })
    document.addEventListener('keyup', ({ code }) => {
      if (this.spaceDown && code === 'Space') {
        this.spaceDown = false
        this.next()
      }
    })
    this.audio = new Audio('./rain.mp3')
    this.audio.loop = true
    this.audio2 = new Audio('./mydude.mp3')
    this.audio2.volume = 0.5
    this.audio2.loop = true
    this.talking = new Audio('./blip.mp3')
    this.talking.loop = true
    this.talking.volume = 0.5
  }

  render() {
    const { i, memoryI, letterI } = this.state
    const { src, texts } = memories[memoryI]
    return !this.state.show ? (
      <div id="fill">
        <button id="start-button" onClick={this.start}>
          Begin
        </button>
      </div>
    ) : (
      <div id="content">
        {src && (
          <img
            className="boxed"
            src={`imgs/mems/${src}`}
            alt=""
            id="main-img"
          />
        )}
        <div id="bottom">
          <img src={`imgs/cat/${texts[i].emotion}.png`} alt="" id="sprite" />
          <div id="textbox">{texts[i].text.substring(0, letterI)}</div>
        </div>
        <Rain />
        <div id="bg" />
      </div>
    )
  }
}

function random(a) {
  return a[Math.floor(Math.random() * a.length)]
}

export default App
