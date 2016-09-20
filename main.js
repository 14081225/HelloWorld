var i = 0;
var j = 0;
var n = Math.floor(Math.random() * 10 + 1);
var line = 0;
var a = "";
var b = "";
var c = " ";
var d = "*";
line = getLine(n);
Build(line);
function Build(n) {
    for (i = 0; i < n; i++) {
        for (j = 0; j < n - i; j++) {
            a = a + c;
        }
        for (j = 0; j < 2 * i + 1; j++) {
            b = b + d;
        }
        console.log(a + b);
        a = "";
        b = "";
    }
}
function getLine(line) {
    return line;
}
