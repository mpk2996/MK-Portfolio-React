import React, { useState } from 'react';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // You can access the name, email, and message values from the state variables
    // Send the form data to your backend or perform any other necessary actions
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };



  return (

    <div className="about-page min-h-screen">
      <div className="flex items-center pl-10">
        <div className="h-auto mr-4"></div>
        <div className="mx-auto mt-14 w-100% bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <form onSubmit={handleFormSubmit} className="mt-4 mb-6">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 my-2">
              <label htmlFor="name" className="text-lg md:w-1/4">Name:</label>
              <input
                placeholder="Your Name"
                name="name"
                type="text"
                id="name"
                onChange={handleNameChange}
                className={`border rounded-md p-2 flex-grow`}
              />
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 my-2">
              <label htmlFor="email" className="text-lg md:w-1/4">Email :</label>
              <input
                placeholder="youremail@here.com"
                name="email"
                type="email"
                id="email"
                onChange={handleEmailChange}
                className={`border rounded-md p-2 flex-grow`}
              />
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 my-2">
              <label htmlFor="message" className="text-lg md:w-1/4">Message:</label>
              <textarea
                placeholder="Your Message"
                name="message"
                id="message"
                onChange={handleMessageChange}
                className={`border rounded-md p-2 flex-grow`}
              />
            </div>
            {/* {error ? (
            <div>
              <p className="error-text">An error occurred. Please try again.</p>
            </div>
          ) : null} */}
            <div className="flex flex-row-reverse">
              <button type="submit" className={`px-4 py-2 bg-blue-400 text-white rounded-md`}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

      export default Contact;
    // <div>
    //   <h1>Contact Page</h1>
    //   <p>
    //     Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
    //     molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
    //     magna a ultrices. Aenean pellentesque placerat lacus imperdiet
    //     efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
    //     mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
    //     posuere, eget tristique dui dapibus. Maecenas fermentum elementum
    //     faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
    //     ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
    //     dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
    //     conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
    //     rhoncus. Etiam vel condimentum magna, quis tempor nulla.
    //   </p>
    // </div>
