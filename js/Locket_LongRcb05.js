// ========= ID ========= //
const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};
// =========   Phần cố định  ========= // 
// =========  @longrcb05 ========= // 
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"],
  obj = JSON.parse($response.body);
obj.Attention = "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";
var longrcb05 = {
      is_sandbox: !1,
      ownership_type: "PURCHASED",
      billing_issues_detected_at: null,
      period_type: "normal",
      expires_date: "2099-04-23T10:10:14Z",
      grace_period_expires_date: null,
      unsubscribe_detected_at: null,
      original_purchase_date: "2005-04-23T10:10:15Z",
      purchase_date: "2005-04-23T10:10:14Z",
      store: "app_store"
  },
  locketGold = {
      grace_period_expires_date: null,
      purchase_date: "2005-04-23T10:10:14Z",
      product_identifier: "com.longrcb05.premium.yearly",
      expires_date: "2099-04-23T10:10:14Z"
  };
const match = Object.keys(mapping).find(e => ua.includes(e));
if (match) {
  let [e, s] = mapping[match];
  s ? (locketGold.product_identifier = s, obj.subscriber.subscriptions[s] = longrcb05) : obj.subscriber.subscriptions["com.longrcb05.premium.yearly"] = longrcb05, obj.subscriber.entitlements[e] = locketGold
} else obj.subscriber.subscriptions["com.longrcb05.premium.yearly"] = longrcb05, obj.subscriber.entitlements.pro = locketGold;
$done({
  body: JSON.stringify(obj)
});
