import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showPolicy, setShowPolicy] = useState(false);
  const [isPolicyAccepted, setIsPolicyAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && isPolicyAccepted) {
      setMessage("Registered successfully!");
      setEmail("");
      setTimeout(() => setMessage(""), 3000);
    } else if (!email.trim()) {
      setMessage("Please enter a valid email address.");
    } else {
      setMessage("You must accept the Privacy Policy to register.");
    }
  };

  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-between w-full"
          >
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className={`bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 ${
                !isPolicyAccepted || !email.trim()
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={!isPolicyAccepted || !email.trim()}
            >
              Notify Me
            </button>
          </form>
          {message && <p className="text-green-500 mt-2">{message}</p>}
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={isPolicyAccepted}
              onChange={() => setIsPolicyAccepted((prev) => !prev)}
              id="policyCheckbox"
            />
            <label htmlFor="policyCheckbox" className="ml-2">
              I have read and accept the{" "}
              <span
                className="text-[#00df9a] cursor-pointer"
                onClick={() => setShowPolicy(true)}
              >
                Privacy Policy
              </span>
            </label>
          </div>
        </div>
      </div>
      {showPolicy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
            <p>
              <strong>Data Collection:</strong> We collect your email address
              for the sole purpose of sending you updates on our latest tips and
              tricks.
            </p>
            <p>
              <strong>Data Usage:</strong> Your email address is used
              exclusively for our newsletter and will not be shared with third
              parties.
            </p>
            <p>
              <strong>Data Protection:</strong> We are committed to protecting
              your data and use encryption and other security measures to keep
              your information safe.
            </p>
            <p>
              <strong>Data Retention:</strong> We retain your email as long as
              you are subscribed to our newsletter. You can unsubscribe at any
              time by clicking the unsubscribe link in any email.
            </p>
            <button
              onClick={() => setShowPolicy(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
