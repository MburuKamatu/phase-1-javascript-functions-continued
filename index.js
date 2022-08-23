// code your solution here
const saturdayFun=function(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
const mondayWork=function(msg='go to the office'){
    return `This Monday, I will ${msg}.`
}

let wrapAdjective = function(star="*") {
     return function(value="special") {
          return `You are ${star}${value}${star}!`
        }
}
