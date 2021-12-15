//Tính S(n) = 1 + 1/3 + 1/5 + … + 1/(2n + 1)
var n = 4;
var ketqua = 0;
// for (var i = 1; i <= n; i++) {
//   ketqua = ketqua + 1 / (2 * i + 1);
// }
// console.log("S(n) = ", ketqua);

var j = 1;
while(j <= n) {
    ketqua = ketqua + 1 / (2 * j + 1);
    j++;
}
console.log("S(n) = ", ketqua);