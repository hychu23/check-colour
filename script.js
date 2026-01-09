document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // 月由0開始
  const day = today.getDate();

  // 顯示日期
  document.getElementById("date").textContent = 
    `${year}年 ${month}月 ${day}日`;

  // 計算數字1-7（你可以用呢個簡單方法：年+月+日 總和 除7 餘數）
  let number = (year + month + day) % 7;
  if (number === 0) number = 7; // 讓餘數0變7

  // 你自己定義1-7對應咩文字（改呢度！）
  const messages = {
    1: "大吉大利",
    2: "順風順水",
    3: "小心行事",
    4: "財運亨通",
    5: "貴人相助",
    6: "開心愉快",
    7: "休息充電"
  };

  // 顯示結果
  document.getElementById("result").textContent = messages[number];
});
