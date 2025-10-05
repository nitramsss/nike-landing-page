import ViewDetailsButton from "../components/ViewDetailsButton";
import { shoe8 } from "../../assets/images";
import { services } from "../constants";

const Rating = () => {
  return (
    <>
      <section className="mt-15 place-items-end grid grid-cols-1 gap-10 md:grid-cols-2 md:px-10">
        <section>
          <h1 className="font-palanquin text-5xl font-bold leading-tight">
            We Provide You <span className="text-red-500">Super Quality</span>{" "}
            Shoes
          </h1>
          <div className="font-montserrat text-slate-500 text-lg mt-8 mb-10 flex flex-col gap-4">
            <p>
              Ensuring premium comfort and style, our meticulously crafted
              footear is designed to elevate your experience, providing you with
              unmatched quality, innovation, and a touch of elegance.
            </p>
            <p>
              Our dedication to detail and excellence ensures yur satisfaction
            </p>
          </div>
          <ViewDetailsButton />
        </section>
        <img src={shoe8} alt="shoe" className="mt-10 w-full h-auto" />
      </section>
      <section className="mt-20 mb-20">
        {services.map((service, index) => (
          <section
            className="mt-10 shadow-lg inset-shadow-xs rounded-2xl p-8"
            key={index}
          >
            <div className="bg-red-500 w-10 h-10 rounded-full items-center justify-center flex mt-10">
              <img
                src={service.imgURL}
                alt={service.label}
                className="w-7 h-auto"
              />
            </div>
            <h1 className="font-palanquin text-3xl font-bold mt-5">
              {service.label}
            </h1>
            <p className="font-montserrat text-slate-500 text-lg mt-5 mb-10">
              {service.subtext}
            </p>
          </section>
        ))}
      </section>
    </>
  );
};

export default Rating;
