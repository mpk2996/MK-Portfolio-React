import React from 'react';

export default function Home() {
  return (
    <div className="about-page min-h-screen flex justify-center items-center">
      <div className="rounded-lg overflow-hidden w-64 h-96">
        <img
          className="object-cover w-full h-full"
          src="./images/MK-Headshot.jpg"
          alt="Headshot"
        />
      </div>
    </div>
  );
}
