// src/components/Login.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container" style={{ height: '90vh' }} id="auth">
      <div className="row h-100">
        <div className="col-lg-6">
          <img src="/images/bg-auth.png" className="img-fluid d-none d-lg-block" alt="Login" style={{ height: '90vh' }} />
        </div>
        <div className="col-lg-6 align-self-center d-flex justify-content-center">
          <div className="card p-4 shadow-sm p-5" style={{ width: '50%' }}>
            <h2 className="text-center mb-4">Login</h2>
            <form action="/login" method="POST">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" name="username" required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <input type="password" className="form-control" id="password" name="password" required />
                  <span className="input-group-text"><i className="bi bi-eye"></i></span>
                </div>
              </div>
              <button type="submit" className="btn btn-dark w-100">Login</button>
              <p className="mt-3">Don't have an account? <Link to="/register" className="font-primary" style={{ textDecoration: 'none' }}>Join Now</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
