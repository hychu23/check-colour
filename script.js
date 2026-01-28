let currentDate = new Date();

function updateDisplay() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  document.getElementById("date").textContent = 
    `${year}年 ${month}月 ${day}日`;

  const lookupTable = {
    1: {31:4,30:3,29:2,28:1,27:8,26:7,25:6,24:5,23:4,22:3,21:2,20:1,19:8,18:4,17:3,16:2,15:1,14:8,13:7,12:6,11:5,10:4,9:3,8:2,7:1,6:8,5:7,4:6,3:5,2:4,1:3},
    2: {28:1,27:8,26:7,25:6,24:5,23:4,22:3,21:2,20:1,19:8,18:7,17:6,16:5,15:4,14:3,13:2,12:1,11:8,10:7,9:6,8:5,7:4,6:3,5:2,4:1,3:8,2:7,1:6},
    3: {31:1,30:8,29:7,28:6,27:5,26:4,25:3,24:2,23:1,22:8,21:7,20:6,19:2,18:1,17:8,16:7,15:6,14:5,13:4,12:3,11:2,10:1,9:8,8:7,7:6,6:5,5:4,4:3,3:2,2:1},
    4: {30:4,29:3,28:2,27:3,26:8,25:7,24:6,23:5,22:4,21:3,20:2,19:1,18:8,17:7,16:2,15:1,14:8,13:7,12:6,11:5,10:4,9:3,8:2,7:1,6:8,5:7,4:6,3:5,2:4,1:3},
    5: {31:6,30:5,29:4,28:3,27:2,26:1,25:8,24:7,23:6,22:5,21:4,20:3,19:2,18:1,17:8,16:4,15:3,14:2,13:1,12:8,11:7,10:6,9:5,8:4,7:3,6:2,5:1,4:8,3:7,2:6,1:5},
    6: {30:8,29:7,28:6,27:5,26:4,25:3,24:2,21:1,20:8,19:7,18:6,17:5,16:4,15:3,14:2,13:1,12:4,11:3,10:2,9:1,8:8,7:7,6:6,5:5,4:4,3:3,2:2,1:1},
    7: {31:3,30:2,29:1,28:8,27:7,26:6,25:5,24:4,23:3,22:2,21:1,20:8,19:7,18:6,17:5,16:4,15:3,14:2,13:5,12:4,11:3,10:2,9:1,8:8,7:7,6:6,5:5,4:4,3:3,2:2,1:1},
    8: {31:5,30:4,29:3,28:2,27:1,26:8,25:7,24:6,23:5,22:4,21:3,20:2,19:1,18:8,17:7,16:6,15:5,14:4,13:3,12:7,11:6,10:5,9:4,8:3,7:2,6:1,5:8,4:7,3:6,2:5,1:4},
    9: {30:7,29:6,28:6,27:5,26:3,25:2,24:1,23:8,22:7,21:6,20:5,19:4,18:3,17:2,16:1,15:8,14:7,13:6,12:5,11:4,10:7,9:6,8:5,7:4,6:3,5:2,4:1,3:8,2:7,1:6},
    10: {31:2,30:1,29:8,28:7,27:6,26:5,25:4,24:3,23:2,22:1,21:8,20:7,19:6,18:5,17:4,16:3,15:2,14:1,13:8,12:7,11:6,10:5,9:8,8:7,7:6,6:5,5:4,4:3,3:2,2:1,1:8},
    11: {30:3,29:2,28:1,27:8,26:7,25:6,24:5,23:4,22:3,21:2,20:1,19:8,18:7,17:6,16:5,15:4,14:3,13:2,12:1,11:8,10:7,9:6,8:2,7:1,6:8,5:7,4:6,3:5,2:4,1:3},
    12: {31:5,30:4,29:3,28:2,27:1,26:8,25:7,24:6,23:5,22:4,21:3,20:2,19:1,18:8,17:7,16:6,15:5,14:4,13:3,12:2,11:1,10:8,9:7,8:3,7:2,6:1,5:8,4:7,3:6,2:5,1:4}
  };

  const colorAdvice = {
    1: { sheng: "黑或藍", wang: "綠", ji: "大黃或大紅" },
    2: { sheng: "黑或藍", wang: "綠", ji: "淺黃或淺紅" },
    3: { sheng: "泥黃或啡", wang: "白或金", ji: "黑或藍" },
    4: { sheng: "大黃或紅", wang: "泥黃或啡", ji: "白" },
    5: { sheng: "大黃或紅", wang: "泥黃或啡", ji: "金" },
    6: { sheng: "綠", wang: "大黃或紅", ji: "泥黃或啡" },
    7: { sheng: "白或金", wang: "黑或藍", ji: "淺綠" },
    8: { sheng: "白或金", wang: "黑或藍", ji: "深綠" }
  };

  let number = 1;
  if (lookupTable[month] && lookupTable[month][day]) {
    number = lookupTable[month][day];
  }

  const advice = colorAdvice[number];

  const getColorClass = (text) => {
    text = text.trim();
    if (text === "黑") return "color-black";
    if (text === "藍") return "color-blue";
    if (text === "綠") return "color-green";
    if (text === "大黃") return "color-big-yellow";
    if (text === "大紅") return "color-big-red";
    if (text === "淺黃") return "color-light-yellow";
    if (text === "淺紅") return "color-light-red";
    if (text === "泥黃") return "color-mud-yellow";
    if (text === "啡") return "color-brown";
    if (text === "白") return "color-white";
    if (text === "金") return "color-gold";
    if (text === "紅") return "color-red";
    if (text === "淺綠") return "color-light-green";
    if (text === "深綠") return "color-deep-green";
    return "";
  };

  const colorizeText = (text) => {
    if (!text.includes("或")) {
      return `<span class="color-part ${getColorClass(text)}">${text}</span>`;
    }

    const parts = text.split("或");
    let html = '';
    parts.forEach((part, index) => {
      const trimmed = part.trim();
      if (trimmed) {
        html += `<span class="color-part ${getColorClass(trimmed)}">${trimmed}</span>`;
      }
      if (index < parts.length - 1) {
        html += '<span class="or">或</span>';
      }
    });
    return html;
  };

  const resultHTML = 
    `<div class="advice-line">
       <span class="label">今日生嘅顏色：</span>
       <div class="result-line">${colorizeText(advice.sheng)}</div>
     </div>` +
    `<div class="advice-line">
       <span class="label">今日旺嘅顏色：</span>
       <div class="result-line">${colorizeText(advice.wang)}</div>
     </div>` +
    `<div class="advice-line">
       <span class="label">今日忌嘅顏色：</span>
       <div class="result-line">${colorizeText(advice.ji)}</div>
     </div>`;

  document.getElementById("result").innerHTML = resultHTML;
}

document.getElementById("prevDay").addEventListener("click", () => {
  currentDate.setDate(currentDate.getDate() - 1);
  updateDisplay();
});

document.getElementById("nextDay").addEventListener("click", () => {
  currentDate.setDate(currentDate.getDate() + 1);
  updateDisplay();
});

updateDisplay();
