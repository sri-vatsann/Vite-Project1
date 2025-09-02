import Navbar from './componenta/Navbar'
import Header from './componenta/Header'
import Hero from './componenta/Hero'
import Article from './componenta/Article'
import Table from './componenta/Table'
import Aside from './componenta/Aside'
import Footer from './componenta/Footer'

function App() {
 

  return (
    <>
    
    <Navbar/>
    <Header/>
    <Hero/>
    <div className='container flex flex-col md:flex-row mx-auto p-6'>
      <main className='flex-1'>
        <Article/>
        <Table/>
      </main>
      <Aside/>
    </div>
    <Footer/>
    
    </>
  )
}

export default App
