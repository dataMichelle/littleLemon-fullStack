import React from "react";
import Button from "@components/shared/Button";
import { formatTime } from "@utils/timeDate";
import useBookingForm from "@hooks/useBookingForm";

const BookingForm = ({
  availableTimes = [],
  unavailableTimes = [],
  dispatch,
  onSubmitSuccess,
  initialData = {},
}) => {
  const {
    step,
    resDate,
    guests,
    occasion,
    selectedTime,
    name,
    phone,
    email,
    comments,
    errors,
    isFormValid,
    handleChange,
    handleTimeSelect,
    handleFindTable,
    handleSubmit,
  } = useBookingForm({ initialData, dispatch, onSubmitSuccess });

  const inputClass =
    "rounded-4 bg-secondary-light border border-secondary-light text-secondary-dark px-4 py-2 h-[44px] w-full";
  const labelClass = "block text-sm font-semibold text-secondary-dark mb-1";
  const buttonClass =
    "rounded-4 w-[90px] h-[44px] text-center px-0 font-bold bg-secondary-cream text-secondary-dark hover:bg-secondary-light transition";

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[900px] mx-auto mt-8 bg-white p-8 rounded-[18px] flex flex-col items-center space-y-8"
      noValidate
    >
      <fieldset className="w-full flex flex-col items-center border-2 border-secondary-cream rounded-[14px] p-6 bg-white mb-8">
        <legend className="text-section-title text-primary-green tracking-wide mb-6">
          Table Details
        </legend>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
          <div>
            <label htmlFor="res-date" className={labelClass}>
              Date
            </label>
            <input
              id="res-date"
              type="date"
              className={inputClass}
              value={resDate}
              min={new Date().toISOString().split("T")[0]}
              onChange={handleChange("resDate")}
              required
            />
          </div>

          <div className="flex flex-col gap-0 xl:gap-2 xl:flex-row xl:col-span-2 items-start">
            <div className="flex flex-col w-[100px]">
              <label htmlFor="guests" className={labelClass}>
                # of Guests
              </label>
              <select
                id="guests"
                className="rounded-4 bg-secondary-light border border-secondary-light text-secondary-dark px-2 py-2 h-[44px] w-full appearance-none"
                value={guests}
                onChange={handleChange("guests", true)}
                required
              >
                {[...Array(20)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col flex-1">
              <label htmlFor="occasion" className={labelClass}>
                Occasion
              </label>
              <select
                id="occasion"
                className="rounded-4 bg-secondary-light border border-secondary-light text-secondary-dark px-4 py-2 h-[44px] w-full"
                value={occasion}
                onChange={handleChange("occasion")}
              >
                <option>Birthday</option>
                <option>Engagement</option>
                <option>Anniversary</option>
              </select>
            </div>
          </div>

          <div className="flex items-end">
            <Button
              label="Find a Table"
              type="button"
              className="rounded-4 bg-primary-green text-white font-bold px-6 h-[44px] hover:bg-secondary-light transition whitespace-nowrap"
              onClick={handleFindTable}
            />
          </div>
        </div>

        <div className="w-full mt-6">
          <label htmlFor="comments" className={labelClass}>
            Additional Comments
          </label>
          <textarea
            id="comments"
            className="rounded-4 bg-secondary-light border border-secondary-light text-secondary-dark px-4 py-2 w-full h-[140px] resize-y"
            placeholder="Optional"
            value={comments}
            onChange={handleChange("comments")}
            rows={5}
          />
        </div>

        {errors.resDate && (
          <div className="text-red-600 text-sm mt-2">{errors.resDate}</div>
        )}

        {step >= 2 && (
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {availableTimes.map((time) => {
              const isDisabled = unavailableTimes.includes(time);
              const isSelected = selectedTime === time;
              return (
                <button
                  type="button"
                  key={time}
                  className={`rounded-4 w-[90px] h-[44px] text-center px-0 font-bold transition
                    ${isDisabled ? "bg-secondary-light text-muted cursor-not-allowed opacity-60" : "bg-secondary-cream text-secondary-dark hover:bg-secondary-light"}
                    ${isSelected ? "!bg-primary-green !text-white" : ""}`}
                  onClick={() => handleTimeSelect(time, isDisabled)}
                  disabled={isDisabled}
                  title={
                    isDisabled ? "This time is fully booked" : "Click to select"
                  }
                >
                  {formatTime(resDate, time)}
                </button>
              );
            })}
          </div>
        )}
      </fieldset>

      {step === 3 && (
        <fieldset className="w-full flex flex-col items-center border-2 border-secondary-cream rounded-[14px] p-6 bg-white">
          <legend className="text-section-title text-primary-green tracking-wide mb-4">
            Contact Details
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-4">
            <div>
              <label htmlFor="name" className={labelClass}>
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className={inputClass}
                placeholder="Full Name"
                value={name}
                onChange={handleChange("name")}
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                className={inputClass}
                placeholder="Phone"
                value={phone}
                onChange={handleChange("phone")}
                required
                pattern="[0-9]{10}"
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email (optional)
              </label>
              <input
                id="email"
                type="email"
                className={inputClass}
                placeholder="Email (optional)"
                value={email}
                onChange={handleChange("email")}
              />
            </div>
          </div>

          <Button
            label="Book the Table"
            type="submit"
            className="rounded-4 bg-primary-green text-white font-bold px-6 h-[44px] hover:bg-secondary-cream transition whitespace-nowrap min-w-fit"
            disabled={!isFormValid}
          />

          <div className="text-sm text-red-600 space-y-1 mt-4">
            {errors.name && <div>{errors.name}</div>}
            {errors.phone && <div>{errors.phone}</div>}
            {errors.email && <div>{errors.email}</div>}
          </div>
        </fieldset>
      )}
    </form>
  );
};

export default BookingForm;
