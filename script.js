/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(function(element,index,list) {
    if(element.marks>50){
      console.log(element);
    }
  }) 
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(element,index,list) {
      if(element.marks>50){
        console.log(element);
      }
    })
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",marks:45});
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  let output = arr.filter(function(element,index,list){
    return (element.marks>50);
  })
  console.log(output);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 4, name: "kishan", age: '22', marks: 95 },
    { id: 5, name: "gayle", age: '42', marks: 80 },
    { id: 6, name: "virat", age: '34', marks: 90 },
  ];

  let concatArr = arr.concat(arr2);
  console.log(concatArr);
}
