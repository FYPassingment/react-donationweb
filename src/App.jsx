import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import EventList from './components/EventList';
import EventDetail from './components/EventDetail';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import Booking from './components/Booking';
import BookingSuccess from './components/BookingSuccess';
import BookingFailed from './components/BookingFailed';
import Complain from './components/Complain';
import FAQ from './components/FAQ';
import Login from './components/Login';
import Register from './components/Register';
import Rewards from './components/Rewards';
import SearchResults from './components/SearchResults';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
        <Route path="/booking-failed" element={<BookingFailed />} />
        <Route path="/complain" element={<Complain />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/search" element={<SearchResults />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
