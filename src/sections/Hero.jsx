import ShopNowButton from "../components/ShopNowButton";
import {
  thumbnailBackground,
  bigShoe1,
  collectionBackground,
} from "../../assets/images";
import { statistics, shoes } from "../constants";

const Hero = () => {
  return (
    <div>
      <section className="p-10">
        <p className="font-montserrat text-red-500 text-lg">
          Our Summer collections
        </p>
      <h1 className="font-bold text-[72px] mt-10 mb-10 font-palanquin leading-tight">
          The New Arrival <span className="text-red-500">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-lg text-slate-600 mb-10">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <ShopNowButton />
      </section>
      <section className="flex flex-wrap gap-10 mt-20 text-5xl px-10 mb-10">
        {statistics.map((stat, index) => (
          <h1 key={index} className="flex flex-col font-palanquin font-bold">
            {stat.value}
            <span className="text-base font-montserrat font-light">
              {stat.label}
            </span>
          </h1>
        ))}
      </section>
      <section className="relative mb-20 h-170 pb-15 max-sm:h-145">
        <div className="relative h-full items-center justify-center flex">
          <img
            src={collectionBackground}
            className="object-cover h-full w-full"
          />
          <img src={bigShoe1} className="absolute" />
        </div>
        <div className="flex flex-wrap absolute bottom-5 w-full px-5 justify-around gap-3 sm:gap-8 md:pl-20 md:justify-start">
          {shoes.map((shoe, index) => (
            <div
              className="max-w-40 relative items-center justify-center flex overflow-hidden rounded-xl max-sm:w-20"
              key={index}
            >
              <img src={thumbnailBackground} className="object-cover" />
              <img
                key={index}
                src={shoe.thumbnail}
                className="absolute object-cover rounded-lg max-h-30 max-sm:h-10"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
