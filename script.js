// Clears the screen on click of C button.

let display = document.getElementById('display');
let historyList = document.getElementById('historyList');
let history = [];

let output = document.getElementById("result");

function clearScreen() {
    document.getElementById("result").value = "";
  }

  // Displays the entered value on screen.
  function liveScreen(value) {
    document.getElementById("result").value += value;
  }
  
  // Swaps the style sheet in order to  achieve dark mode.
  function switchTheme() {
    let darkMode = document.getElementById("dark-mode");
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == "light.css") {
      theme.href = "dark.css";
      darkMode.innerHTML = "Light Mode 🌙";
    } else {
      theme.href = "light.css";
      darkMode.innerHTML = "Dark Mode 🌙";
    }    
}

function getOutput(value){
  output.value = eval(value);
  history.unshift(value + ' = ' + output.value);

}

//show function
function showHistory(){
  historyList.innerHTML = '';
  console.log("run successfully" + result.value);

  history.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    historyList.appendChild(li);
});
}
// function showHistory() {
//     historyList.innerHTML = '';
    
//     history.forEach(item => {
//         let li = document.createElement('li');
//         li.textContent = item;
//         historyList.appendChild(li);
//     });
// }





