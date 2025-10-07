import beforeAfter0 from '../assets/before_after_0.jpg';
import beforeAfter1 from '../assets/before_after_1.jpg';
import beforeAfter2 from '../assets/before_afetre_2.jpg';
import beforeAfter3 from '../assets/before_after_3.jpg';
import beforeAfter4 from '../assets/before_after_4.jpg';
import beforeAfter5 from '../assets/before_after_5.jpg';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 text-white py-32 pt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/30 via-transparent to-teal-500/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
              About Dental Clinic
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Where your smile meets excellence. We combine cutting-edge technology with compassionate care to deliver exceptional dental experiences.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-24 bg-gradient-to-br from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-5xl font-bold mb-6 text-gray-800">Transformation Gallery</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real results from real patients. See how we've helped transform smiles and boost confidence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              <div className="relative">
                <img src={beforeAfter0} alt="Before orthodontic treatment showing misaligned teeth" className="w-full h-48 object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Crooked Teeth Correction</h3>
                <p className="text-gray-600">Before: Notice the severe misalignment and overlapping teeth causing both aesthetic and functional concerns.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="relative">
                <img src={beforeAfter1} alt="After orthodontic treatment showing perfect alignment" className="w-full h-48 object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Perfect Smile Alignment</h3>
                <p className="text-gray-600">After: 18-month orthodontic treatment resulted in perfectly aligned teeth and a confident, beautiful smile.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600">
              <div className="relative">
                <img src={beforeAfter2} alt="Before showing stained and damaged teeth" className="w-full h-48 object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Stained & Damaged Teeth</h3>
                <p className="text-gray-600">Before: Years of staining from coffee/tea combined with wear and minor damage affected both appearance and confidence.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-800">
              <div className="relative">
                <img src={beforeAfter3} alt="After showing bright, restored teeth" className="w-full h-48 object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Bright & Restored Smile</h3>
                <p className="text-gray-600">After: Professional whitening and restorative treatments created a bright, healthy smile with renewed confidence.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000">
              <div className="relative">
                <img src={beforeAfter4} alt="Before showing missing teeth and gaps" className="w-full h-48 object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Missing Teeth Restoration</h3>
                <p className="text-gray-600">Before: Multiple missing teeth created gaps and affected chewing ability, speech, and overall facial structure.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1200">
              <div className="relative">
                <img src={beforeAfter5} alt="After showing complete dental restoration" className="w-full h-48 object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Complete Dental Restoration</h3>
                <p className="text-gray-600">After: Full dental implants and restorations restored full functionality, aesthetics, and self-confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-5xl font-bold mb-6 text-gray-800">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our experienced professionals are dedicated to providing you with the highest quality dental care in a comfortable, friendly environment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:scale-105 transform animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              <div className="w-32 h-32 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-teal-600">JS</span>
              </div>
              <h3 className="text-3xl font-bold mb-2 text-gray-800 text-center">Dr. John Smith</h3>
              <p className="text-teal-600 font-semibold text-center mb-4">Lead Dentist</p>
              <p className="text-gray-600 text-center leading-relaxed">Dr. Smith has over 15 years of experience in general dentistry, specializing in cosmetic and restorative procedures.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:scale-105 transform animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="w-32 h-32 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-teal-600">EJ</span>
              </div>
              <h3 className="text-3xl font-bold mb-2 text-gray-800 text-center">Dr. Emily Johnson</h3>
              <p className="text-teal-600 font-semibold text-center mb-4">Orthodontist</p>
              <p className="text-gray-600 text-center leading-relaxed">Specializing in orthodontic treatments including traditional braces and modern clear aligner systems.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:scale-105 transform animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600">
              <div className="w-32 h-32 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-teal-600">LB</span>
              </div>
              <h3 className="text-3xl font-bold mb-2 text-gray-800 text-center">Lisa Brown</h3>
              <p className="text-teal-600 font-semibold text-center mb-4">Dental Hygienist</p>
              <p className="text-gray-600 text-center leading-relaxed">Dedicated to preventive care, patient education, and ensuring your comfort throughout treatments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-5xl font-bold mb-8 text-gray-800">Our Story</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Welcome to Dental Clinic, where your smile is our passion. We provide comprehensive dental care with a focus on patient comfort and satisfaction. Our team of experienced professionals is dedicated to helping you achieve and maintain optimal oral health through personalized treatment plans and state-of-the-art technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                <div className="bg-gradient-to-br from-teal-100 to-teal-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">5+ Years</h3>
                <p className="text-gray-600">Serving our community with excellence</p>
              </div>
              <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
                <div className="bg-gradient-to-br from-teal-100 to-teal-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">5000+ Patients</h3>
                <p className="text-gray-600">Trust us with their smiles</p>
              </div>
              <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600">
                <div className="bg-gradient-to-br from-teal-100 to-teal-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Award Winning</h3>
                <p className="text-gray-600">Recognized for excellence in dental care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Values, Certifications */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              <h2 className="text-5xl font-bold mb-8 text-gray-800">Our Mission & Values</h2>
              <div className="mb-10">
                <h3 className="text-3xl font-bold mb-6 text-gray-800">Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed">To provide exceptional dental care that enhances the health and beauty of our patients' smiles, fostering long-term relationships built on trust, excellence, and compassionate service.</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-800">Values</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-teal-100 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Patient-Centered Care</h4>
                      <p className="text-gray-600">Your comfort and satisfaction are our top priorities.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Continuous Innovation</h4>
                      <p className="text-gray-600">We stay at the forefront of dental technology and techniques.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Integrity & Honesty</h4>
                      <p className="text-gray-600">We believe in transparent communication and ethical practices.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
              <h3 className="text-3xl font-bold mb-8 text-gray-800">Certifications & Accreditations</h3>
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-teal-100 rounded-full p-3 mr-4">
                    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">American Dental Association</h4>
                    <p className="text-gray-600">Fully accredited and certified</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">All our staff members are licensed professionals who regularly update their skills through continuing education. We maintain the highest standards of safety and sterilization protocols.</p>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 italic">"Certified by the American Dental Association. All staff members are licensed and regularly update their skills."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oral Health Tips */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-5xl font-bold mb-6 text-gray-800">Oral Health Tips</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Stay informed with our expert advice for maintaining optimal oral health.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              <div className="bg-gradient-to-br from-teal-100 to-teal-200 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">How to Care for Your Braces</h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">Tips for maintaining your braces and ensuring optimal results. Regular cleaning and proper care are essential for successful orthodontic treatment.</p>
              <a href="#" className="text-teal-600 font-bold text-lg hover:text-teal-700 transition-colors inline-flex items-center">
                Read More
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="bg-gradient-to-br from-teal-100 to-teal-200 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">The Importance of Regular Check-ups</h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">Why visiting your dentist regularly is crucial for oral health. Prevention is always better than cure when it comes to dental care.</p>
              <a href="#" className="text-teal-600 font-bold text-lg hover:text-teal-700 transition-colors inline-flex items-center">
                Read More
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-5xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Get answers to common questions about our services and procedures.</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Do you accept insurance?</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Yes, we accept most major dental insurance plans. Our team will work with you to maximize your benefits and provide transparent pricing for any out-of-pocket costs.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Does teeth whitening hurt?</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Teeth whitening is generally painless, though some patients may experience temporary sensitivity. We use professional-grade whitening systems that are safe and effective.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">How often should I visit the dentist?</h3>
              <p className="text-gray-600 text-lg leading-relaxed">We recommend visiting every 6 months for a check-up and cleaning, or as advised by your dentist based on your individual oral health needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;