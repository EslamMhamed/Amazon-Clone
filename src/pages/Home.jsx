import Banner from '../components/home/Banner'
import Products from '../components/home/Products'

function Home() {

  

  return (
    <div>
        <Banner />
        <div className="-mt-32 pt-10">
          <Products />
        </div>
    </div>
  )
}

export default Home