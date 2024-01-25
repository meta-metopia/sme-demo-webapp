/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/j5LzDmPhq9h
 */

import Link from "next/link";

export function OrderSummary() {
  return (
    <div key="1" className="flex flex-col h-screen bg-white">
      <header className="border-b border-gray-200 px-4 py-2">
        <h1 className="font-semibold text-lg">Order Summary</h1>
        <p className="text-sm text-gray-500">Order #12345</p>
        <p className="text-sm text-gray-500">Placed on January 10, 2024</p>
      </header>
      <main className="flex-1 overflow-y-auto border-b border-gray-200 px-4 py-2">
        <div className="grid gap-4">
          <div className="flex items-center gap-4 border border-gray-200 rounded-lg p-4 dark:border-gray-800">
            <img
              alt="Food Image"
              className="w-16 h-16 object-cover rounded-md"
              height="100"
              src="https://estarfood.com/wp-content/uploads/2021/05/G2300-1.jpg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <div className="flex-1">
              <h2 className="font-semibold text-base">Fries</h2>
              <p className="text-sm text-gray-500">Quantity: 1</p>
            </div>
            <p className="font-semibold text-base">$10.00</p>
          </div>
          <div className="flex items-center gap-4 border border-gray-200 rounded-lg p-4 dark:border-gray-800">
            <img
              alt="Food Image"
              className="w-16 h-16 object-cover rounded-md"
              height="100"
              src="https://online.citysuper.com.hk/cdn/shop/products/170200172-1-coca-cola-hk-coke-330ml-can_1024x1024.jpg?v=1570279023"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <div className="flex-1">
              <h2 className="font-semibold text-base">Coke</h2>
              <p className="text-sm text-gray-500">Quantity: 1</p>
            </div>
            <p className="font-semibold text-base">$10.00</p>
          </div>
          <div className="flex items-center gap-4 border border-gray-200 rounded-lg p-4 dark:border-gray-800">
            <img
              alt="Food Image"
              className="w-16 h-16 object-cover rounded-md"
              height="100"
              src="https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <div className="flex-1">
              <h2 className="font-semibold text-base">Burger</h2>
              <p className="text-sm text-gray-500">Quantity: 1</p>
            </div>
            <p className="font-semibold text-base">$10.00</p>
          </div>
        </div>
      </main>
      <footer className="border-t border-gray-200 px-4 py-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-lg">Total</h2>
          <p className="font-semibold text-lg">$30.00</p>
        </div>
        <Link href={"/order/confirm"}>
          <button className="w-full h-10 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-md shadow-md transform transition hover:scale-105">
            Pay Now
          </button>
        </Link>
      </footer>
    </div>
  );
}