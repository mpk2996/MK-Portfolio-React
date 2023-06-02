import React from 'react';

const Projects = () => {
  return (
    <div className="about-page min-h-screen flex items-center">

  <div className="container mx-auto my-1 max-w-screen-lg flex justify-center pl-10">
    <div className="w-30% bg-transparent">
      <div className="w-2/3 bg-white bg-opacity-75 rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-3xl font-bold mb-4">SOS Recipes</h2>
        <a href="https://github.com/GeorgeDoyle1175/Project2" target="_blank" rel="noreferrer" className="card">
          <h3>SOS Recipes</h3>
          <img src="./images/SOS-logo.png"
          alt="SOS Recipes Logo" />
          <p>This App was created to allow an user to search for any recipe based on limited or specific ingredients they may have available in their pantry. This is intended to facilitate the culinary creations and imagination of users. User also have the option to create their own profile where they can save recipes and also add their own creations for other users to enjoy.</p>
        </a>
      </div>
    </div>
  </div>

  <div className="container mx-auto my-1 max-w-screen-lg flex justify-center pl-10">
    <div className="w-30% bg-transparent">
      <div className="w-2/3 bg-white bg-opacity-75 rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-3xl font-bold mb-4">Pawfinder</h2>
        <a href="https://github.com/ddelgado25/Pawfinder-Project" target="_blank" rel="noreferrer" className="card">
          <h3>Pawfinder</h3>
          <img src="./images/paw-finder-logo.png"
          alt="Pawfinder Logo" />
          <p>This is a single-page web application designed to facilitate dog adoptions. It provides a platform for users to search for dogs available for adoption, create profiles, and finalize the adoption process. The application is built using the MERN stack (MongoDB, Express.js, React, and Node.js) and incorporates GraphQL for efficient data handling.</p>
        </a>
      </div>
    </div>
  </div>

  <div className="container mx-auto my-1 max-w-screen-lg flex justify-center pl-10">
    <div className="w-30% bg-transparent">
      <div className="w-2/3 bg-white bg-opacity-75 rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-3xl font-bold mb-4">Password Generator</h2>
        <a href="https://github.com/mpk2996/mk-password-generator" target="_blank" rel="noreferrer" className="card">
          <h3>Password Generator</h3>
          <img src="./images/pw-generator-screenshot.png"
          alt="Password Generator Screenshot" />
          <p>This application utilizes dynamically updated HTML and CSS powered by JavaScript. The app will allow users to create any number of random passwords of any length with a variety of letters, numbers and characters. This will help the user maximize their password strength and ensure protection of any password-protected data.</p>
        </a>
      </div>
    </div>
  </div>
</div>




    // <div className="about-page min-h-screen">
    //   <div className="project-1 flex justify-center items-center h-screen">
    //     <div className="container mx-auto">
    //       <div className="flex flex-wrap justify-center">
    //         <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
    //           <a
    //             href="https://github.com/your-username/project1"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="block"
    //           >
    //             <div className="relative overflow-hidden rounded-lg shadow-lg">
    //               <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
    //               <div className="absolute inset-0 flex items-center justify-center">
    //                 <h3 className="text-white text-xl font-bold">Project 1</h3>
    //               </div>
    //             </div>
    //           </a>
    //         </div>
    //         {/* Add more project cards here */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Projects;
