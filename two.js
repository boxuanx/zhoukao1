//去重二
var arr = ['0','1','2','0','7','1'];
function unique(arr){
    var newArr = [arr[0]];
    for(var i=1;i<arr.length;i++){
        if(newArr.indexOf(arr[i]) == -1){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(unique(arr));
