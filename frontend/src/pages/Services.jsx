const Services = () => {
  const services = [
    {
      name: "Teeth Cleaning",
      description: "Professional cleaning to remove plaque and tartar, keeping your teeth healthy and bright.",
      price: "$100"
    },
    {
      name: "Braces",
      description: "Orthodontic treatment to straighten teeth and correct bite issues.",
      price: "Starting at $3,000"
    },
    {
      name: "Dental Implants",
      description: "Permanent replacement for missing teeth, restoring function and aesthetics.",
      price: "$2,500 per implant"
    },
    {
      name: "Teeth Whitening",
      description: "Safe and effective whitening treatments to brighten your smile.",
      price: "$200"
    },
    {
      name: "Root Canal",
      description: "Treatment to save infected teeth and relieve pain.",
      price: "$800 - $1,200"
    },
    {
      name: "Fillings",
      description: "Restorative treatment for cavities and damaged teeth.",
      price: "$150 - $300"
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-lg font-bold text-blue-600 mb-4">{service.price}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Book Appointment</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;