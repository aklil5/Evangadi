import './App.css'

import '../src/assets/css/bootstrap.css'
import '../src/assets/css/styles.css'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Alert from './Components/Main/Alert'
import SectionOne from './Components/Main/SectionOne'
import SectionTwo from './Components/Main/SectionTwo'
import SectionThree from './Components/Main/SectionThree'
import SectionFour from './Components/Main/SectionFour'
import SectionFive from './Components/Main/SectionFive'
import SectionSix from './Components/Main/SectionSix'

function App() {
  return (
    <>
      <Header />
      <Alert />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />


      <Footer />
    </>
  )
}

export default App
