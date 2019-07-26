import React from 'react'
import './slider.css'

export async function getData(url, data) {
    // Default options are marked with *
    let options = {

        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    let response = await fetch(url, options);
    return await response.json();
}


class Range extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        data:[]
      }
      this.updateRange = this.updateRange.bind(this);
    }
    
    updateRange(e) {
      this.props.updateRange(e.target.value);
      getData(`http://localhost:5000/pits`, this.state)

      .then(data => {
          console.log("get", JSON.stringify(data))
          this.setState({ data: data })
      })
      .catch(error => console.error(error));
    }
    componentDidMount() {
        var th = this;
        getData(`http://localhost:5000/pits`, this.state)

            .then(data => {
                console.log("get", JSON.stringify(data))
                this.setState({ data: data })
            })
            .catch(error => console.error(error));
    }
    render() {
      console.log(this.props);
      const { range } = this.props;
      return (
        <div>
          <input id="range" type="range"
            value={range}
            min="0"
            max="30"
            step="1"
            onChange={this.updateRange}
          />
          <span id="output">
          {range}
          <br />
              {this.state.data.map((item,i)=>
              <span>{item.VehicleId}</span>
              
                )}
         
          </span>
        </div>
      )
    }
  }
  
  export default class Slider extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        rangeVal: 0
      }
      this.updateRange = this.updateRange.bind(this);
    }
    
    updateRange(val) {
      this.setState({
        rangeVal: val
      })
    } 
    
    render() {
      const { rangeVal } = this.state;
      return (
        <Range range={rangeVal} updateRange={this.updateRange}/>
      )
    }  
  }
