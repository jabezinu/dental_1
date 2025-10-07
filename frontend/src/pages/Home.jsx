const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Dental Clinic</h1>
          <p className="text-xl mb-8">Your smile is our priority. Experience top-notch dental care.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100">Book an Appointment</button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Teeth Cleaning</h3>
              <p>Professional cleaning to keep your teeth healthy and bright.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Braces</h3>
              <p>Straighten your teeth with our expert orthodontic services.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Implants</h3>
              <p>Restore your smile with durable dental implants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Blurb */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="text-lg max-w-2xl mx-auto">We are a dedicated team of dental professionals committed to providing exceptional care in a comfortable environment. Your oral health is our passion.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p>"Excellent service and friendly staff. Highly recommend!"</p>
              <p className="mt-4 font-semibold">- John Doe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p>"The best dental experience I've ever had. Painless and professional."</p>
              <p className="mt-4 font-semibold">- Jane Smith</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@dentalclinic.com</p>
          <p>Address: 123 Main St, City, State 12345</p>
          <p>Hours: Mon-Fri 8am-6pm, Sat 9am-4pm</p>
        </div>
      </section>
    </div>
  );
};

export default Home;