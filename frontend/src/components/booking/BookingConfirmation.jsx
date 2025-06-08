import React from "react";
import Button from "@components/shared/Button";
import { formatTime } from "@utils/timeDate";

const BookingConfirmation = ({ data, onEdit, onCancel }) => {
  return (
    <section className="w-full max-w-[1200px] mx-auto mt-8 bg-secondary-cream border-2 border-primary-green rounded-[14px] p-8 text-center">
      <h2 className="text-2xl font-bold mb-4 text-primary-green tracking-wide">
        Booking Confirmed!
      </h2>

      <p className="text-lead mb-4 text-secondary-dark">
        Thank you, <strong>{data.name}</strong>!
      </p>

      <p className="mb-2">Your reservation details:</p>
      <ul className="text-left text-secondary-dark space-y-1 list-disc list-inside mb-6">
        <li>
          <strong>Date:</strong> {data.resDate}
        </li>
        <li>
          <strong>Time:</strong> {formatTime(data.resDate, data.resTime)}
        </li>
        <li>
          <strong>Guests:</strong> {data.guests}
        </li>
        <li>
          <strong>Occasion:</strong> {data.occasion}
        </li>
        <li>
          <strong>Phone:</strong> {data.phone}
        </li>
        {data.email && (
          <li>
            <strong>Email:</strong> {data.email}
          </li>
        )}
        {data.comments && (
          <li>
            <strong>Comments:</strong> {data.comments}
          </li>
        )}
      </ul>

      <div className="flex justify-center gap-4">
        <Button
          label="Edit Reservation"
          className="bg-primary-green text-white hover:bg-primary-green/80"
          onClick={onEdit}
        />
        <Button
          label="Cancel Reservation"
          className="bg-red-500 text-white hover:bg-red-600"
          onClick={onCancel}
        />
      </div>
    </section>
  );
};

export default BookingConfirmation;
