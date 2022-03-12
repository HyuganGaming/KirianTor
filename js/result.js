kirian_tor_battles_array = [];

function changeScore(type, amount) {
    var First = document.getElementById("FirstInputId");
    var Second = document.getElementById("SecondInputId");
    var Third = document.getElementById("ThirdInputId");
    var Fourth = document.getElementById("FourthInputId");
    var numberFirst = parseInt(First.innerText);
    var numberSecond = parseInt(Second.innerText);
    var numberThird = parseInt(Third.innerText);
    var numberFourth = parseInt(Fourth.innerText);

    if (type == "first") {
        First.innerText = checkNumber(numberFirst + amount, -2, 4);
    } else if (type == "second") {
        Second.innerText = checkNumber(numberSecond + amount, -2, 4);
    } else if (type == "third") {
        Third.innerText = checkNumber(numberThird + amount, -2, 4);
    } else if (type == "fourth") {
        Fourth.innerText = checkNumber(numberFourth + amount, -2, 4);
    }
}

function checkNumber(number, min, max) {
    if (number > max) {
        return max;
    } else if (number < min) {
        return min;
    } else {
        return number;
    }
}

function AddOptionsToSelect(select, array) {
    for (var i = 1; i < kirian_tor_battles_array.length; i++) {
        if (kirian_tor_battles_array[i][0] != "") {

            var opt = document.createElement('option');
            opt.value = kirian_tor_battles_array[i][0];
            opt.innerHTML = kirian_tor_battles_array[i][0];
            select.appendChild(opt);
        }
    }

    var opt = document.createElement('option');
    opt.value = "Other (random)";
    opt.innerHTML = "Other (random)";
    select.appendChild(opt);
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(KIRIAN_TOR_HOUSES_RANKING).then(function (resultObj) {
        if (resultObj.status === "ok") {
            kirian_tor_battles_array = resultObj.data.values;

            AddOptionsToSelect(document.getElementById("inputFirstHouse"), kirian_tor_battles_array);
            AddOptionsToSelect(document.getElementById("inputSecondHouse"), kirian_tor_battles_array);
            AddOptionsToSelect(document.getElementById("inputThirdHouse"), kirian_tor_battles_array);
            AddOptionsToSelect(document.getElementById("inputFourthHouse"), kirian_tor_battles_array);
        }
    });



    document.getElementById("btnFirstPlayerScoreMinus").addEventListener("click", function () {
        changeScore("first", -1)
    }, false);
    document.getElementById("btnFirstPlayerScorePlus").addEventListener("click", function () {
        changeScore("first", 1)
    }, false);
    document.getElementById("btnSecondPlayerScoreMinus").addEventListener("click", function () {
        changeScore("second", -1)
    }, false);
    document.getElementById("btnSecondPlayerScorePlus").addEventListener("click", function () {
        changeScore("second", 1)
    }, false);
    document.getElementById("btnThirdPlayerScoreMinus").addEventListener("click", function () {
        changeScore("third", -1)
    }, false);
    document.getElementById("btnThirdPlayerScorePlus").addEventListener("click", function () {
        changeScore("third", 1)
    }, false);
    document.getElementById("btnFourthPlayerScoreMinus").addEventListener("click", function () {
        changeScore("fourth", -1)
    }, false);
    document.getElementById("btnFourthPlayerScorePlus").addEventListener("click", function () {
        changeScore("fourth", 1)
    }, false);
});