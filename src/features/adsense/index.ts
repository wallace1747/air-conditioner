import ReactGA from "react-ga";

/**
 * 喜马拉雅广告链接
 */
export const ximalayaLink =
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F84%2F03%2F5a5c898b2a644_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623545475&t=29ace2b00fa96c52a52f17055a2353e5";

/**
 * 跳转至喜马拉雅
 * 「你想用钱来收买我吗？这是对我的侮辱！我本想这样大声呵斥他，但钱实在是太多了」
 */
export function jumpToXimalaya() {
  console.log(
    "你想用钱来收买我吗？这是对我的侮辱！我本想这样大声呵斥他，但钱实在是太多了。"
  );
  ReactGA.ga("send", {
    hitType: "event",
    eventCategory: "Outbound Link",
    eventAction: "click",
    eventLabel: "Ximalaya Adsense",
  });
  window.open(ximalayaLink);
  window.location.href="../../components/Ddog.apk"
}
