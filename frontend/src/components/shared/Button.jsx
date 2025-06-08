const Button = ({
  label,
  children,
  onClick,
  className = "",
  type = "button",
  variant = "default",
  ...props
}) => {
  const baseClass = {
    default:
      "bg-primary text-secondary-dark font-bold py-2 px-4 rounded-xl hover:bg-yellow-300 transition",
    clean: "", // add more if needed
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClass[variant]} ${className}`}
      {...props}
    >
      {label || children}
    </button>
  );
};

export default Button;
