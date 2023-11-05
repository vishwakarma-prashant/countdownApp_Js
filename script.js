let second = 1000;
let minute = 60 * second;
let hour = 60 * minute;
let day = 24 * hour;



console.log((new Date().toISOString()).substring(0,10))

console.log(new Date().toTimeString().substring(0,5))
var dateInp = document.querySelector("#dateAndTime");
dateInp.value=`${(new Date().toISOString()).substring(0,10)}T${new Date().toTimeString().substring(0,5)}`;
dateInp.min =`${(new Date().toISOString()).substring(0,10)}T${new Date().toTimeString().substring(0,5)}`;
let setDate;
let submitInp = document.querySelector("#submit");

let upToDate;

submitInp.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(e);
  // console.log(dateInp.value);

  setDate = dateInp.value;
  upToDate = new Date(setDate);
  // console.log(upToDate);

  setInterval(() => {
    updateTime();
  }, 1000);
  
});

// console.log(upToDate.toLocaleTimeString());

function updateTime() {
  let currentDate = new Date();
  // console.log(currentDate.toDateString());

  const dateDifference = upToDate.getTime() - currentDate.getTime();
//   console.log(dateDifference);
if(dateDifference< 0){
return 0;
}

  const remainingDay = Math.floor(dateDifference / day);
  // console.log(Math.floor(remainingDay));

  const remainingHour = Math.floor((dateDifference % day) / hour);
  // console.log(Math.floor(remainingHour));

  const remainingMinute = Math.floor((dateDifference % hour) / minute);
  // console.log(Math.floor(remainingMinute));

  const remainingSecond = Math.floor((dateDifference % minute) / second);
  // console.log(Math.floor(remainingSecond));

  const remainingTime = `${remainingDay} Day - ${remainingHour} Hour - ${remainingMinute} Minute - ${remainingSecond} Second `;

  // console.log(remainingTime)
 if(remainingSecond  == 0 && remainingMinute ==0 && remainingHour ==0 && remainingDay==0 ){
alert("    Its Time")

document.querySelector("p").innerHTML = new Date();
 }

  document.querySelector("p").innerHTML = remainingTime;



}

// const remainingTime = `${remainingDay} Day - ${remainingHour} Hour - ${remainingMinute} Minute - ${remainingSecond} Second `

// console.log(remainingTime)
