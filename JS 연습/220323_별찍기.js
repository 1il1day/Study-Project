// 하나씩 늘어나는 별 다섯개를 출력
for (i=0; i<5; i++){
    console.log("*".repeat(i+1));
}

//result
//*
//**
//***
//****
//*****


// 하나씩 줄어드는 별 다섯개를 출력
for(i=5; i>0; i--){
    console.log("*".repeat(i));
}

//result
//*****
//****
//***
//**
//*
