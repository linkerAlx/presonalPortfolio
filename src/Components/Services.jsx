import { services } from "../Constants";

const Services = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-14 ml-8">

      {/* Heading */}
      <div className="flex items-center justify-center mb-8">
        <div className="bg-[#1A4A83] w-12 h-1"></div>
        <p className="font-bold ml-4 text-center text-sm md:text-base lg:text-lg">
          Services
        </p>
      </div>

      {/* Centered Services Box - 2 Columns */}
      <div className="w-full flex flex-wrap justify-center items-center gap-8 px-4 mt-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center border-l-8 border-[#1A4A83] rounded-lg p-5 
                       w-full sm:w-[48%] lg:w-[45%] text-center"
          >
            {/* Service Image */}
            <img
              src={service.photo}
              alt={service.name}
              className="rounded-full w-24 h-24 mb-4"
            />

            <h3 className="text-lg font-bold">{service.name}</h3>
            <p className="text-sm mt-2 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Services;
