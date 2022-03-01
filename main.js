// The ressources

let userResults = [];

const userFilters = {
  choice: "",
  chain: "",
  year: "",
  time: ""
};

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
  userFilters.chain = "getChain?";
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
  })
}
