import { Component } from 'react'
import Header from './Components/Header/Header.jsx'
import Products from './Components/Products/Products'
import Footer from './Components/Footer/Footer.jsx'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Products />

        <Footer />
      </div>
    )
  }
}
