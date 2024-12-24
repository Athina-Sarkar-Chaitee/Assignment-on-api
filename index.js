function find() {
    let name = document.getElementById("nameBox").value;

    let url = `https://restcountries.com/v3.1/name/${name}`;

    fetch(url)
        .then(res => res.json())
        .then(data => find2(data));
}

function find2(data) {
    let disArea = document.getElementById("dis1");
    disArea.textContent = "";
    let disArea2 = document.getElementById("dis2");
    disArea2.textContent = "";

    for (let i = 0; i < data.length; i++) {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `Name: ${data[i].name.common} <br> 
                            Capital: ${data[i].capital} <br> 
                            Population: ${data[i].population} <br> 
                            Flag: <br> 
                            <img src="${data[i].flags.png}" alt="Flag"> <br> 
                            <button onclick="weather('${data[i].capital}')">See weather</button>`;

        newDiv.classList.add("style");
        disArea.appendChild(newDiv);
    }
}

function weather(capital) {
    let url = `http://api.weatherapi.com/v1/current.json?key=5ebcc74ed0da4ce68ea85758240312&q=${capital}&aqi=no`;

    fetch(url)
        .then(res2 => res2.json())
        .then(data2 => weather2(data2));
}

function weather2(data2) {
    let disArea2 = document.getElementById("dis2");
    disArea2.textContent = ""; 

    let newDiv2 = document.createElement("div");
    newDiv2.innerHTML = `Capital: ${data2.location.name} <br> 
                         Temp: ${data2.current.temp_c}°C <br> 
                         Condition: ${data2.current.condition.text} <br> 
                         <img src="${data2.current.condition.icon}" alt="Weather icon">`;

    newDiv2.classList.add("style2");
    disArea2.appendChild(newDiv2);
}
