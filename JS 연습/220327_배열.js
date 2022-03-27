// 배열의 "라"를 모두 제거하기
const arr=["가","라","다","라","마","라"];
let index = arr.indexOf("라"); //중복되는 값을 없애기 위해 변수를 사용
while(index>-1){
    arr.splice(index,1);
    index = arr.indexOf("라");
}
console.log(arr);
// result : ["가","다","마"]
