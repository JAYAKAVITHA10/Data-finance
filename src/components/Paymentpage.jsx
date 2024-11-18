import React, { useState } from "react";

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [plan, setPlan] = useState("single");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlanChange = (e) => {
    setPlan(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Submitted:", formData, "Plan:", plan);
  };

  const getPlanDetails = () => {
    switch (plan) {
      case "single":
        return {
          name: "Single User",
          price: "$149",
          storage: "500 GB",
          users: "1",
        };
      case "double":
        return {
          name: "Double User",
          price: "$249",
          storage: "1 TB",
          users: "3",
        };
      case "triple":
        return {
          name: "Triple User",
          price: "$349",
          storage: "2 TB",
          users: "5",
        };
      default:
        return {};
    }
  };

  const { name, price, storage, users } = getPlanDetails();

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold text-center mb-8">Payment Page</h2>

        <h3 className="text-2xl font-semibold mb-4 text-center">{name}</h3>
        <p className="text-center text-xl mb-6">
          {price} - {storage} Storage - {users} Users
        </p>
        <div className="mb-6 text-center">
          <label className="mr-4">
            <input
              type="radio"
              name="plan"
              value="single"
              checked={plan === "single"}
              onChange={handlePlanChange}
              className="mr-2"
            />
            Single User
          </label>
          <label className="mr-4">
            <input
              type="radio"
              name="plan"
              value="double"
              checked={plan === "double"}
              onChange={handlePlanChange}
              className="mr-2"
            />
            Double User
          </label>
          <label>
            <input
              type="radio"
              name="plan"
              value="triple"
              checked={plan === "triple"}
              onChange={handlePlanChange}
              className="mr-2"
            />
            Triple User
          </label>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="cardNumber"
              className="block text-lg font-medium mb-2"
            >
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your card number"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label
                htmlFor="expiryDate"
                className="block text-lg font-medium mb-2"
              >
                Expiry Date
              </label>
              <input
                type="month"
                id="expiryDate"
                name="expiryDate"
                className="w-full p-3 border border-gray-300 rounded-md"
                value={formData.expiryDate}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="w-1/2">
              <label htmlFor="cvv" className="block text-lg font-medium mb-2">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#00df9a] w-full py-3 rounded-md text-white font-bold text-lg mt-6"
            >
              Complete Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
