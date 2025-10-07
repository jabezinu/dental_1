const About = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <p className="text-lg max-w-3xl mx-auto">Welcome to Dental Clinic, where your smile is our passion. We provide comprehensive dental care with a focus on patient comfort and satisfaction.</p>
        </section>

        {/* Staff Bios */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="https://picsum.photos/150/150?random=7" alt="Dr. Smith" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Dr. John Smith</h3>
              <p className="text-gray-600">Lead Dentist</p>
              <p>Dr. Smith has over 15 years of experience in general dentistry.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="https://picsum.photos/150/150?random=8" alt="Dr. Johnson" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Dr. Emily Johnson</h3>
              <p className="text-gray-600">Orthodontist</p>
              <p>Specializing in braces and orthodontic treatments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="https://picsum.photos/150/150?random=9" alt="Nurse Lisa" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Lisa Brown</h3>
              <p className="text-gray-600">Dental Hygienist</p>
              <p>Dedicated to preventive care and patient education.</p>
            </div>
          </div>
        </section>

        {/* Mission, Values, Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Mission</h3>
              <p>To provide exceptional dental care that enhances the health and beauty of our patients' smiles, fostering long-term relationships built on trust and excellence.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Values</h3>
              <ul className="list-disc list-inside">
                <li>Patient-centered care</li>
                <li>Continuous learning and innovation</li>
                <li>Integrity and honesty</li>
                <li>Community involvement</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
            <img src="https://picsum.photos/400/200?random=10" alt="Certifications" className="mx-auto mb-4 rounded-lg" />
            <p>Certified by the American Dental Association. All staff members are licensed and regularly update their skills.</p>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Before & After Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="https://picsum.photos/300/200?random=11" alt="Before/After 1" className="w-full h-48 object-cover rounded" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="https://picsum.photos/300/200?random=12" alt="Before/After 2" className="w-full h-48 object-cover rounded" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="https://picsum.photos/300/200?random=13" alt="Before/After 3" className="w-full h-48 object-cover rounded" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="https://picsum.photos/300/200?random=14" alt="Before/After 4" className="w-full h-48 object-cover rounded" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="https://picsum.photos/300/200?random=15" alt="Before/After 5" className="w-full h-48 object-cover rounded" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="https://picsum.photos/300/200?random=16" alt="Before/After 6" className="w-full h-48 object-cover rounded" />
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Oral Health Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How to Care for Your Braces</h3>
              <p>Tips for maintaining your braces and ensuring optimal results.</p>
              <a href="#" className="text-blue-600 hover:underline">Read more</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">The Importance of Regular Check-ups</h3>
              <p>Why visiting your dentist regularly is crucial for oral health.</p>
              <a href="#" className="text-blue-600 hover:underline">Read more</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Do you accept insurance?</h3>
              <p>Yes, we accept most major dental insurance plans. Please contact us to verify coverage.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Does teeth whitening hurt?</h3>
              <p>Teeth whitening is generally painless, though some patients may experience temporary sensitivity.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">How often should I visit the dentist?</h3>
              <p>We recommend visiting every 6 months for a check-up and cleaning, or as advised by your dentist.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;