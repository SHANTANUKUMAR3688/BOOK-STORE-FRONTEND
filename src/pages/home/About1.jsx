
import filter from '../../assets/features/filter.png'
import rating from '../../assets/features/rating.png'
import secure from '../../assets/features/secure.png'
import wishlist from '../../assets/features/wishlist.png'

function About1() {
  return (
    <div className="bg-gray-300 py-12 px-4">
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center'>
        <div className='flex flex-col items-center'>
          <img className="w-12" src={filter} alt="Filter Icon"/>
          <p className='font-bold py-3'>Advanced Search and Filter</p>
          <p className='italic text-sm'>Effortlessly search and filter through thousands of books to find the perfect one for you.</p>
        </div>

        <div className='flex flex-col items-center'>
          <img className="w-12" src={rating} alt="Rating Icon"/>
          <p className='font-bold py-3'>User Reviews and Ratings</p>
          <p className='italic text-sm'>Customers can share reviews, rate books, and guide future readers.</p>
        </div>

        <div className='flex flex-col items-center'>
          <img className="w-12" src={wishlist} alt="Wishlist Icon"/>
          <p className='font-bold py-3'>Wishlist and Favorites</p>
          <p className='italic text-sm'>Save books to your wishlist and keep track of your favorites.</p>
        </div>

        <div className='flex flex-col items-center'>
          <img className="w-12" src={secure} alt="Secure Payment Icon"/>
          <p className='font-bold py-3'>Secure Online Payment</p>
          <p className='italic text-sm'>Make safe and seamless transactions with our secure payment system.</p>
        </div>
      </div>
    </div>
  )
}

export default About1;

