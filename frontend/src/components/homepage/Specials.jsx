import SpecialsCard from "@components/homepage/SpecialsCard";
import specials from "@data/specials";
import Button from "@components/shared/Button";

const Specials = () => {
  return (
    <section
      className="py-16 mt-20 bg-white"
      aria-labelledby="specials-heading"
    >
      <div className="container ">
        <header className="flex justify-between items-center mb-12 gap-4">
          <h1 className="text-section-title text-secondary-dark ">
            This week's specials!
          </h1>
          <Button className="specials-button" label="Online Menu" />
        </header>
        <section className="grid grid-cols-3 gap-8" aria-label="Specials Menu">
          {specials.slice(0, 3).map((item) => (
            <SpecialsCard
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              description={item.description}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Specials;
