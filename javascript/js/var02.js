// 1. 자바스크립트는 자료형이 동적으로 정해진다

var num = 10; //정수 //4Byte -> Heap
console.log ("num", num);

var str = "문자열" // 문자열 // 4Byte -> Heap
console.log("str", str);

var floatNum = 10.5; // 실수 // 4Byte -> Heap
console.log("floatNum", floatNum);

var charStr = "가" //문자 // 4Byte -> Heap
console.log("boolData", boolData);

var boolData = true; //bool (참 거짓) true, false  // 4Byte  -> Heap
console.log("boolData", boolData);

var list = [1, 2, 3, 4, 5, 6]; //배열 4Byte -> Heap
console.log("list", list);
console.log("list[0]", list[0]);
console.log("list[5]", list[5]);

var user = { // 자바스크립트 오브젝트 (key : value) 4Byte -> Heap
    name : "홍길동",
    phone : 0102222
}
console.log("user", user);
console.log("user.name", user.name);
console.log("user.phone", user.phone);

//자바스크립트는 함수 저장가능
var hello = function(){ // 4Byte
    alert("함수 호출됨");
}