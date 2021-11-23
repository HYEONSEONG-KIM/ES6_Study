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

