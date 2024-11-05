import React from "react";

const ListServices = () => {
  return (
    <section className="font-poppins bg-gradient-to-r from-white to-amber-400 py-20 px-4 min-h-screen relative overflow-hidden">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-16">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-16">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {/* Left Column */}
          <div className="space-y-8">
            {["Custom Software Development", "Mobile App Development", "Web Application Development", "Layanan UI/UX Design", "Enterprise Software Development"].map((service, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="relative text-lg text-amber-900 group-hover:text-amber-700 transition-colors">
                  {service}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-700 scale-x-0 group-hover:scale-x-100 origin-bottom-left transition-transform duration-300"></span>
                </span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {["System Integration", "Software Maintenance & Support", "Konsultasi IT dan Transformasi Digital", "Cloud-based Software Development", "Testing & Quality Assurance"].map((service, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="relative text-lg text-amber-900 group-hover:text-amber-700 transition-colors">
                  {service}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-700 scale-x-0 group-hover:scale-x-100 origin-bottom-left transition-transform duration-300"></span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListServices;
