import { Component } from 'react'


export default class Student extends Component {
  render() {
    const {batch, year} = this.props
    return (
      <div>
        <div className='card'>
            <h2>Name: {this.props.name}</h2>
            <h2>Group {this.props.group}</h2>
        </div>

        <div className='batch'>
            <h2>Batch {batch}</h2>
            <h2>Year {year}</h2>
            <br/>
        </div>
        
      </div>
    )
  }
}
