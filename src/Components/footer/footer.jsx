import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import Aos from "aos";
const Footer = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: 'ease-out-cubic',
    });
  }, []);
  return (
    <div>
      <div className="bg-gray-600">
        <footer data-aos="fade-down" className="footer p-8 footer-center text-white">
          <aside>
            <p className="font-bold text-3xl text-pink-400">TaskHyper</p>
            <p className="font-bold">Providing reliable tech since 1995</p>
            <p>Copyright © 2023 - All right reserved</p>
          </aside>

          <div className="flex gap-4">
            <Link to="#" className="text-2xl">
              <button>
                <FaFacebookF />
              </button>
            </Link>
            <Link to="#" className="text-2xl">
              <button>
                <FaTwitter />
              </button>
            </Link>
            <Link to="#" className="text-2xl">
              <button>
                <FaYoutube />
              </button>
            </Link>
          </div>

        </footer>
      </div>
    </div>
  );
};

export default Footer;