import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";

import Header from "@components/shared/Header";
import Footer from "@components/shared/Footer";

import HomePage from "@pages/HomePage";
import AboutPage from "@pages/AboutPage";
import MenuPage from "@pages/MenuPage";
import BookingPage from "@pages/BookingPage";
import LoginPage from "@pages/LoginPage";
import OrderOnline from "@pages/OrderOnline";
import Specials from "@components/homepage/Specials";

// Init static times (can swap for Django API call later)
const initializeTimes = () => [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

const updateTimes = (state, action) => {
  // Placeholder for API-based updates
  return initializeTimes();
};

function App() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route
            path="/reservations"
            element={
              <BookingPage
                availableTimes={availableTimes}
                dispatch={dispatch}
              />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/booking-page"
            element={
              <BookingPage
                availableTimes={availableTimes}
                dispatch={dispatch}
              />
            }
          />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/specials" element={<Specials />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
