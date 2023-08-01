import AddRestaurant from '../components/AddRestaurant'
import RestaurantList from '../components/RestaurantList'

export default function Home() {
  return (
    <main className='mx-auto container text-center'>
      <AddRestaurant />
      <RestaurantList />
    </main>
  )
}
