import { shoe4 } from "../../assets/images";
import { star } from "../../assets/icons";
import { products } from "../constants";

const Product = () => {
  return (
    <section>
      <h1 className="font-palanquin text-5xl font-bold leading-tight">
        Our <span className="text-red-500">Popular</span> Products
      </h1>
      <p className="font-montserrat text-slate-500 text-lg mt-8 mb-10">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>
      <section className="place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product, index) => (
          <section className="mt-10" key={index}>
            <div>
              <img src={product.imgURL} alt={product.name} />
              <p className="flex gap-2 text-xl font-montserrat text-slate-500 mt-10">
                <img src={star} alt="product2" />
                (4.5)
              </p>
              <h3 className="font font-palanquin font-semibold text-2xl mt-3">
                {product.name}
              </h3>
              <h3 className="font font-montserrat font-semibold text-2xl text-red-400 mt-3">
                {product.price}
              </h3>
            </div>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Product;
