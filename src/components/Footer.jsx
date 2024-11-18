import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          DATA ANALYTICS
        </h1>
        <p className="py-4">
          Without a systematic way to start and keep data clean, bad data will
          happen.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookSquare
              size={30}
              className="cursor-pointer hover:text-blue-600"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram
              size={30}
              className="cursor-pointer hover:text-pink-500"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitterSquare
              size={30}
              className="cursor-pointer hover:text-blue-400"
            />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithubSquare
              size={30}
              className="cursor-pointer hover:text-gray-500"
            />
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dribbble"
          >
            <FaDribbbleSquare
              size={30}
              className="cursor-pointer hover:text-pink-400"
            />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Analytics
            </li>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Marketing
            </li>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Commerce
            </li>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Insights
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Pricing
            </li>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Documentation
            </li>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Guides
            </li>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              API Status
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              About
            </li>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Blog
            </li>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Jobs
            </li>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Press
            </li>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Careers
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Claim
            </li>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Policy
            </li>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Terms
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
