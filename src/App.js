import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/ServicesPage";
import Hotels from "./pages/HotelsPage";
import Transport from "./pages/TransportPage";
import Booking from "./pages/BookingPage";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import Flights from "./pages/FlightsPage";
import Chauffeurs from "./pages/ChauffeursPage";
import GuidedTours from "./pages/GuidedToursPage";
import FlightBookingPage from "./pages/FlightBookingPage";
import HotelBookingPage from "./pages/HotelBookingPage";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/chauffeurs" element={<Chauffeurs />} />
        <Route path="/guided-tours" element={<GuidedTours />} />
        <Route path="/book-flight/:id" element={<FlightBookingPage />} />
        <Route path="/hotel-booking" element={<HotelBookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
