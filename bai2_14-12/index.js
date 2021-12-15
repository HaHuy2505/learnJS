// function tinhDienTich(a, b) {
//   var ketqua = a * b
//   return ketqua
// }

// var q = tinhDienTich(2, 10)
// console.log(q)
// function tinhTong(a, b) {
//   var ketqua = a + b;
//   return ketqua;
// }
// var c = tinhTong(2, 512);
// console.log(c);

var x = 0;


// while(x < 10) {
//     console.log(++x)
// }
// tinh n!
// var n = 4;
// var ketqua = 1;
// for (var i = 1 ;i <= n ; i++){
//  ketqua = ketqua * i;
// }
// console.log(ketqua)

//Bài 1: Tính S(n) = 1 + 2 + 3 + … + n
// var n =10 ;
// var ketqua = 0;
// for (var i =1 ;i<= n;i++){
//     ketqua = ketqua + i;
//     console.log (ketqua)
// }

// vong lap 1 
//i = 1,i co <= n khong => co nho hon thi chay vao vong lap => ketqua = 2 => sai vong 1 => = 1

// vong lap 2
//i = 2,i co <= n khong => co nho hon thi chay vao vong lap => ketqua = 2 + 1 = 3 => sai vong 2 = 3

//Bài 2: Tính S(n) = 1^2 + 2^2 + … + n^2
var n=4 ;
var ketqua =0;
for (var i=1 ;i<=n ;i++){
    ketqua = ketqua + 1/i;
    console.log (ketqua)
}


//Bài 3: Tính S(n) = 1 + ½ + 1/3 + … + 1/n

// Bài 4: Tính S(n) = ½ + ¼ + … + 1/2n

// Bài 5: Tính S(n) = 1 + 1/3 + 1/5 + … + 1/(2n + 1)