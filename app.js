
const submitButton = document.getElementById("checkButton");
console.log(submitButton);
const message = document.getElementById("message");
console.log(message);
var randomNumber = Math.round(Math.random() * 100);
const lives =document.getElementById("attemptCount");
console.log(randomNumber);
var live= 10;
var text;
submitButton.onclick = ()=>{
var inputValue = document.getElementById("textBox").value;
console.log(inputValue);
live--;
if(inputValue==randomNumber){
    location.href = "./win.html";
}
else if(live==0){
    location.href = "./lose.html";
}
else if(inputValue>randomNumber){
text= `Your guess is too high, ${live} Lives remaining`;
}
else if(inputValue<randomNumber){
text = `Your guess is too low, ${live} Lives remaining`;
}

console.log(live);
console.log(text);
message.style.display = "inherit";
message.innerHTML = text;
lives.innerHTML = live;

}