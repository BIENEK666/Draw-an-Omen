class App extends React.Component {

  predictions = [{
      content: 'First Omen',
    },
    {
      content: 'Second Omen',
    },
    {
      content: 'Third Omen',
    },
  ]

  state = {
    h1Content: '',
    predictions: this.predictions,
    inputValue: '',
  }

  handleShowBtn = () => {

    const randomNumber = Math.floor(Math.random() * this.predictions.length)
    this.setState({
      h1Content: this.predictions[randomNumber].content
    })
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })

  }

  handleAddBtn = () => {

      if(this.state.inputValue) {

        for(let i = 0; i < this.predictions.length; i++) {


      if(this.state.inputValue === this.predictions[i].content) {
        return alert("This omen already exists!")
      }
      }


      this.predictions.push({
      content: this.state.inputValue
  })

  this.setState({
  inputValue: ''
})

const predArray = []

for(let i = 0; i < this.predictions.length; i++) {
  predArray.push(this.predictions[i].content)
}


alert(predArray.join('- - -'))

console.log(this.predictions)

}else alert('You cannot leave input empty!')
  }




  render() {
    return (
      <>
      <button className = "showPredictionBtn"
      onClick = {this.handleShowBtn}>Show Omen</button>
      <br/>
      <input value = {this.state.inputValue} onChange={this.handleChange} placeholder = 'Add new Omen'
      type = "text"
      className = "addPredictionInput"/>
      <button className = "addPredictionBtn" onClick={this.handleAddBtn}>ADD</button>
      <h1>{this.state.h1Content}</h1>
      </>
    );
  }
}


ReactDOM.render( < App / > , document.getElementById('root'))
