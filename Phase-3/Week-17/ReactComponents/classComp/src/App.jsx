
import './App.css'
import "./css/bootstrap.css"
import "./css/styles.css"

import Header from './components/Header/Header.jsx'
import Alert from './components/Alert/Alert.jsx'

import SectionOne from './components/SectionOne/SectionOne.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <>
      <Header/>
      {console.log(5 + 5)}
      <Alert/>
      <SectionOne />
      <Footer />
    </>
  )
}

export default App
