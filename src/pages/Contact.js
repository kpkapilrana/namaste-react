const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border border-black p-2 m-2"
        />
        <input
          type="text"
          name="message"
          placeholder="Message"
          className="border border-black p-2 m-2"
        />
        <button className="border border-black p-2 m-2 bg-blue-600 text-white rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
