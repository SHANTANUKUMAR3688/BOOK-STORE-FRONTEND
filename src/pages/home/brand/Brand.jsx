import './Brand.css';
import {brandsData} from '../../../Data/Data'
function Brand() {
  return (
    <>
    <section className='px-[20px] py-[10px] bg-gray-300' >
        <div className='container brands-container'>
            {
                brandsData.map(({img},index)=>{
                    return(
                        <div className='brand' key={index}>
                            <img src={img} alt=""/>
                        </div>
                    )
                })
            }
        </div>
    </section>
    </>
  )
}

export default Brand