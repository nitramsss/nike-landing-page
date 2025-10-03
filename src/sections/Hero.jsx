import ShopNowButton from "../components/ShopNowButton"
import { bigShoe1, collectionBackground } from "../../assets/images"


const Hero = () => {
  return (
    <div>
      <section className="p-10">
        <p className="font-montserrat text-red-500 text-lg">Our Summer collections</p>
        <h1 className="font-bold text-[72px] mb-3">The New Arrival <span className="text-red-500">Nike</span> Shoes</h1>
        <p className="font-montserrat text-xl text-slate-600 mb-10">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <ShopNowButton />
      </section>
      <section className="flex flex-wrap gap-10 mt-20 text-5xl px-10 mb-10">
        <h1 className="flex flex-col font-palanquin font-bold">1k+<span className="text-base font-montserrat font-light">Brands</span></h1>
        <h1 className="flex flex-col font-palanquin font-bold">500+<span className="text-base font-montserrat font-light">Shops</span></h1>
        <h1 className="flex flex-col font-palanquin font-bold">250k+<span className="text-base font-montserrat font-light">Customers</span></h1>
      </section>
      <section className="mb-20 h-170 pb-15 max-sm:h-145">
        <div className="relative h-full items-center justify-center flex">
          <img src={collectionBackground} className="object-cover h-full w-full" />
          <img src={bigShoe1} className="absolute" />
        </div>
      </section>
      
      

    </div>
  )
}

export default Hero