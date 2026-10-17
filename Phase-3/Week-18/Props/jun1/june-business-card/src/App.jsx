import { Component } from 'react'
import './App.css'
import { userData } from './assets/userData'


import Card from './Components/Card/Card'

export default class App extends Component {
  render() {
    
    return (
      <>
        {/* <section className='wrapper'>

          <h1>1. Replacing Components</h1>

          <h1>Business Card App (using HTML & CSS only)</h1>


          <Card colorNo='firstColor' name='Adugna' email='adugna@gmail.com' phone='+123-456-789'/>
          <Card colorNo='secondColor' name='Tewedaj' email='tewedaj@gmail.com' phone='+251-456-897'/>
          <Card colorNo='thirdColor' name='Biruk' email='biruk@gmail.com' phone='+254-456-897'/>

        </section> */}

{/* 
        <section className='wrapper'>

          <h1>2. Using Array's .map() method </h1>

          <h1>Business Card App (using HTML & CSS only)</h1>


          {userData.map((singleUserData, i) => {
            return (
              <Card 
              key={i}  // to unqiuely identify the data
              colorNo={singleUserData.colorNo} 
              name={singleUserData.name} 
              email={singleUserData.email} 
              phone={singleUserData.phone}
              />
            )
          })}
          
        </section> */}
        

        <section className='wrapper'>

          <h1>3. Using destructuring technique</h1>

          <h1>Business Card App (using HTML & CSS only)</h1>


          {userData.map(({colorNo, name, email, phone, group, batch}, i) => {
            return (
              <Card 
              key={i}  // to unqiuely identify the data
              colorNo={colorNo} 
              name={name} 
              email={email} 
              phone={phone}
              group={group}
              batch={batch}
              />
            )
          })}
  
        </section>



      </>
    )
  }
}
