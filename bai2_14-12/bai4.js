// Tính S(n) = ½ + ¼ + … + 1/2n
var n=5 ;
var ketqua =0;
for (var i=1 ;i<=n ;i++){
    ketqua = ketqua + 1/(2*i);
    console.log (ketqua)
}