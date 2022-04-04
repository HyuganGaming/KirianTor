
// Test Season
var houses_ranking_sheet = "Results!A1:Z";
var houses_battles_sheet = "FormResponses!A1:M";
var houses_players_sheet = "Players!A2:Z";
var houses_players_ranking_sheet = "PlayersMath!G3:K";

const KIRIAN_TOR_HOUSES_RANKING_TS = "https://sheets.googleapis.com/v4/spreadsheets/1yOcV5amwb0y8UmV0R3nAU_WlrAIHe-jomnIzssH-eBM/values/" + houses_ranking_sheet + "?key=AIzaSyDEl89HU6IEVqW9Nk6OuxbEWNq7csd1TXE";
const KIRIAN_TOR_HOUSES_BATTLES_TS = "https://sheets.googleapis.com/v4/spreadsheets/1yOcV5amwb0y8UmV0R3nAU_WlrAIHe-jomnIzssH-eBM/values/" + houses_battles_sheet + "?key=AIzaSyDEl89HU6IEVqW9Nk6OuxbEWNq7csd1TXE";
const KIRIAN_TOR_HOUSES_PLAYERS_TS = "https://sheets.googleapis.com/v4/spreadsheets/1yOcV5amwb0y8UmV0R3nAU_WlrAIHe-jomnIzssH-eBM/values/" + houses_players_sheet + "?key=AIzaSyDEl89HU6IEVqW9Nk6OuxbEWNq7csd1TXE";
const KIRIAN_TOR_HOUSES_PLAYERS_RANKING_TS = "https://sheets.googleapis.com/v4/spreadsheets/1yOcV5amwb0y8UmV0R3nAU_WlrAIHe-jomnIzssH-eBM/values/" + houses_players_ranking_sheet + "?key=AIzaSyDEl89HU6IEVqW9Nk6OuxbEWNq7csd1TXE";

// Season 1
var houses_ranking_sheet = "ResultsS1!A1:Z";
var houses_battles_sheet = "FormResponsesS1!A1:M";
var houses_players_sheet = "PlayersS1!A2:Z";
var houses_players_ranking_sheet = "PlayersMathS1!H3:M";

const KIRIAN_TOR_HOUSES_RANKING_S1 = "https://sheets.googleapis.com/v4/spreadsheets/1yOcV5amwb0y8UmV0R3nAU_WlrAIHe-jomnIzssH-eBM/values/" + houses_ranking_sheet + "?key=AIzaSyDEl89HU6IEVqW9Nk6OuxbEWNq7csd1TXE";
const KIRIAN_TOR_HOUSES_BATTLES_S1 = "https://sheets.googleapis.com/v4/spreadsheets/1yOcV5amwb0y8UmV0R3nAU_WlrAIHe-jomnIzssH-eBM/values/" + houses_battles_sheet + "?key=AIzaSyDEl89HU6IEVqW9Nk6OuxbEWNq7csd1TXE";
const KIRIAN_TOR_HOUSES_PLAYERS_S1 = "https://sheets.googleapis.com/v4/spreadsheets/1yOcV5amwb0y8UmV0R3nAU_WlrAIHe-jomnIzssH-eBM/values/" + houses_players_sheet + "?key=AIzaSyDEl89HU6IEVqW9Nk6OuxbEWNq7csd1TXE";
const KIRIAN_TOR_HOUSES_PLAYERS_RANKING_S1 = "https://sheets.googleapis.com/v4/spreadsheets/1yOcV5amwb0y8UmV0R3nAU_WlrAIHe-jomnIzssH-eBM/values/" + houses_players_ranking_sheet + "?key=AIzaSyDEl89HU6IEVqW9Nk6OuxbEWNq7csd1TXE";


const POST_NEW_COMMENT = "/new-comment";
const GET_ALL = "/get_all";
const GET_1 = "/get_1";
const POST = "/post";
const PUT = "/put";
const DELETE = "/delete";

var showSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function (url) {
  var result = {};
  showSpinner();
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      hideSpinner();
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      hideSpinner();
      return result;
    });
}

var postJSONData = function (url, obj) {
  var result = {};
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
  let userLogged = localStorage.getItem('User-Logged');
  let user = document.getElementById("user");
  let logout = document.getElementById("logout");

  if (userLogged && user){
    userLogged = JSON.parse(userLogged);
    user.innerText = '' + userLogged.email;
  }
  if (logout){
    logout.addEventListener("click", function(e){
      localStorage.removeItem('User-Logged');
    });
  }
});