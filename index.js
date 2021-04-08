// Your code here
function saturdayFun(activity="roller-skate") {
  console.log(`This Saturday I want to ${activity}!`);
}

const mondayWork = function(activity="go to the office") {
  console.log("This Monday, I will ${activity}.");
}
mondayWork();

function wrapAdjective(parameterone = "*") {
  return function(parameter="special"){
    return `You are ${parameterone}${special}${parameterone}.`
  }
}

// This Monday, I will ... ."
// activity passed in as the first parameter. IF nothing is passed in, default to "go to the office".
