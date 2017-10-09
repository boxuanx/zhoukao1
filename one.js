//去重1
var arr = ['0','1','2','0','7','1'];
var brr = [];
function fun(arr){
    var newarr = arr.sort();
    for(var i=0;i<newarr.length;i++){
        if(newarr[i] !== newarr[i+1]){
            brr.push(newarr[i]);
        }
    }
    return brr;
}
console.log(fun(arr));