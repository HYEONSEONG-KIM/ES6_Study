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