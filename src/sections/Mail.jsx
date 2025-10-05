import SignUpButton from "../components/SignUpButton";

const Mail = () => {
  return (
    <section className="py-10 flex flex-col lg:flex-row md:px-10 md:gap-10 lg:gap-0 items-center">
      <h1 className="font-palanquin text-5xl font-bold leading-tight w-full">
        Sign Up for <span className="text-red-500">Updates</span> & Newsletter
      </h1>
      <div className="w-full py-1 px-2 md:border border-gray-500 rounded-full md:flex flex-row items-center md:max-h-18 lg:max-w-100 lg:ml-50">
        <input
          type="text"
          placeholder="subscribe @nike.com"
          className="border border-gray-500 w-full rounded-full text-slate-500 font-monserrat text-md py-4 px-3 max-md:mt-10 max-md:mb-5 md:border-none outline-none"
        />
        <SignUpButton />
      </div>
    </section>
  );
};

export default Mail;
