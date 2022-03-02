// The ressources

let userResults = [];

const userFilters = {
  choice: "",
  chain: "",
  year: "",
  time: ""
};

const mainContainer = document.querySelector(".main_container")
mainContainer.classList.add("hide")

// Introduction screen

const introButton = document.querySelector(".end_introduction")
introButton.addEventListener("click", () => {
  const introductionContainer = document.querySelector(".introduction_container");
  introductionContainer.classList.add("hide");
});

// First screen

const tvPathButton = document.querySelector(".tv-path");
const radioPathButton = document.querySelector(".radio-path");

//First page Button

tvPathButton.addEventListener("click", () => {
  const pathSetup = document.querySelector(".path_setup");
  pathSetup.classList.add("hide");
  userFilters.choice = "tv";
});

radioPathButton.addEventListener("click", () => {
  const pathSetup = document.querySelector(".path_setup");
  pathSetup.classList.add("hide");
  userFilters.choice = "radio";
});

//Second page Button

const tvChainChoiceButton = document.querySelector(".button-chain-choice");
tvChainChoiceButton.addEventListener("click", () => {
  const ChainChoice = document.querySelector(".tv_chain_choice");
  ChainChoice.classList.add("hide");
  const chainValue = document.querySelector(".chain_title")
  userFilters.chain = chainValue.innerHTML;
});

// Fonction to move the selector for the Years

const tvYearSelector = document.querySelector(".slider")
const tvYearDisplay = document.querySelector(".year_choice_display")

tvYearDisplay.innerHTML = tvYearSelector.value;
function updateTextInput(val) {
  tvYearDisplay.innerHTML = val
}

//Third page Button

const tvYearChoiceButton = document.querySelector(".button-year-choice");
tvYearChoiceButton.addEventListener("click", () => {
  const ChainChoice = document.querySelector(".tv_year_count");
  ChainChoice.classList.add("hide");
  userFilters.year = tvYearSelector.value;
});

//Fourth page Buttons

const tvHourChoice = document.querySelectorAll(".hour_choice_selector");

for (let i = 0; i< tvHourChoice.length; i++){
  tvHourChoice[i].addEventListener("click", ()=> {
    const hourChoice = document.querySelector(".tv_hour_count");
    const hourValues = document.querySelectorAll(".hour_input")
    hourChoice.classList.add("hide");
    userFilters.time = hourValues[i].innerHTML
    console.log(userFilters)
    
    // Get the recap in order
    const recapContainer = document.querySelector(".choice_recap_container")

    const recapChainContainer = document.createElement("p")
    recapChainContainer.classList.add("chain_recap")
    recapChainContainer.classList.add("item_recap")
    recapChainContainer.innerHTML = userFilters.chain
    recapContainer.appendChild(recapChainContainer)
    const recapYearContainer = document.createElement("p")
    recapYearContainer.classList.add("year_recap")
    recapYearContainer.classList.add("item_recap")
    recapYearContainer.innerHTML = userFilters.year
    recapContainer.appendChild(recapYearContainer)
    const recapHourContainer = document.createElement("p")
    recapHourContainer.classList.add("time_recap")
    recapHourContainer.classList.add("item_recap")
    recapHourContainer.innerHTML = userFilters.time
    recapContainer.appendChild(recapHourContainer)

    updateChart()

    mainContainer.classList.remove("hide")
    
    // const recapChainContainer = document.querySelectorAll(".chain_recap")
    // console.log(recapChainContainer)
    // const recapYearContainer = document.querySelectorAll(".year_recap")
    // recapYearContainer.innerHTML = userFilters.year
    // const recapHourContainer = document.querySelectorAll(".hour_recap")
    // recapHourContainer.innerHTML = userFilters.time
  })
}



