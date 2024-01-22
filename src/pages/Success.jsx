import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { resetCart } from "../redux/slices/CartSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./Home";

const Success = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCheckout = () => {
    dispatch(resetCart());
    navigate('/');
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Order Successful!
          </h2>
          <p>Your order has been successfully placed</p>
          <button
            onClick={handleCheckout}
            className="bg-green-500 font-bold px-4 py-2 rounded-lg text-white"
          >
            Complete Another Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Success;
