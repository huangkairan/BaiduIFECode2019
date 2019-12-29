var yearSelect = document.getElementById("year-select");
var monthSelect = document.getElementById("month-select");
var daySelect = document.getElementById("day-select");
var hourSelect = document.getElementById("hour-select");
var minuteSelect = document.getElementById("minute-select");
var secondSelect = document.getElementById("second-select");
var result = document.getElementById("result-wrapper");
//获取select的数据
function yearList() {
  for (var i = 2000; i <= 2032; i++) {
    var el = document.createElement("option");
    el.value = i;
    el.innerHTML = i;
    yearSelect.appendChild(el);
  }
}
function monthList() {
  for (var i = 1; i <= 12; i++) {
    var el = document.createElement("option");
    el.value = i;
    el.innerHTML = i;
    monthSelect.appendChild(el);
  }
}
function dayList() {
  var dayArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var dayNumber = dayArray[Number(monthSelect.value) - 1]; //判断月份显示天数
  if (
    Number(monthSelect.value) == 2 &&
    Number(yearSelect.value) % 4 == 0 &&
    Number(yearSelect.value) % 100 != 0
  ) {
    dayNumber = 29; //判断闰年及二月
  }
  for (var i = 1; i <= dayNumber; i++) {
    var el = document.createElement("option");
    el.value = i;
    el.innerHTML = i;
    daySelect.appendChild(el);
  }
}
function hourList() {
  for (var i = 0; i <= 12; i++) {
    var el = document.createElement("option");
    el.value = i;
    el.innerHTML = i;
    hourSelect.appendChild(el);
  }
}
function minuteList() {
  for (var i = 0; i <= 60; i++) {
    var el = document.createElement("option");
    el.value = i;
    el.innerHTML = i;
    minuteSelect.appendChild(el);
  }
}
function secondList() {
  for (var i = 0; i <= 60; i++) {
    var el = document.createElement("option");
    el.value = i;
    el.innerHTML = i;
    secondSelect.appendChild(el);
  }
}
yearList();
monthList();
dayList();
hourList();
minuteList();
secondList();
//获取当前日期及时间
function main() {
  var now = new Date();
  var year = Number(yearSelect.value);
  var month = Number(monthSelect.value);
  var day = Number(daySelect.value);
  var hour = Number(hourSelect.value);
  var minute = Number(minuteSelect.value);
  var second = Number(secondSelect.value);
  var date = setDate(year, month, day, hour, minute, second);
  var dateText = setDateText(date);
  var compareText = date > now ? "还有 " : "已经过去 ";
  var betweenTimeText = getBetweenTimeText(Math.abs(now.getTime()- date.getTime()));
  result.innerHTML = dateText + compareText + betweenTimeText;
}
//获取选中时间
function setDate(year, month, day, hour, minute, second) {
  var date = new Date();
  date.setFullYear(year);
  date.setMonth(month - 1);
  date.setDate(day);
  date.setHours(hour);
  date.setMinutes(minute);
  date.setSeconds(second);
  return date;
}
//获取输出文本
function setDateText(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var week = formatWeek(date);
  var hour = format(date.getHours());
  var minute = format(date.getMinutes());
  var second = format(date.getSeconds());
  return ("现在距离 " +year +"年" +month +"月" +day +"日" +week +" " +hour +":" +minute +":" +second +" ");
}
//获取当前和选中时间的差值
function getBetweenTimeText(time) {
  var day = Math.floor(time / 86400000);
  time %= 86400000;
  var hour = Math.floor(time / 3600000);
  time %= 3600000;
  var minute = Math.floor(time / 60000);
  time %= 60000;
  var second = Math.floor(time / 1000);
  return day + " 天 " + hour + " 小时 " + minute + " 分钟 " + second + " 秒";
}
//格式化文本
function format(number) {
  if (Number(number) < 10) {
    return "0" + number;
  }
  return number;
}
//输出星期数
function formatWeek(date) {
  var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
  return week[date.getDay()];
}
main();
daySelect.onfocus = dayList;
yearSelect.onchange = main;
monthSelect.onchange = main;
daySelect.onchange = main;
hourSelect.onchange = main;
minuteSelect.onchange = main;
secondSelect.onchange = main;
var time = setInterval("main()", 1000);