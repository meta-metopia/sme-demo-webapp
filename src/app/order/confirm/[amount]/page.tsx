import { PaymentConfirmation } from "@/components/payment-confirmation";
import React from "react";
import { get_eft_session } from "@/components/get_eft_session";

export const metadata = {
  title: "Payment Confirmation",
  description: "Payment Confirmation",
};

export const runtime = "edge";

export default async function page({ params }: any) {
  const { amount } = params;
  const session = await get_eft_session(amount);
  const eft_url = (process.env.NEXT_PUBLIC_EFT_BASE_URL + session) as string;

  return <PaymentConfirmation url={eft_url} />;
}
