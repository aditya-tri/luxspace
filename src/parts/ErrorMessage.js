import React from "react";
import { Link } from "react-router-dom";

export default function ErrorMessage() {
  return (
    <section className="mt-14">
      <div className="container min-h-screen">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="w-auto md:w-2/4 text-center">
            <img
              src="https://unblast.com/wp-content/uploads/2020/04/404-Page-Illustration.jpg"
              alt="congrats illustration"
              className="rounded-lg"
            />
          </div>
          <Link
            to="/"
            className="text-gray-900 bg-red-200 focus:outline-none py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    </section>
  );
}
