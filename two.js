//去重二
var arr = ['0','1','2','0','7','1'];
function unique(arr){
    var newArr = [];
    for(var i=0;i<arr.length;i++){
        if(newArr.indexOf(arr[i]) == -1){
            newArr.push(arr[i]);
            //哈哈哈哈
        }
    }
    return newArr;
}
console.log(unique(arr));

