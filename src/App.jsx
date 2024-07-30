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
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/events" exact component={EventList} />
        <Route path="/events/:id" component={EventDetail} />
        <Route path="/courses" exact component={CourseList} />
        <Route path="/courses/:id" component={CourseDetail} />
        <Route path="/booking/:id" component={Booking} />
        <Route path="/booking-success" component={BookingSuccess} />
        <Route path="/booking-failed" component={BookingFailed} />
        <Route path="/complain" component={Complain} />
        <Route path="/faq" component={FAQ} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/rewards" component={Rewards} />
        <Route path="/search" component={SearchResults} />
        {/* Add more routes as needed */}
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
