import Nav from "./components/Nav"
import Hero from "./sections/Hero"
import PopularProducts from "./sections/PopularProducts"
import SuperQuality from "./sections/SuperQuality"
import Services from "./sections/Services"
import SpecialOffer from "./sections/SpecialOffer.Jsx"
import CustomerReviews from "./sections/CustomerReviews"
import Subscribe from "./sections/Subscribe"
import Footer from "./sections/Footer"
const App = () => {
  return (
    <main>
      <Nav></Nav>    
      <Hero></Hero>
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Subscribe />
      <Footer />
    </main>

  )
}

export default App