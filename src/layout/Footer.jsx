import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import { links } from "@/constants";

import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-secondary px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 relative">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <img src={logo} className="w-8 h-8 text-primary" />
            <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
              Royal Jordanian Transport
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-300">
              We provide safe, professional, and nationwide long-haul trucking
              and logistics solutions.
            </p>
            <p className="mt-4 text-sm text-gray-300">
              Reliable Dry Van Transportation Across 50+ U.S. States.
            </p>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-white">
            Quick Links
          </p>
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => scrollToSection("home")}
              className="text-left transition-colors duration-300 text-gray-300 hover:text-primary cursor-pointer flex items-center"
            >
              Home
            </button>
            {links.map((link) => (
              <button key={link._id}
                onClick={() => scrollToSection(link.link)}
                className="text-left transition-colors duration-300 text-gray-300 hover:text-primary cursor-pointer flex items-center"
              >
                {link.title}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <p className="text-base font-bold tracking-wide text-white">
            Contacts
          </p>
          <div className="flex items-center">
            <Phone size={16} className="mr-2 text-gray-300" />
            <a
              href="tel:+1313-258-5571"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-primary hover:text-primary/80"
            >
              +1313-258-5571
            </a>
          </div>
          <div className="flex items-center">
            <Mail size={16} className="mr-2 text-gray-300" />
            <a
              href="mailto:royaljordaniantransport@gamil.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-primary hover:text-primary/80"
            >
              royaljordaniantransport@gamil.com
            </a>
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="mr-2 text-gray-300" />
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-primary hover:text-primary/80"
            >
              Dearborn, MI 48126
            </a>
          </div>
        </div>

        <div>
          <span className="text-base font-bold tracking-wide text-white">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 transition-colors duration-300 hover:text-primary p-2 rounded-full hover:bg-purple-50"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 transition-colors duration-300 hover:text-primary p-2 rounded-full hover:bg-purple-50"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 transition-colors duration-300 hover:text-primary p-2 rounded-full hover:bg-purple-50"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 transition-colors duration-300 hover:text-primary p-2 rounded-full hover:bg-purple-50"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-300">
            Follow us on social media for updates and news.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-gray-200 lg:flex-row">
        <p className="text-sm text-gray-300">
          © Copyright {new Date().getFullYear()} Royal Jordanian Transport. All
          rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li className="text-white">
            Developed by <a href="https://www.linkedin.com/in/m-hassaam-mughal-91668a256" className="text-primary font-bold">Hassaam Mughal</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
