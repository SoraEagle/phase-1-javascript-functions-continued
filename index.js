// Your code here
function saturdayFun(msg = "roller-skate"){
    return `This Saturday, I want to ${msg}!`;
}

function mondayWork(msg = "go to the office"){
    return `This Monday, I will ${msg}.`;
}

function wrapAdjective(wrap = "*"){
    return function (adjective = "special"){
        return `You are ${wrap}${adjective}${wrap}!`;
    };
}
