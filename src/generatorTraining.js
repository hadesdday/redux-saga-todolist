console.log("generator function learning ...");

// function* hello() {
//   //cau lenh 1
//   yield 2; // dung
//   //chay lai
//   //cau lenh 2
//   console.log("aa");
//   yield "hello ae";
//   console.log("aa1");
//   yield true;
//   console.log("aa2");
//   return "hello world !"; //ket thuc
//   //=> cách khác để thoát khỏi generator function -> throw error
// }

//function* add(a,b){
//console.log(a,' ',b);
//return a+b;
//}

// const a = hello(); // iterators
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());

// function* world() {
//   while (true) {
//     //comeback lai day moi khi goi next
//     yield "hello..";
//     yield 2;
//     return 1;
//   }
// }

// const b = world();
// console.log("1", b.next());
// console.log("2", b.next());
// console.log("3", b.next());
// console.log("4", b.next());
// console.log("5", b.next());

function* printName() {
  yield "boss";
}

function* printCat() {
  yield "cat";
}

function* hello() {
  yield "hello";
  yield* printCat();
  yield* printName(); // generator printName() duoc nhuong quyen thuc thi nho syntax yield* (generator hello() nhuong quyen cho generators)
}

const c = hello();
console.log(c.next());
console.log(c.next());
console.log(c.next());
