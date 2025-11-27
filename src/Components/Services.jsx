import { services } from "../Constants"

const Services  = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center mt-14 '>
     {/* Heading */}
     <div className="flex items-center justify-center mb-5">
        <div className="bg-[#1A4A83] w-12 h-1"></div>
        <p className="font-bold ml-4 text-center  lg:text-left text-sm md:text-base lg:text-lg">
          Services
        </p>
      </div>
     {/* Content Sections */}
     <div className="flex flex-col md:flex-row justify-between items-center gap-6 mx-5 mt-8 ">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col items-center border-l-8 border-[#1A4A83] rounded-lg p-4 w-full md:w-1/3"
        >
          {/* Service Photo */}
          <img
            src={service.photo}
            alt={service.name}
            className="rounded-full w-24 h-24 mb-4"
          />
          {/* Service Name */}
          <h3 className="text-lg font-bold ">{service.name}</h3>
          {/* Service Description */}
          <p className="text-sm  mt-2 text-center">
            {service.description}
          </p>
          
        </div>
      ))}
    </div>
 
    
    </div>
  )
}

export default Services
