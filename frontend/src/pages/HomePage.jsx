import React from "react";
import Specials from "@components/homepage/Specials";
import Testimonials from "@components/homepage/Testimonials";
import HomeImage from "@assets/images/serving-bruschetta.png";
import Button from "@components/shared/Button";
import leftImg from "@assets/images/servers.png";
import rightImg from "@assets/images/server.png";

const HomePage = () => {
  return (
    <main>
      <section className="overflow-visible z-10" aria-labelledby="cta-heading">
        <div className="relative bg-primary-green text-white pb-16">
          <div className="container grid grid-cols-1 md:grid-cols-2 ...">
            <article>
              <header className="mb-4">
                <h1
                  id="cta-heading"
                  className="text-display-title text-primary-yellow"
                >
                  Little Lemon
                </h1>
                <h2 className="text-subtitle text-white">Chicago</h2>
              </header>
              <section className="md:max-w-[60%]">
                <p className="text-lead text-white max-w-[48ch] ">
                  We are a family owned Mediterranean restaurant, focused on
                  traditional recipes served with a modern twist.
                </p>
                <Button
                  label="Reserve a Table"
                  type="button"
                  className="mt-6 bg-primary-yellow text-secondary-dark px-6 py-3 rounded-4 text-sm font-bold uppercase tracking-wide hover:bg-secondary-cream transition"
                />
              </section>
            </article>
            <figure className="hidden md:flex mt-8 justify-end items-start pr-3 lg:pr-10 xl:pr-5 mb-[-100px]">
              <img
                src={HomeImage}
                alt="Person serving bruschetta at Little Lemon"
                className="w-[270px] h-[400px] object-cover rounded-4 shadow-md"
              />
            </figure>
          </div>
        </div>
      </section>

      <Specials />
      <Testimonials />

      <section className="py-16 bg-white" aria-labelledby="home-story">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1
              id="home-story"
              className="text-display-title text-primary-yellow mb-4"
            >
              Our Story
            </h1>
            <p className="text-lead text-secondary-dark max-w-[65ch]">
              Welcome to Little Lemon, a charming bistro located in the heart of
              Chicago. We offer a delightful blend of Mediterranean flavors and
              local ingredients, creating a unique dining experience for our
              guests.
            </p>
          </div>
          <div className="relative flex justify-center  items-start h-[320px] md:h-[350px]">
            <div className="relative w-[300px] mx-auto md:mx-0">
              <img
                src={leftImg}
                alt="Little Lemon servers"
                className="w-[220px] h-[300px] object-cover rounded-4 shadow-md
                 z-10 absolute top-[80px] left-[0px] md:left-[20px]"
              />
              <img
                src={rightImg}
                alt="Little Lemon server"
                className="w-[220px] h-[300px] object-cover rounded-4 shadow-md
                 z-0 absolute top-[20px] left-[100px] md:left-[120px]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
