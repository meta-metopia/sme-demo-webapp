/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/j5LzDmPhq9h
 */

import Link from "next/link";

function getTotalPrice(dishes: any) {
  let totalPrice = 0;
  Object.keys(dishes).map((dish) => {
    totalPrice += dishes[dish].price;
  });
  return totalPrice;
}

export async function OrderSummary({ id }: { id: string }) {
  const response = await fetch(
    process.env.MONGODB_API_URL + "/action/aggregate",
    {
      method: "POST",
      headers: {
        apiKey: process.env.MONGODB_API_KEY as string,
        contentType: "application/json",
      },
      body: JSON.stringify({
        collection: "Orders",
        database: "eft-demo",
        dataSource: "demo",
        pipeline: [
          {
            $match: {
              _id: id,
            },
          },
          {
            $lookup: {
              from: "Dish",
              localField: "Dishes",
              foreignField: "_id",
              as: "dishesInfo",
            },
          },
          {
            $addFields: {
              Dishes: "$dishesInfo",
            },
          },
          {
            $project: {
              dishesInfo: 0,
            },
          },
        ],
      }),
    },
  );

  if (!response.ok) {
    return <div>Failed to load order summary</div>;
  }

  const orderData = await response.json();
  const orders = orderData.documents;
  if (orders.length === 0) {
    return <div>No orders found</div>;
  }

  const order = orders[0];
  const dishes = order.Dishes;
  const orderTime = order.createdAt;
  const totalPrice = getTotalPrice(dishes).toString();

  return (
    <div key="1" className="flex flex-col h-screen bg-white">
      <header className="border-b border-gray-200 px-4 py-2">
        <h1 className="font-semibold text-lg text-xl">訂單信息</h1>
        <p className="text-sm text-gray-500">訂單編號: {order._id}</p>
        <p className="text-sm text-gray-500">訂單時間: {orderTime}</p>
      </header>
      <main className="flex-1 overflow-y-auto border-b border-gray-200 px-4 py-2">
        <div className="grid gap-4">
          {Object.keys(dishes).map((key) => (
            <div
              className="flex items-center gap-4 border border-gray-200 rounded-lg p-4 dark:border-gray-800"
              key={dishes.name}
            >
              <img
                alt="Food Image"
                className="w-16 h-16 object-cover rounded-md"
                height="100"
                src={dishes[key].image}
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <div className="flex-1">
                <h2 className="font-semibold text-base">{dishes[key].name}</h2>
                <p className="text-sm text-gray-500">數量: 1</p>
              </div>
              <p className="font-semibold text-base">
                ${parseFloat(dishes[key].price).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </main>
      <footer className="border-t border-gray-200 px-4 py-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-lg">Total</h2>
          <p className="font-semibold text-lg">
            ${getTotalPrice(dishes).toFixed(2)}
          </p>
        </div>
        <Link href={"/order/confirm/" + totalPrice}>
          <button className="w-full h-10 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-md shadow-md transform transition hover:scale-105">
            Pay Now
          </button>
        </Link>
      </footer>
    </div>
  );
}
