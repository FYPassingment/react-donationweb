// src/components/Register.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="container" style={{ height: '90vh' }} id="auth">
      <div className="row">
        <div className="col-lg-6">
          <img src="/images/bg-auth.png" className="img-fluid d-none d-lg-block" alt="Register" style={{ height: '90vh' }} />
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="card p-4 shadow-sm p-5" style={{ width: '50%' }}>
            <h2 className="text-center mb-4">Register</h2>
            <form action="/register" method="POST">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" name="username" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <input type="password" className="form-control" id="password" name="password" required />
                  <span className="input-group-text"><i className="bi bi-eye"></i></span>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                <div className="input-group">
                  <input type="password" className="form-control" id="confirm-password" name="confirm-password" required />
                  <span className="input-group-text"><i className="bi bi-eye"></i></span>
                </div>
              </div>
              <button type="submit" className="btn btn-dark w-100">Register</button>
              <p className="mt-3">Already have an account? <Link to="/login" className="font-primary" style={{ textDecoration: 'none' }}>Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
