import AboutWpPool from "./components/AboutWpPool"
import Banner from "./components/Banner"
import CompanyTable from "./components/CompanyTable"
import Footer from "./components/Footer"
import Graph from "./components/Graph"
import Menu from "./components/Menu"
import Potential from "./components/Potential"
import SelectedPortfolio from "./components/SelectedPortfolio"
import StateOfUsa from "./components/StateOfUsa"
import Stories from "./components/Stories"
import ScrollToTop from "react-scroll-to-top";




function App() {

  


  return (
    <>


    <Menu/>
    <Banner/>
    <Graph/>
    <CompanyTable/>
    <Potential/>
    <StateOfUsa/>
    <Stories/>
    <AboutWpPool/>
    <SelectedPortfolio/>
    <Footer/>
    <ScrollToTop smooth />

    </>
  )
}

export default App
