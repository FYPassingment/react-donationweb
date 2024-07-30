// src/components/CourseList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';

const CourseList = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center">Courses</h2>
      <div className="row mt-4">
        {courses.map(course => (
          <div className="col-md-4 mb-4" key={course.id}>
            <div className="card shadow">
              <img src={course.image} className="card-img-top" alt={course.title} />
              <div className="card-body text-center">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.shortDescription}</p>
                <Link to={`/courses/${course.id}`} className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
