import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main footer content */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 p-5 md:grid-cols-3 gap-8 ">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">BEE Telematic Solutions</h3>
            <p className="text-sm mb-4">
              Jl. Mushola RT. 01/03 No. 48 Sukatani
              <br />
              Tapos Depok, Jawa Barat
            </p>
            <div className="space-y-2">
              <a href="tel:+6281516141175" className="flex items-center gap-2 text-sm hover:text-amber-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +62 815 1614 175
              </a>
              <a href="https://wa.me/6281516141175" className="flex items-center gap-2 text-sm hover:text-amber-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
                +62 815 1614 175
              </a>
              <a href="mailto:beebusinessinfo@gmail.com" className="flex items-center gap-2 text-sm hover:text-amber-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                beebusinessinfo@gmail.com
              </a>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about_us#visi-misi" className="hover:text-amber-400">
                  Visi & Misi
                </Link>
              </li>
              <li>
                <Link to="/portofolio#product" className="hover:text-amber-400">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/services#layanan" className="hover:text-amber-400">
                  Layanan
                </Link>
              </li>
            </ul>
          </div>

          {/* About Corporate */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Corporate</h3>
            <p className="text-sm">PT Bee Telematic Solutions is an IT consulting company that provides innovative solutions in the field of telematics and information technology services.</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-4">
          <p className="text-sm text-center text-gray-400">Copyright PT Bee Telematic Solution</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
