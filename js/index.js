/* STRING - Cloning Styled Components
const wrapper = document.querySelector('.wrapper');

const styled = aElement => {
    const el = document.createElement(aElement);
    return args => {
        const styles = args[0];
        el.style = styles
        return el;
    }
};

const title = styled("h1")`
    border-radius : 10px;
    color : blue;
    background-color : green;
`;
title.innerText = "WE JUST CLONE";
console.log(title);
document.body.append(title);
*/

/* More String Improvements
const isEmail = email => email.includes("@naver.com");
console.log(isEmail("kim@naver.com"));

const CC_NUMBER = "7777";

//**** **** **** 7777
const displayName = `${"*".repeat(10)}${CC_NUMBER}`
console.log(displayName);

const myName = "Kim HS";
console.log(myName.startsWith("K"));
*/

/*//Array
const freinds = Array.of("kim", "Lee", "An", "Park");
console.log(freinds);

const buttons = document.querySelectorAll("button");
Array.from(buttons).forEach(button => {
    button.addEventListener("click",() => console.log("test"))
})

freinds.fill("*".repeat(5));
console.log(freinds);
*/

// DESRUCTURING
//Object Destructing
/* const settings = {
    notification : {
        follow : true,
        alerts : true,
        unfollow : false
    },
    color : {
        theme : "dark"
    }
}

const {
    notification : {follow = false} = {},
    color
} =settings;

console.log(follow) */

/* //Array Destructing
const days = ["Mon", "Tue", "Wen", "Thur", "Fri", "Sat", "Sun"];

const threedays = days.map(function(value,index){
    if(index < 3){
        return value;
    }
});
console.log(threedays)

const [ t,r,mon, tue, ss] = days;
console.log(mon, tue, ss) */

/* // Renaming
const settings = {
    notification : {
        follow : true,
        alerts : true,
        unfollow : false
    },
    color : {
        theme : "dark",
        chosen_color : "dark"
    }
}

let chosenColor = "blue";
console.log(chosenColor);

({
    color : {chosen_color : chosenColor = "light"}
} =settings);

console.log(chosenColor); */

/* //Function Destructing
function saveSettings({notifications, color : {theme}}){
    console.log(notifications);

}
saveSettings({
   notifications : {
       follow : true,
       alert: true,
       mkt: false
   }, color : {
       theme : "blue"
   }
}) */

/* // Value Shorthands
const follow = checkFllow();
const alert = checkAlert();

const settints = {
    notifications : {
        follow,
        alert
    }
} */

/* // Swapping and Skipping
let mon = "Sat";
let sat = "Mon";
[mon, sat] = [sat, mon];
console.log(mon,sat)

const array = ["1" , "2" , "3"]
const [,,three] = array;
console.log(three) */

//REST AND SPREAD
/* // Introduction to Spread
const friends = [1,2,3,4];
const family = ["a","b","c"];

const hello = {
    a : "a",
    b : "b"
}

const bye = {
    c : "c",
    d : "d"
}

console.log([...friends, ...family])
console.log(...hello,...bye) */

/* // Spread Applications
const friends = ["kim", "lee"];
const newFriends = [...friends, "an"];

console.log(newFriends)

const firstWeek = ["Mon", "Thu", "Wen"];
const holyWeek = ["Sat", "Sun"];
const Weekend = [...firstWeek, "Thur", "Fri", ...holyWeek];
console.log(Weekend)

const lastName = prompt("Last Name");
const user = {
    username : "kim",
    age : 29,
    // lastName : lastName !== "" ? lastName : undefined
    ...(lastName !== "" && {lastName}) // 이 경우 spread로 전개하려면 데이터가 object여야 하므로 중괄호로 감싸줌
}
console.log(user) */

/* // Rest parameters
const infiniteArgs = (...params) => console.log(params);
infiniteArgs(1,"kim", [1,2,3], {kim : "kim", lee : "lee", an : "an"})

const restParam = (first, seconde,...rest) => {
    console.log(`first : ${first}`)
    console.log(`seconde : ${seconde}`)
    console.log(`rest : ${rest}`)
    
}
restParam(1,2,3,4,5) */

/* // Rest + Spread + Destructure
const user = {
    username : "kim",
    age : 29,
    password : 1234
};

const killPass = ({password,...rest}) => rest;

// ex1
const cleanUser = killPass(user);
console.log(cleanUser);
// ex2
const setCountry = ({country = "KR",...rest}) => ({country,...rest})
console.log(setCountry(user))
// ex3
const rename = ({username : name = "lee", ...rest}) => ({name, ...rest})
console.log(rename(user)) */

/* // FOR OF LOOF
const friends = ["kim", "lee", "An"];

const addHeart =(value,idx, array) => console.log(value,idx,array);

friends.forEach(addHeart);

for(const friend of friends){
    console.log(friend)
} */

// PROMISES
/* // Creating Promises
const amIsexy = new Promise((resolve, reject)=>{
    setTimeout(resolve,3000,"ok")
});

console.log(amIsexy);

setInterval(console.log,1000,amIsexy); */

/* // Using Promises
const amIsexy = new Promise((resolve, reject)=>{
    // setTimeout(resolve,3000,"ok");
    setTimeout(reject,3000,"error");
});
const result = value => console.log(value);
amIsexy.then(result).catch(result); */

/* // Chaining Promise
const amIsexy = new Promise((resolve, reject)=>{
    resolve(2);
    //reject(2)
});

// amIsexy.then(number =>{
//     console.log(number * 2);
//     return number *2;
// }).then(otherNumber => {
//     console.log(otherNumber * 2)
// });
const timesTwo = number => number * 2;
amIsexy
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    // .then(() => {
    //     throw Error("Something")
    // })
    .then(lastNumber => console.log(lastNumber))
    .then(lastNumber => console.log(lastNumber))
    .catch(error => console.log(error)) */

/* // Promise.all
const p1 = new Promise((resolve) => {
    setTimeout(resolve, 5000,"First")
})

const p2 = new Promise((resolve,reject) => {
    // setTimeout(resolve, 1000,"Seconde")
    setTimeout(reject, 1000,"reject")
})

const p3 = new Promise((resolve) => {
    setTimeout(resolve, 3000,"Third")
})

const motherPromise = Promise.all([p1,p2,p3]);

motherPromise
    .then(values => console.log(values))
    .catch(value => console.log(value)); */

/* // Promise.race
const p1 = new Promise((resolve) => {
    setTimeout(resolve, 500,"First")
})

const p2 = new Promise((resolve,reject) => {
    // setTimeout(resolve, 1000,"Seconde")
    setTimeout(reject, 1000,"reject")
})

const p3 = new Promise((resolve) => {
    setTimeout(resolve, 3000,"Third")
})

const motherPromise = Promise.race([p1,p2,p3]);

motherPromise
    .then(values => console.log(values))
    .catch(value => console.log(value)); */


/* // finally
const p1 = new Promise((resolve,reject) => {
    setTimeout(reject, 1000,"First")
})
    .then(value => console.log(value))
    .catch(e => console.log(e))
    .finally(()=>console.log("done"))
 */

// Real world Promises
fetch("https://yts.am/api/v2/list_movies.json")
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(e => console.log(e))
