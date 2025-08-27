const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-4">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <form className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Name"
          className="m-1 p-2 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md"
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          className="m-1 p-2 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md"
        />
        <br />
        <input
          type="text"
          placeholder="Message"
          className="m-1 p-2 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md"
        />
        <br />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
