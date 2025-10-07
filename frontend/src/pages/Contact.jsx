import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info and Map */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <span className="font-semibold w-20">Phone:</span>
                <a href="tel:1234567890" className="text-blue-600 hover:underline">(123) 456-7890</a>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-20">Email:</span>
                <a href="mailto:info@dentalclinic.com" className="text-blue-600 hover:underline">info@dentalclinic.com</a>
              </div>
              <div className="flex items-start">
                <span className="font-semibold w-20">Address:</span>
                <span>123 Main St, City, State 12345</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
            <div className="space-y-2">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>

            {/* Google Maps */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3001.5202170428347!2d38.7953994!3d9.0219799!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b853a7d4af001%3A0x880f373596b022cb!2sMEGENAGNA%20DENTAL%20CLINIC!5e1!3m2!1sen!2set!4v1759818028224!5m2!1sen!2set" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full h-64 rounded-lg"></iframe>
              <a href="https://www.google.com/maps/place/MEGENAGNA+DENTAL+CLINIC/@9.0219799,38.7953994,17z/data=!4m6!3m5!1s0x164b853a7d4af001:0x880f373596b022cb!8m2!3d9.0219799!3d38.7953994!16s%2Fg%2F11c1q7z8z8?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Leave a Comment</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;