import { Component } from 'react'
import './Card.css'

export default class Card extends Component {
  render() {
    const {colorNo, name, email, phone} = this.props;
    console.log(this.props);
    return (
        <div className={`container ${colorNo}`}> 
        {/* {`//put it in `` template literal since it will only see it as string if inside "" and add {} to help it understand that this is a js code `} */}
            <h3>Evangadi INC.</h3>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone number: {phone}</p>
        </div>
    )
  }
}
