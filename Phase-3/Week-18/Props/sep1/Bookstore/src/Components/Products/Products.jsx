import { Component } from 'react'
import './Products.css'


export default class Main extends Component {
  render() {
    // const {cardColor, img, price, description }
    return (
        <div>
            <div className="container">
            <div className="product-card">
                <div className="card-header green-header">
                    <h2 className="product-title">The Let Them Theory</h2>
                </div>

                <div className="product-image">
                    <img
                        src="https://m.media-amazon.com/images/I/51wzfAWW1bL._SY445_SX342_.jpg"
                        alt="The Let Them Theory"
                    />
                </div>

                <div className="product-content">
                    <h3 className="product-price">$12.99</h3>
                    <p className="product-description">
                        If you've ever felt stuck, overwhelmed, or frustrated with where you
                        are, the problem isn't you. The problem is the power you give to other
                        people. Two simple words—Let Them—will set you free. Free from the
                        opinions, drama, and judgments of others. Free from the exhausting cycle
                        of trying to manage everything and everyone around you.
                    </p>
                </div>

                <div className="add-to-cart">
                    <button className="btn" type="submit">Add to cart</button>
                </div>
                </div>
            </div>
      </div>
    )
  }
}
