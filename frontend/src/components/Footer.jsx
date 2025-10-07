const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Dental Clinic</h3>
            <p>Your trusted partner for healthy smiles.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@dentalclinic.com</p>
            <p>Address: 123 Main St, City, State 12345</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;