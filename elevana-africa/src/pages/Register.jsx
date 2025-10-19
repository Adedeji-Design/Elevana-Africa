import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdMenuBook, MdGroups, MdWork } from "react-icons/md";
import { Link } from "react-router-dom";
import logoBlack from "../assets/logo/elevanalogo-dark.png";

const Register = () => {
  // Scroll reset whenever this page is opened
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen font-sans overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-500">
      {/* LEFT SIDE - Signup Form */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-20 py-10 bg-white dark:bg-gray-800 transition-colors duration-500"
      >
        {/* Container */}
        <div className="flex flex-col justify-between h-full">
          {/* Logo */}
          <div className="flex justify-start mb-6">
            <Link to="/" className="group">
              <img
                src={logoBlack}
                alt="Elevana Africa Logo"
                className="h-24 w-auto object-contain scale-125 transition-transform duration-300 group-hover:scale-190 cursor-pointer"
              />
            </Link>
          </div>

          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            Start Your Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Join thousands learning, networking, and getting hired.
          </p>

          <div className="space-y-3">
            <button className="w-full border border-gray-300 dark:border-gray-600 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer text-gray-900 dark:text-gray-100">
              <FcGoogle />
              Continue with Google
            </button>

            <button className="w-full border border-gray-300 dark:border-gray-600 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer text-gray-900 dark:text-gray-100">
              <FaLinkedin className="text-[#0A66C2]" />
              Continue with LinkedIn
            </button>
          </div>

          <div className="my-5 text-center text-gray-500 dark:text-gray-400 text-sm hover:underline cursor-pointer">
            OR CONTINUE WITH EMAIL
          </div>

          {/* Signup Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a strong password"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Must be at least 8 characters
              </p>
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <p className="text-sm text-gray-600 dark:text-gray-300">
                I agree to the{" "}
                <a href="#" className="text-blue-600 dark:text-blue-400 underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 dark:text-blue-400 underline">
                  Privacy Policy
                </a>
              </p>
            </div>

            <button className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition cursor-pointer">
              Create an account
            </button>

            {/* Already have an account */}
            <p className="text-center text-gray-600 dark:text-gray-300 text-sm mt-4">
              Don’t have an account yet?{" "}
              <Link
                to="/signup"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </motion.div>

      {/* RIGHT SIDE - Info Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="hidden lg:flex w-1/2 bg-gray-50 dark:bg-gray-900 flex-col justify-center px-16 transition-colors duration-500"
      >
        <h2 className="text-4xl font-bold mb-3 text-gray-900 dark:text-gray-100">
          One Platform,{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Endless Possibilities
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Join Elevana Africa and unlock access to learning, networking, and
          career opportunities all in one place.
        </p>

        <div className="space-y-6">
          {/* Learn New Skills */}
          <div className="flex items-start gap-4">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 shadow-[0_0_12px_rgba(37,99,235,0.3)]"
            >
              <MdMenuBook className="text-blue-600 dark:text-blue-400 text-2xl" />
            </motion.div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                Learn New Skills
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Access quality courses and certifications to boost your career.
              </p>
            </div>
          </div>

          {/* Build Your Network */}
          <div className="flex items-start gap-4">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: "easeInOut",
                delay: 0.4,
              }}
              className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 shadow-[0_0_12px_rgba(37,99,235,0.3)]"
            >
              <MdGroups className="text-blue-600 dark:text-blue-400 text-2xl" />
            </motion.div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                Build Your Network
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Connect with mentors, peers, and industry professionals.
              </p>
            </div>
          </div>

          {/* Get Hired */}
          <div className="flex items-start gap-4">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
                delay: 0.8,
              }}
              className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 shadow-[0_0_12px_rgba(37,99,235,0.3)]"
            >
              <MdWork className="text-blue-600 dark:text-blue-400 text-2xl" />
            </motion.div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                Get Hired
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Access exclusive job opportunities matched to your skills.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-sm italic text-gray-600 dark:text-gray-400">
          “Elevana helped me learn Data Analytics, connect with a mentor, and land my first job!”
          <br /> — Amina, Nigeria
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
