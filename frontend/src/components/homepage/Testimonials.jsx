import TestimonialCard from "./TestimonialCard";
import testimonials from "@data/testimonials";

const Testimonials = () => {
  return (
    <section
      className="bg-primary-green py-12 px-4 sm:px-6 lg:px-8"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-section-title  text-white">Testimonials</h1>
        </header>

        <section
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="Customer Reviews"
        >
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              rating={item.rating}
              image={item.image}
              name={item.name}
              review={item.review}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Testimonials;
