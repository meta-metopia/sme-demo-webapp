import { PaymentSuccessful } from "@/components/payment-successful";
import React from "react";

export const metadata = {
  title: "AI order",
  description: "QR code page",
};

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center">AI order</h1>
        <p className="text-center">QR code page</p>
      </div>
    </main>
  );
}
