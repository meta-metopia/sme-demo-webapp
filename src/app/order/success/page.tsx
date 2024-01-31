import { PaymentSuccessful } from "@/components/payment-successful";
import React from "react";

export const runtime = "edge";
export default function page() {
  return <PaymentSuccessful />;
}
