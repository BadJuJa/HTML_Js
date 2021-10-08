function timer() {
  h1 = document.getElementsByTagName("h1")[0];
  var date = new Date();
  var hours = 23 - date.getHours();
  var minutes = 59 - date.getMinutes();
  var seconds = 59 - date.getSeconds();

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  h1.innerHTML = hours + ":" + minutes + ":" + seconds;

  setTimeout("timer()", 1000);
}
