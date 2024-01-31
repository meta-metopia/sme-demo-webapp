import React from "react";
function LoadingProgress() {
  return (
    <div
      className="inline-block h-16 w-16 animate-spin rounded-full border-8 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1s_linear_infinite]"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="h-screen w-screen flex">
      <div className="mx-auto my-auto">
        <LoadingProgress />
      </div>
    </div>
  );
}
