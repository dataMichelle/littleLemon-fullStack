import React, { useState, useEffect } from "react";
import BookingForm from "@components/booking/BookingForm";
import BookingConfirmation from "@components/booking/BookingConfirmation";
import { updateTimes } from "@utils/times";

const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [unavailableTimes, setUnavailableTimes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [bookingData, setBookingData] = useState(() => {
    const stored = localStorage.getItem("littleLemonReservation");
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("visitedBookingPage");
    if (!hasVisited) {
      localStorage.removeItem("littleLemonReservation");
      sessionStorage.setItem("visitedBookingPage", "true");
    }
    const { available, unavailable } = updateTimes(new Date());
    setAvailableTimes(available);
    setUnavailableTimes(unavailable);
  }, []);

  const dispatch = ({ type, date }) => {
    if (type === "UPDATE_TIMES") {
      const { available, unavailable } = updateTimes(new Date(date));
      setAvailableTimes(available);
      setUnavailableTimes(unavailable);
    }
  };

  const handleFormSubmit = (formData) => {
    setBookingData(formData);
    setEditMode(false);
    localStorage.setItem("littleLemonReservation", JSON.stringify(formData));
    showToast("Reservation confirmed!");
  };

  const handleEdit = () => {
    setEditMode(true);
    showToast("Edit mode activated.");
  };

  const handleCancel = () => {
    localStorage.removeItem("littleLemonReservation");
    setBookingData(null);
    setEditMode(false);
    showToast("Reservation canceled.");
  };

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 3000);
  };

  return (
    <main className="booking-wrapper relative" aria-labelledby="booking-title">
      <section className="bg-primary-green text-white py-12 text-center font-serif">
        <h1 className="text-display-title text-primary-yellow m-0">
          Book a Table at Little Lemon
        </h1>
        <h3 className="text-lead text-white mt-2">
          Reserve your spot with just a few details below
        </h3>
      </section>

      {toastMsg && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-primary-green text-white py-2 px-4 rounded-xl shadow-md z-50">
          {toastMsg}
        </div>
      )}

      {!bookingData || editMode ? (
        <BookingForm
          availableTimes={availableTimes}
          unavailableTimes={unavailableTimes}
          dispatch={dispatch}
          onSubmitSuccess={handleFormSubmit}
          initialData={bookingData || {}}
        />
      ) : (
        <BookingConfirmation
          data={bookingData}
          onCancel={handleCancel}
          onEdit={handleEdit}
        />
      )}
    </main>
  );
};

export default BookingPage;
