import { Component } from 'react'
import './App.css'


import Card from './Components/Card/Card'

export default class App extends Component {
  render() {
    
    return (
      <>
        <section className='wrapper'>
          <h1>Business Card App (using HTML & CSS only)</h1>
        </section>

        

        <h2>1. Replacing Components</h2>
        <Card colorNo='firstColor' name='Adugna' email='adugna@gmail.com' phone='+123-456-789'/>
        <Card colorNo='secondColor' name='Tewedaj' email='tewedaj@gmail.com' phone='+251-456-897'/>
        <Card colorNo='thirdColor' name='Biruk' email='biruk@gmail.com' phone='+254-456-897'/>



      </>
    )
  }
}
