var kirian_tor_battles_array = [];

function ShowLastBattles(array) {
    let content = "";

    for (let i = 1; i < array.length; i++) {

        let battle = array[i];

        
        content +=
            `
        <tr>
            <td>${battle[0]}</td>

            <td>${battle[1]}</td>

            <td class="text-center">${battle[2]}</td>

            <td class="text-center">${battle[3]}</td>

            <td>${battle[4]}</td>

            <td class="text-center">${battle[5]}</td>

            <td class="text-center">${battle[6]}</td>

            <td>${battle[7]}</td>

            <td class="text-center">${battle[8]}</td>

            <td class="text-center">${battle[9]}</td>

            <td>${battle[10]}</td>

            <td class="text-center">${battle[11]}</td>

            <td class="text-center">${battle[12]}</td>
        </tr>
        `;
    }

    document.getElementById("tableBattles").innerHTML = content;
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(KIRIAN_TOR_HOUSES_BATTLES).then(function (resultObj) {
        if (resultObj.status === "ok") {
            kirian_tor_battles_array = resultObj.data.values;

            ShowLastBattles(kirian_tor_battles_array);
        }
    });
});
