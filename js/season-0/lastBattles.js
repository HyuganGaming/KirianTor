let kirian_tor_battles_array = [];
let amountOfBattlesPerPage = 15;
let currentPage = 1;
let start;
let end;

function ShowLastBattles(page) {
    let content = "";
    let array = kirian_tor_battles_array;

    currentPage = page;
    AddPagination(kirian_tor_battles_array.length - 1);

    start = array.length-1 - ((page - 1) * amountOfBattlesPerPage);
    end = array.length-1 - (page * amountOfBattlesPerPage)
    if (end < 0){
        end = 0;
    }

    for (let i = start; i > end; i--) {

        let battle = array[i];

        
        content +=
            `
        <tr>
            <td>${battle[0]}</td>

            <td class="blue">${battle[1]}</td>

            <td class="blue text-center">${battle[2]}</td>

            <td class="blue text-center">${battle[3]}</td>

            <td class="green">${battle[4]}</td>

            <td class="green text-center">${battle[5]}</td>

            <td class="green text-center">${battle[6]}</td>

            <td class="purple">${battle[7]}</td>

            <td class="purple text-center">${battle[8]}</td>

            <td class="purple text-center">${battle[9]}</td>

            <td class="red">${battle[10]}</td>

            <td class="red text-center">${battle[11]}</td>

            <td class="red text-center">${battle[12]}</td>
        </tr>
        `;
    }

    document.getElementById("tableBattles").innerHTML = content;
}

function AddPagination(amountOfBattles){
    let content = "";
    let amountOfPages = Number(Math.ceil(amountOfBattles / amountOfBattlesPerPage));

    let previousPage = currentPage - 1;
    let nextPage = currentPage + 1;
    if (previousPage < 1){
        previousPage = 1;
    }
    if (nextPage > amountOfPages){
        nextPage = amountOfPages;
    }

    if (amountOfBattles < amountOfBattlesPerPage){

    }
    else {
        content +=
        `
        <li class="page-item">
            <button class="page-link" onclick="ShowLastBattles(${previousPage})">Previous</button>
        </li>
        `

        for (let i = 0; i < amountOfPages; i++){

            if (i+1 == currentPage){
                content +=
                `
                <li class="page-item active">
                    <button class="page-link" onclick="ShowLastBattles(${i+1})">${i+1}</button>
                </li>
                `
            }
            else{
                content +=
                `
                <li class="page-item">
                    <button class="page-link" onclick="ShowLastBattles(${i+1})">${i+1}</button>
                </li>
                `
            }
        }

        content +=
        `
        <li class="page-item">
            <button class="page-link" onclick="ShowLastBattles(${nextPage})">Next</button>
        </li>
        `

        document.getElementById("pagination").innerHTML = content;
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(KIRIAN_TOR_HOUSES_BATTLES_TS).then(function (resultObj) {
        if (resultObj.status === "ok") {
            kirian_tor_battles_array = resultObj.data.values;

            AddPagination(kirian_tor_battles_array.length - 1);
            ShowLastBattles(currentPage);
        }
    });
});