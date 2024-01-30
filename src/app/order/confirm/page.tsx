import { PaymentConfirmation } from "@/components/payment-confirmation";
import React from "react";
import { get_eft_session } from "@/components/get_eft_session";

export const metadata = {
  title: "Payment Confirmation",
};

export default async function page() {
  const session = await get_eft_session("0.1");
  const eft_url = process.env.NEXT_PUBLIC_EFT_BASE_URL + session;

  return <PaymentConfirmation url={eft_url} />;
}
