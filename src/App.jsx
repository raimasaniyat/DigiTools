import Banner from "./Components/Banner/Banner"
import Footer from "./Components/Footer/Footer"
import NavBar from "./Components/Nav/NavBar"
import WorkFlow from "./Components/WorkFlow/WorkFlow"

function App() {

  return (
    <>
    <section className="nav">
      <NavBar></NavBar>
    </section>
    <section className="banner">
      <Banner></Banner>
    </section>
    <WorkFlow></WorkFlow>
    <Footer></Footer>
    </>
  )
}

export default App
