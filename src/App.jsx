import Achievements from "./Components/Achievements/Achievements"
import Banner from "./Components/Banner/Banner"
import Footer from "./Components/Footer/Footer"
import NavBar from "./Components/Nav/NavBar"
import Pricing from "./Components/Pricing/Pricing"
import Steps from "./Components/Steps/Steps"
import WorkFlow from "./Components/WorkFlow/WorkFlow"

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Achievements></Achievements>

      <Steps></Steps>
      <Pricing></Pricing>
      <WorkFlow></WorkFlow>
      <Footer></Footer>
    </>
  )
}

export default App
