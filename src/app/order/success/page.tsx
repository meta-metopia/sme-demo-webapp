import { PaymentSuccessful } from "@/components/payment-successful";
import React from "react";

export const runtime = "edge";
export const metadata = {
  title: "Payment Successful",
  description: "Payment Successful",
}

export default function page() {
  return <PaymentSuccessful />;
}
