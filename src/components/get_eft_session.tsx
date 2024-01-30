export async function get_eft_session(amount: string) {
  const session_url = process.env.NEXT_PUBLIC_EFT_SESSION_URL;
  const bearer_token = process.env.NEXT_PUBLIC_EFT_BEARER_TOKEN;
  try {
    const response = await fetch(session_url!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + bearer_token,
      },
      body: JSON.stringify({
        from: "0x50B875325d23a8352256221Cf2f297DED9221b35",
        to: "kongshum",
        amount: amount,
        description: "propertyPayment",
        pps_id: "000001990099",
        payment_type: "WECHAT",
        wallet_address: "0x50B875325d23a8352256221Cf2f297DED9221b35",
        building_code: "TS0000",
        cust_id: "TS0000",
        goods_name: "SME_FEE",
        is_property_fee: "true",
        user_id: "1",
        user_name: "kss36",
        is_sub_account: "0",
        timestamp: "1706577837170",
      }),
    });
    const res = await response.json();
    return res.data.sessionId;
  } catch (error) {
    console.error("Error:", error);
  }
}
