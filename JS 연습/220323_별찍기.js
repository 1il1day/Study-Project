for (i=0; i<5; i++){
    console.log("*".repeat(i+1));
}

// result
// *
// **
// ***
// ****
// *****


for(i=5; i>0; i--){
    console.log("*".repeat(i));
}

// result
// *****
// ****
// ***
// **
// *


for (i=0; i<5; i++){
    console.log(" ".repeat(5-i+1)+"*".repeat(i+1))
}

// result
//     *
//    **
//   ***
//  ****
// *****


for(i=5; i>0; i--){
    console.log(" ".repeat(5-i)+"*".repeat(i))
}
// result
// *****
//  ****
//   ***
//    **
//     *
