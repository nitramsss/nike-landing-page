import { offer } from "../../assets/images";
import LearnMoreButton from "../components/LearnMoreButton";
import ShopNowButton from "../components/ShopNowButton";

const Offer = () => {
  return (
    <>
      <section className="flex flex-col xl:flex-row-reverse items-center xl:gap-20">
        <section>
          <h1 className="font-palanquin text-5xl font-bold">
            <span className="text-red-500">Special</span> Offer
          </h1>
          <div className="font-montserrat text-slate-500 gap-4 text-lg mt-8 mb-10 flex flex-col">
            <p>
              Embark on a shopping journey that redefines your experience with
              unbeatable deals. From premier selections to incredible savings,
              we offer unparalleled value that sets us apart.
            </p>
            <p>
              Navigate a realm of possiblities designed to fulfill your unique
              desires, surpassing the loftiest expectations. Your journey with
              us is nothing short exceptional.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 mb-10">
            <ShopNowButton />
            <LearnMoreButton />
          </div>
        </section>

        <img src={offer} />
      </section>
    </>
  );
};

export default Offer;
