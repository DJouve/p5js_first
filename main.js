// The ressources

let userResults = [];

const userFilters = {
  choice: "",
  chain: "",
  date: "",
  time: ""
};

// First screen

const tvPathButton = document.querySelector(".tv-path");
const radioPathButton = document.querySelector(".radio-path");

//First page Button

tvPathButton.addEventListener("click", () => {
  const pathSetup = document.querySelector(".path_setup");
  pathSetup.classList.add("hide");
  userFilters.choice = "tv";
  console.log(userFilters);
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
