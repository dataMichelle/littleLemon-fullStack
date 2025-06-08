import { Link } from "react-router-dom";
import bicycle from "@assets/icons/bicycle-delivery.svg";

const SpecialsCard = ({ image, name, price, description }) => {
  return (
    <article className="specials-card flex flex-col overflow-hidden shadow-md hover:scale-[1.01] transition-transform rounded-4">
      <img src={image} alt={name} className="w-full h-[220px] object-cover" />
      <div className="flex flex-col justify-between p-6 flex-1 bg-secondary-light">
        <header className="mb-4">
          <div className="flex justify-between items-baseline mb-2">
            <h2 className="text-card-title">{name}</h2>
            <span className="text-red-600 text-price font-medium text-[16px]">
              {price}
            </span>
          </div>
          <p className="text-paragraph">{description}</p>
        </header>
        <footer className="mt-4 flex justify-between items-center">
          <Link
            to="#"
            className="text-secondary-dark font-bold text-sm hover:underline flex items-center gap-2"
          >
            <span>Order a Delivery</span>
            <img
              src={bicycle}
              alt="Delivery icon"
              aria-hidden="true"
              className="w-15 h-15"
            />
          </Link>
        </footer>
      </div>
    </article>
  );
};

export default SpecialsCard;
