import BannerCrd from "./BannerCrd";

function Banner1(){
    return(
        <>
        <div className="px-4 lg:px-24 bg-teal-200 flex items-center">
            <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-28">
            <div className="md:w-1/2 space-y-4 h-full">
                <h2 className="text-6xl font-bold leading-snug text-black">
                    Buy and Sell Your Books <span className="text-blue-700">for the Best prices</span>
                </h2>
                <p className="md:4/5 ">Find the best deals on books from top-rated sellers. Buy and sell your books with confidence.</p>
                <button className="bg-yellow-500 rounded-md w-32">Purchase</button>
            </div>
                

                <div>
                <BannerCrd/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Banner1;