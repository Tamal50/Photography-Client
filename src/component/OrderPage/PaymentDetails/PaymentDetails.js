import React from "react";
import {  Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "./SimpleCardFrom";

const stripePromise = loadStripe(
  "pk_test_51IhWWcLthU7h4A4dOuhNmpDNLcbhw4tzn9welnMxT9AYOKkOWaucsa5x4P3MLmwO3MqxmnEKKhxPSfX2KPuqYvGB00T9wTay2J"
);

const PaymentDetails = () => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm></SimpleCardForm>
    </Elements>
  );
};

export default PaymentDetails;
