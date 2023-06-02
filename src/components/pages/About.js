import React from 'react';

export default function About() {
  return (
    <div className="about-page min-h-screen flex items-center">
      <div className="container mx-auto my-1 max-w-screen-lg flex justify-center pl-10">
        <div className="w-30% bg-transparent">

          <div className="w-2/3 bg-white bg-opacity-75 rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="mb-6">Hello, and thank you for viewing my portfolio. My name is Mike Kehoe, and I am a recent graduate of the University of Miami full-stack web development bootcamp. I am fluent in HTML/CSS, JavaScript, Express, React, MongoDB, and Node. I live in Indianapolis, Indiana and work with music programs across the country as a percussion arranger, clinician, and educator. I graduated in 2018 from Ball State University with a Bachelor's Degree in Music Education. In my free time, I enjoy exercising, playing music, and performing with the Indianapolis Colts Drumline!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
