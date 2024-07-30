// src/components/CourseDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { courses } from '../data/courses';

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find(course => course.id.toString() === id);

  if (!course) {
    return <h2>Course not found</h2>;
  }

  return (
    <div className="container my-5">
      <div className="hero-section mb-0" style={{ backgroundImage: `url(${course.image})` }}>
        <div className="overlay"></div>
        <div className="content text-center text-white">
          <h1>{course.title}</h1>
        </div>
      </div>

      <div className="container my-5">
        <div className="row mt-1">
          <div className="col-md-12">
            <div className="card border-0">
              <div className="card-body">
                <h1 style={{ textShadow: 'none' }} className="mt-4">{course.title}</h1>
                <hr />
                <p className="card-text">{course.description}</p>
                <h4>These are some of the courses we offer:</h4>
                <ul>
                  {course.subcourses.map((subcourse, index) => (
                    <li key={index}>{subcourse}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
