import {
    faCircleExclamation,
    faEnvelope,
    faRss,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React from "react";
  import Link from "next/link";
  
  const Contact = () => {
    return (
      <>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
              Contact Me
            </h2>
            <div className="flex flex-col md:flex-row md:space-x-10">
              <div className="md:w-1/2 mb-8">
                <form
                  action="#"
                  method="POST"
                  className="bg-gray-100 p-6 rounded-lg shadow-md"
                >
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="border border-slate-300 rounded-lg p-2 w-full"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="border border-slate-300 rounded-lg p-2 w-full"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="border border-slate-300 rounded-lg p-2 w-full"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-red text-white font-semibold py-2 px-4 rounded-lg transition duration-300 w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
  
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <p className="text-gray-700 mb-4">
                  Feel free to reach out for any inquiries or just to say hello!
                </p>
                <div className="flex items-center mb-4 gap-3">
                  <FontAwesomeIcon
                    icon={faRss}
                    width={25}
                    height={25}
                    className="text-red"
                  />
                  <p className="text-gray-700">
                    I am available for freelance work and collaborations.
                  </p>
                </div>
                <div className="flex items-center mb-4 gap-3">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    width={25}
                    height={25}
                    className="text-red"
                  />
                  <p className="text-gray-700">
                    Email:{" "}
                    <Link
                      href="mailto:sadafshahab123@yahoo.com"
                      className="text-red"
                    >
                      sadafshahab123@yahoo.com
                    </Link>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faCircleExclamation}
                    width={25}
                    height={25}
                    className="text-red"
                  />
                  <p className="text-gray-700">
                    Phone: <span className="text-red">+923402195735</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Contact;
  