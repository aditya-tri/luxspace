import React from "react";
import logo from "../assets/images/somenew.png";

export default function Splash() {
  return (
    <section>
      <div className="container mx-auto min-h-screen mt-20">
        <div className="flex flex-col items-center justify-center h-creen">
          <div className="w-full md:w-4/12 text-center">
            <img src={logo} alt="Logo" className="mx-auto mb-8 rounded-full" />
            <p className="mb-16 px-4 text-gray-700">
              Kami menyediakan furniture berkelas yang membuat ruangan terasa
              homey
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
