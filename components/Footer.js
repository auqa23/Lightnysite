import React from "react";
import config from "../config";
const Footer = () => {
  return (
    <section className=" mt-20 ">
      <footer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full -mb-0.5"
          viewBox="0 0 1367.743 181.155"
        >
          <path
            className="fill-current text-dark"
            id="wave"
            data-name="wave"
            d="M0,0S166.91-56.211,405.877-49.5,715.838,14.48,955.869,26.854,1366,0,1366,0V115H0Z"
            transform="translate(1.743 66.155)"
          ></path>
        </svg>
        <div className="pt-1 bg-dark">
          <div className="container m-auto px-6 space-y-8 text-main text-opacity-95 md:px-12 lg:px-20">
            <div className="grid grid-cols-8 gap-6 md:gap-0">
              <div className="col-span-8 md:col-span-2 lg:col-span-3">
                <div className="flex gap-6 items-center justify-between py-6 border-b  md:py-0 md:border-none md:block md:space-y-6">
                  <img
                    src="/logo.png"
                    alt="logo tailus"
                    width="100"
                    height="42"
                    className="w-32"
                  />
                </div>
              </div>
              <div className="col-span-8 md:col-span-6 lg:col-span-5">
                <div className="md:pl-16 pb-16 grid  gap-6 ">
                  <div className="h-52 text-8xl flex items-center font-black gap-x-10 justify-center flex-col gap-y-2 tracking-wide sm:tracking-widest sm:flex-row">
                    <h2 className="text-4xl">Made with</h2>{" "}
                    <span className="text-red-500">❤</span>
                  </div>
                </div>
                <div className="pb-8 py-4 md:pl-16 border-t flex justify-between">
                  <span>&copy; Code with Mohit</span>
                  <span>All right reserved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
