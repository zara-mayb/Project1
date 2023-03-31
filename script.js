//agent name submitted
//API request after name submitted
//parse json response
//inject info to the card
//render card onto page
var getAllAgentsURL = "https://valorant-api.com/v1/agents/";
var agentuid = '';
var dropdown = document.querySelector("#dropdown");
var agentsArray = [];
var img = document.querySelector("#portrait");
var selectedAgent = {}
var cardtext = document.querySelector ("#card-text");

function getAgentname(element) {
  agentuid = element.value;
}

async function requestAPI() {
  try {
    const response = await fetch(getAllAgentsURL);
    const dataObject = await response.json();
    agentsArray = dataObject.data;
    buildDropdown(agentsArray);
    console.log(dropdown.value);
  } catch (error) {
    console.log(error);
  }
}
requestAPI();

function buildDropdown(dataArray) {
  for (const obj of dataArray) {
    dropdown.innerHTML += `<option value="${obj.uuid}">${obj.displayName}</option>`
  }
}

function selectAgent() {
  selectedAgent = agentsArray.find((agent) => agent.uuid === dropdown.value)
  console.log (selectedAgent);
  img.src = selectedAgent.fullPortrait;
  console.log(img);
  cardtext.innerText = selectedAgent.description;
}



//player cards API
var getAllPlayerCardsURL = "https://valorant-api.com/v1/playercards/";
var playercarduid = '';
var dropdown2 = document.querySelector("#dropdown2");
var playercardsArray = [];
var img2 = document.querySelector("#card-portrait");
var selectedPlayerCard = {};

function getPlayerCardName(element) {
  playercarduid = element.value;
}

async function requestAPI2() {
  try {
    const response2 = await fetch(getAllPlayerCardsURL);
    const dataObject2 = await response2.json();
    playercardsArray = dataObject2.data;
    buildDropdown2(playercardsArray);
    console.log(dropdown2.value);
    const chosenplayercard = playercardsArray.find((playercards) => playercards.uuid === dropdown.value);
    console.log(chosenplayercard);
  } catch (error) {
    console.log(error);
  }
}
requestAPI2();

function buildDropdown2(dataArray2) {
  for (const obj of dataArray2) {
    dropdown2.innerHTML += `<option value="${obj.uuid}">${obj.displayName}</option>`
  }
}

function selectPlayerCard() {
  selectedPlayerCard = playercardsArray.find((playercards) => playercards.uuid === dropdown2.value)
  console.log (selectedAgent);
  img2.src = selectedPlayerCard.largeArt;
  console.log(img);
}

//transition
function scale(element, value) {
  element.style.transform = "scale(" + value + ")";
}

