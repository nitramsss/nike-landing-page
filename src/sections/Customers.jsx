import { star } from "../../assets/icons";
import { reviews } from "../constants";

const Customers = () => {
  return (
    <section className="flex flex-col justify-center items-center pt-20 pb-10">
      <div className="max-w-150">
        <h1 className="text-5xl font-palanquin font-bold items-center text-center leading-tight">
          What Our <span className="text-red-500">Customers</span> Say?
        </h1>
        <p className="text-center text-gray-500 mt-5 font-montserrat text-lg">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <section className="flex flex-col justify-center items-center mt-20 lg:flex-row lg:gap-70 flex-wrap gap-10">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center mb-15 max-w-95"
          >
            <img src={review.imgURL} className="rounded-full w-30" />
            <p className="mt-6 font-montserrat text-lg text-slate-500 text-center">
              {review.feedback}
            </p>
            <p className="mt-3 font-montserrat text-lg text-slate-500 flex gap-3">
              <img src={star} />({review.rating})
            </p>

            <h1 className="font-palanquin font-bold text-3xl mt-3">
              {review.customerName}
            </h1>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Customers;
