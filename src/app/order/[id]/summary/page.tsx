import { OrderSummary } from "@/components/order-summary";
import React from "react";

export const runtime = "edge";

export const metadata = {
  title: "Order Summary",
  description: "Order Summary",
}

export default async function page({ params }: any) {
  const { id } = params;

  return <OrderSummary id={id} />;
}
