import { arrowRight } from "../../assets/icons"

const ShopNowButton = () => {
  return (
    <button className='bg-red-500 text-white px-6 py-3 rounded-full font-montserrat w-47 text-lg flex gap-2 justify-center'>
      Shop Now
      <img src={arrowRight} alt="Shop Now" className='inline-block ml-2' />
    </button>

    )
}

export default ShopNowButton