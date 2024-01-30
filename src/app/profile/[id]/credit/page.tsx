import React from "react";
import { ProfileCredit } from "@/components/profile-credit";

export default function page({ params }: any) {
  const { id } = params;

  return <ProfileCredit id={id} />;
}
