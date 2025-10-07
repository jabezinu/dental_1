
import { useState } from 'react';

const Services = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const services = [
    {
      name: "Teeth Cleaning",
      description: "Professional cleaning to remove plaque and tartar, keeping your teeth healthy and bright.",
      image: "https://picsum.photos/400/250?random=1",
      details: {
        benefits: ["Removes plaque and tartar buildup", "Prevents gum disease", "Freshens breath", "Early detection of dental issues"],
        procedure: "Our hygienist will use specialized tools to gently remove plaque and tartar from your teeth, followed by polishing and flossing.",
        duration: "30-45 minutes",
        frequency: "Every 6 months recommended"
      }
    },
    {
      name: "Braces",
      description: "Orthodontic treatment to straighten teeth and correct bite issues.",
      image: "https://picsum.photos/400/250?random=2",
      details: {
        benefits: ["Straightens crooked teeth", "Improves bite alignment", "Enhances chewing function", "Boosts self-confidence"],
        procedure: "Brackets are bonded to teeth and connected with wires. Regular adjustments move teeth gradually over time.",
        duration: "12-24 months treatment",
        frequency: "Monthly adjustments"
      }
    },
    {
      name: "Dental Implants",
      description: "Permanent replacement for missing teeth, restoring function and aesthetics.",
      image: "https://picsum.photos/400/250?random=3",
      details: {
        benefits: ["Permanent tooth replacement", "Restores natural chewing", "Prevents bone loss", "Looks and feels natural"],
        procedure: "Titanium post is surgically placed in jawbone, then crown is attached after healing period.",
        duration: "3-6 months total treatment",
        frequency: "One-time procedure with regular check-ups"
      }
    },
    {
      name: "Teeth Whitening",
      description: "Safe and effective whitening treatments to brighten your smile.",
      image: "https://picsum.photos/400/250?random=4",
      details: {
        benefits: ["Removes stains from coffee, tea, smoking", "Safe and non-invasive", "Immediate results", "Long-lasting effects"],
        procedure: "Professional whitening gel is applied to teeth, activated by special light for 30-60 minutes.",
        duration: "1 hour per session",
        frequency: "Every 6-12 months for maintenance"
      }
    },
    {
      name: "Root Canal",
      description: "Treatment to save infected teeth and relieve pain.",
      image: "https://picsum.photos/400/250?random=5",
      details: {
        benefits: ["Saves infected tooth from extraction", "Eliminates pain", "Restores normal function", "Prevents spread of infection"],
        procedure: "Infected pulp is removed, canal is cleaned and sealed, then tooth is restored with crown.",
        duration: "1-2 hours per tooth",
        frequency: "One-time procedure"
      }
    },
    {
      name: "Fillings",
      description: "Restorative treatment for cavities and damaged teeth.",
      image: "https://picsum.photos/400/250?random=6",
      details: {
        benefits: ["Restores tooth structure", "Prevents further decay", "Natural appearance", "Durable and long-lasting"],
        procedure: "Decayed portion removed, tooth prepared, filling material placed and shaped to match tooth.",
        duration: "30-60 minutes per tooth",
        frequency: "As needed when cavities develop"
      }
    }
  ];

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => toggleCard(index)}>
              <img src={service.image} alt={service.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-blue-600 font-medium">Click for details</span>

                {expandedCard === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="mb-4">
                      <h4 className="font-semibold text-lg mb-2">Benefits:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-700">
                        {service.details.benefits.map((benefit, i) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-lg mb-2">Procedure:</h4>
                      <p className="text-sm text-gray-700">{service.details.procedure}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-lg mb-2">Duration:</h4>
                      <p className="text-sm text-gray-700">{service.details.duration}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Frequency:</h4>
                      <p className="text-sm text-gray-700">{service.details.frequency}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;