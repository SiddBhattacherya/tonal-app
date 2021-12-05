import logo from './logo.svg';
import './App.css';
import React from 'react';

class TonalComponent extends React.Component{
  
  render(){
      return (
    
        <div>
         
        <div className="bubble">
          <div className="label">{this.props.label}</div>
          <div className="weight">{this.props.weight}</div>
          <div className="unit">lbs</div>
        </div>

        </div>
        
    );

  }
 
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      label: 'Label',
      weight: 'Weight',
      unit: 'Unit'
  
  };

    this.handleChangeLabel = this.handleChangeLabel.bind(this);
    this.handleChangeWeight = this.handleChangeWeight.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeLabel(event) {
    this.setState({label: event.target.value});
  }
  handleChangeWeight(event) {
    this.setState({weight: event.target.value});
  }
 
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.label);
    event.preventDefault();
  }

  render(){
    return(
      <div>
        <TonalComponent label={this.state.label} weight = {this.state.weight}/>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <label className="formLabel">
            
              Label
            <input type="text" value={this.state.label} onChange={this.handleChangeLabel} />
            </label>
            <label className="formWeight">
            
              Weight
            <input type="text" value={this.state.weight} onChange={this.handleChangeWeight} />
            </label>
                        
            
          </form>
          
           </div>
      </div>

    );
  }
}

export default App;
