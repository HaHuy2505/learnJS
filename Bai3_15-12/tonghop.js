
// Tính S(n) = 1 + 1.2 + 1.2.3 + … + 1.2.3….N
var n= 4;
var ketQuaGiaiThua = 1
var ketqua= 0;
for (var i=1 ;i<=n;i++){
    ketQuaGiaiThua = ketQuaGiaiThua * i
    ketqua = ketQuaGiaiThua + ketqua
    console.log("i ", i)
}
console.log("S = ",ketqua)
//bai 12
var n= 1 ;
ketqua=1;
for (var i=0 ;i<=n;i++){
    ketqua=ketqua+ketqua*i;
}
console.log("S = ",ketqua)
// bai 91
var n= 100 ;
ketqua =1 ;
for (i=1;i<=n;i++);{
    ketqua=ketqua+i+1;
}
 console.log ("S=",ketqua)