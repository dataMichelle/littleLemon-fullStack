import React from "react";

const TestimonialCard = ({ rating, image, name, review }) => {
  return (
    <figure className="bg-white p-6 rounded-2xl shadow-md flex flex-col">
      <div
        className="text-yellow-500 text-xl font-bold mb-2 text-left"
        aria-label={`Rating: ${rating} out of 5`}
      >
        ⭐ {rating}
      </div>

      <figcaption className="flex items-center gap-3 mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <span className="font-semibold text-secondary-dark">{name}</span>
      </figcaption>

      <blockquote className="text-sm text-secondary-dark leading-relaxed text-left">
        “{review}”
      </blockquote>
    </figure>
  );
};

export default TestimonialCard;
