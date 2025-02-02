import filter from '../../assets/features/filter.png'
import rating from '../../assets/features/rating.png'
import secure from '../../assets/features/secure.png'
import wishlist from '../../assets/features/wishlist.png'
function About1() {
  return (
    <>
    <div className="bg-gray-300 h-[250px]">
      <div className='flex flex-row items-center justify-center text-center pt-12'>
        <div className='flex flex-col items-center justify-center'>
          <img  className="w-10" src={filter}/>
          <p className='font-bold py-3'>Advanced Search and Filter</p>
          <p className='italic'>Effortlessly search and filter through thousands of books to find the perfect one for you.</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <img className="w-10" src={rating}/>
          <p className='font-bold py-3'>User Reviews and Ratings</p>
          <p className='italic'>Customers can share reviews rate books, and guide future readers.</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <img className="w-10" src={wishlist}/>
          <p className='font-bold py-3'>Wishlist and Favorites</p>
          <p className='italic'>Customers can share reviews rate books, and guide future readers.</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <img className="w-10"  src={secure}/>
          <p className='font-bold py-3'>Secure online payment</p>
          <p className='italic'> Customers can share reviews rate books, and guide future readers.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default About1

