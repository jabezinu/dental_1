import { useState } from 'react';

const Services = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const services = [
    {
      name: "Teeth Cleaning",
      description: "Professional cleaning to remove plaque and tartar, keeping your teeth healthy and bright.",
      image: "https://picsum.photos/400/250?random=1",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
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
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
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
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
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
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
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
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
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
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 text-white py-32 pt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/30 via-transparent to-teal-500/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Comprehensive dental solutions tailored to your unique needs. From preventive care to advanced treatments, we provide exceptional dental services with cutting-edge technology.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-5xl font-bold mb-6 text-gray-800">Comprehensive Dental Care</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Explore our full range of dental services designed to meet all your oral health needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden cursor-pointer transform hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => toggleCard(index)}
              >
                <div className="relative">
                  <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <div className="text-teal-600">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4 text-gray-800">{service.name}</h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.description}</p>
                  <div className="flex items-center text-teal-600 font-semibold">
                    <span>Learn More</span>
                    <svg
                      className={`ml-2 w-5 h-5 transition-transform duration-300 ${expandedCard === index ? 'rotate-90' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  {expandedCard === index && (
                    <div className="mt-8 pt-6 border-t border-gray-200 animate-in slide-in-from-top-2 duration-300">
                      <div className="mb-6">
                        <h4 className="font-bold text-xl mb-4 text-gray-800 flex items-center">
                          <svg className="w-6 h-6 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {service.details.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start text-gray-700">
                              <svg className="w-5 h-5 mr-3 mt-0.5 text-teal-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-6">
                        <h4 className="font-bold text-xl mb-4 text-gray-800 flex items-center">
                          <svg className="w-6 h-6 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Procedure
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{service.details.procedure}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-teal-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-teal-800 mb-2 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Duration
                          </h5>
                          <p className="text-teal-700 font-medium">{service.details.duration}</p>
                        </div>
                        <div className="bg-teal-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-teal-800 mb-2 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Frequency
                          </h5>
                          <p className="text-teal-700 font-medium">{service.details.frequency}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-5xl font-bold mb-6">Ready to Experience Exceptional Care?</h2>
            <p className="text-2xl mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Book your consultation today and discover how our comprehensive services can transform your oral health and confidence.
            </p>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <a
              href="/booking"
              className="bg-white text-teal-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-100 hover:scale-110 transition-all duration-500 inline-block shadow-2xl hover:shadow-white/25"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;