let i = 0;
function myFunc(){
  // i++;
  if(i<10){
    i++;
    console.log("Star It Ltd.");
    myFunc();
  }
}
myFunc();