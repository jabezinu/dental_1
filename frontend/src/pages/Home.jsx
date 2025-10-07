import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 text-white py-32 pt-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="dental-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="white"/>
                <path d="M5 5 L15 5 L15 15 L5 15 Z" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dental-pattern)"/>
          </svg>
        </div>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white to-teal-100 bg-clip-text text-transparent">
              Your Smile,<br />Our Passion
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Experience world-class dental care with cutting-edge technology and compassionate professionals dedicated to your oral health and beautiful smile.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Link
              to="/booking"
              className="bg-white text-teal-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 hover:scale-110 transition-all duration-500 inline-flex items-center justify-center shadow-2xl hover:shadow-white/25"
            >
              Book Appointment
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-teal-600 transition-all duration-500 hover:scale-105"
            >
              Our Services
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-32 right-16 w-6 h-6 bg-white/10 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-white/15 rounded-full animate-bounce delay-3000"></div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">5000+</div>
              <div className="text-gray-600 font-medium">Happy Patients</div>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600">
              <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Emergency Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-5xl font-bold mb-6 text-gray-800">Why Choose Dental Clinic?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We combine expertise, compassion, and cutting-edge technology to deliver exceptional dental care that you can trust.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              <div className="bg-gradient-to-br from-teal-100 to-teal-200 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Expert Care</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Over 20 years of experience with state-of-the-art equipment and techniques for superior results.</p>
            </div>
            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="bg-gradient-to-br from-teal-100 to-teal-200 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Patient-First</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Compassionate care with a focus on your comfort, well-being, and personalized treatment plans.</p>
            </div>
            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600">
              <div className="bg-gradient-to-br from-teal-100 to-teal-200 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Modern Technology</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Latest advancements in dental care for efficient, effective, and minimally invasive treatments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-5xl font-bold mb-6 text-gray-800">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive dental solutions tailored to your unique needs and smile goals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:scale-105 transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              <div className="bg-gradient-to-br from-teal-100 to-teal-200 w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-lg">
                <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Teeth Cleaning</h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">Professional cleaning to keep your teeth healthy and bright, preventing cavities and gum disease with advanced techniques.</p>
              <Link to="/services" className="text-teal-600 font-bold text-lg hover:text-teal-700 transition-colors inline-flex items-center">
                Learn More
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:scale-105 transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="bg-gradient-to-br from-teal-100 to-teal-200 w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-lg">
                <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Orthodontics</h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">Straighten your teeth with our expert orthodontic services, including modern braces and clear aligners for beautiful results.</p>
              <Link to="/services" className="text-teal-600 font-bold text-lg hover:text-teal-700 transition-colors inline-flex items-center">
                Learn More
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:scale-105 transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600">
              <div className="bg-gradient-to-br from-teal-100 to-teal-200 w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-lg">
                <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Dental Implants</h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">Restore your smile with durable dental implants that look and feel like natural teeth, backed by lifetime warranty.</p>
              <Link to="/services" className="text-teal-600 font-bold text-lg hover:text-teal-700 transition-colors inline-flex items-center">
                Learn More
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-24 bg-gradient-to-br from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-5xl font-bold mb-6 text-gray-800">Transformation Gallery</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">See the incredible results our patients achieve with our expert care and modern techniques.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              <div className="bg-gradient-to-r from-teal-400 to-teal-600 h-48 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">Before</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Orthodontic Treatment</h3>
                <p className="text-gray-600">Complete smile transformation with invisible aligners over 12 months.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="bg-gradient-to-r from-teal-500 to-teal-700 h-48 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">After</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Perfect Alignment</h3>
                <p className="text-gray-600">Achieved perfect tooth alignment and improved confidence.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600">
              <div className="bg-teal-600 h-48 flex items-center justify-center">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Your Success Story</h3>
                <p className="text-gray-600">Join thousands of patients who have transformed their smiles with us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-5xl font-bold mb-6 text-gray-800">What Our Patients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real stories from real patients who trust us with their smiles.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center mr-6 shadow-lg">
                  <span className="text-teal-600 font-bold text-xl">JD</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-xl">John Doe</h4>
                  <div className="flex text-yellow-400 text-lg">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic text-lg leading-relaxed">"Excellent service and friendly staff. Highly recommend! The team made me feel comfortable throughout my treatment. My smile has never looked better!"</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center mr-6 shadow-lg">
                  <span className="text-teal-600 font-bold text-xl">JS</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-xl">Jane Smith</h4>
                  <div className="flex text-yellow-400 text-lg">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic text-lg leading-relaxed">"The best dental experience I've ever had. Painless and professional. The modern technology and caring approach made all the difference."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Smile?</h2>
            <p className="text-2xl mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Schedule your consultation today and take the first step towards a healthier, more confident smile with our expert team.
            </p>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Link
              to="/booking"
              className="bg-white text-teal-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-100 hover:scale-110 transition-all duration-500 inline-block shadow-2xl hover:shadow-white/25"
            >
              Schedule Your Consultation
            </Link>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-white/20 rounded-full animate-pulse delay-1000"></div>
      </section>
    </div>
  );
};

export default Home;