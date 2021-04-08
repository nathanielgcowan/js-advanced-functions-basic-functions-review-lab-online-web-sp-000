// Your code here
function saturdayFun(activity= "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}
mondayWork();

function wrapAdjective(parameterone = "*") {
  return function(parameter="special"){
    return `You are ${parameterone}${parameter}${parameterone}!`
  }
}

const Calculator = {
  add: function() {},
  subtract: function() {},
  multiply: function() {},
};

// This Monday, I will ... ."
// activity passed in as the first parameter. IF nothing is passed in, default to "go to the office".
