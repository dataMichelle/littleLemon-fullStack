import { useState } from "react";

const useBookingForm = ({ initialData = {}, dispatch, onSubmitSuccess }) => {
  const [step, setStep] = useState(initialData.resDate ? 3 : 1);
  const [resDate, setResDate] = useState(initialData.resDate || "");
  const [guests, setGuests] = useState(initialData.guests || 1);
  const [occasion, setOccasion] = useState(initialData.occasion || "Birthday");
  const [selectedTime, setSelectedTime] = useState(initialData.resTime || "");
  const [name, setName] = useState(initialData.name || "");
  const [phone, setPhone] = useState(initialData.phone || "");
  const [email, setEmail] = useState(initialData.email || "");
  const [comments, setComments] = useState(initialData.comments || "");
  const [errors, setErrors] = useState({});

  const isFormValid =
    resDate &&
    guests >= 1 &&
    selectedTime &&
    name.trim() &&
    phone.trim() &&
    (!email || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email));

  const validateFields = () => {
    const errs = {};
    if (!name) errs.name = "Full name is required";
    if (!phone) errs.phone = "Phone number is required";
    if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      errs.email = "Valid email is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const resetTimeAndStep = () => {
    setStep(1);
    setSelectedTime("");
  };

  const updateDate = (date) => {
    setResDate(date);
    resetTimeAndStep();
    if (typeof dispatch === "function") {
      dispatch({ type: "UPDATE_TIMES", date });
    }
  };

  const handleChange =
    (field, isNumber = false) =>
    (e) => {
      const value = isNumber ? parseInt(e.target.value) : e.target.value;
      switch (field) {
        case "resDate":
          updateDate(value);
          break;
        case "guests":
          setGuests(value);
          resetTimeAndStep();
          break;
        case "occasion":
          setOccasion(value);
          resetTimeAndStep();
          break;
        case "comments":
          setComments(value);
          break;
        case "name":
          setName(value);
          break;
        case "phone":
          setPhone(value);
          break;
        case "email":
          setEmail(value);
          break;
        default:
          break;
      }
    };

  const handleFindTable = (e) => {
    e.preventDefault();
    if (!resDate) {
      setErrors({ resDate: "Please select a date" });
      return;
    }
    setErrors({});
    if (typeof dispatch === "function") {
      dispatch({ type: "UPDATE_TIMES", date: resDate });
    }
    setStep(2);
  };

  const handleTimeSelect = (time, isDisabled) => {
    if (!isDisabled) {
      setSelectedTime(time);
      setStep(3);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    const formData = {
      resDate,
      resTime: selectedTime,
      guests,
      occasion,
      name,
      phone,
      email,
      comments,
    };

    if (typeof onSubmitSuccess === "function") {
      localStorage.setItem("littleLemonReservation", JSON.stringify(formData));
      onSubmitSuccess(formData);
    }
  };

  return {
    step,
    setStep,
    resDate,
    setResDate,
    guests,
    setGuests,
    occasion,
    setOccasion,
    selectedTime,
    setSelectedTime,
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    comments,
    setComments,
    errors,
    setErrors,
    isFormValid,
    validateFields,
    resetTimeAndStep,
    updateDate,
    handleChange,
    handleFindTable,
    handleTimeSelect,
    handleSubmit,
  };
};

export default useBookingForm;
