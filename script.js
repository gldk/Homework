function firstCharToUpperCase(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function checkForSubstring(str, substr) {
	return (str.split(substr).length - 1);
}

function splitString(str, maxLength) {
	if (str.length >= maxLength)
	{
		return str.slice(0, maxLength - 3) + "...";
	}
}

function randNum(min, max) {
    return Math.random() * (max - min) + min;
}

function fibonacci(n) {
  var a = 1,
    b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}

function changeDirection(str) {
	return str.split("").reverse().join("");
}

function maxLength(str) {
	var maxLengthStr = str.split(" ")[0];
	for (var i = 0; i < str.split(" ").length; i++)
	{
		if (str.split(" ")[i].length > maxLengthStr.length)
		{
			maxLengthStr = str.split(" ")[i];
		}
	}
	return maxLengthStr;
}

function function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}
