import React from 'react'
import ReactDOM from 'react-dom'


const Statistiikka = (props) => (
        <div>
        <p>Hyvä: {props.palaute.hyva}</p>
        <p>Neutraali: {props.palaute.neutraali}</p>
        <p>Huono: {props.palaute.huono}</p>

        <p>Keskiarvo: {props.palaute.hyva + (props.palaute.huono*-1)}</p>
        <p>Positiivisia: {props.palaute.hyva / (props.palaute.hyva + props.palaute.neutraali + props.palaute.huono)}%</p>
        </div>
      )


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
  		hyva : 0,
  		neutraali : 0,
  		huono : 0
   }
 }


render() {
  return (
    <div>
      <h1>Unicafe-palaute</h1>
	  <h2>Anna palautetta!</h2>
    <div>
        <button onClick={() => this.setState({ hyva: this.state.hyva + 1 })}>Hyvä</button>
        <button onClick={() => this.setState({ neutraali: this.state.neutraali + 1 })}>Neutraali</button>
        <button onClick={() => this.setState({ huono: this.state.huono + 1 })}>Huono</button>
    </div>
	  <h2>Statistiikka </h2>
      <Statistiikka palaute={this.state} />
    </div>
  )
}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
