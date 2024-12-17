function find(){

    let name = document.getElementById("nameBox").value ;

    let url = `https://restcountries.com/v3.1/name/${name}` ;

    fetch(url)
    .then(res => res.json())
    .then(data => find2(data));


}

function find2(data){

    let disArea = document.getElementById("dis1");
    disArea.textContent = "" ;

    for(let i = 1; i <= data.length ; i++){

        let newDiv = document.createElement("div");
        newDiv.innerHTML = `Name : ${data[i-1].name.common} <br> Capital : ${data[i-1].capital} <br> Population : ${data[i-1].population} <br> Flag : <br> <img src="${data[i-1].flags.png}">`


        newDiv.classList.add("style");
        disArea.appendChild(newDiv);
    }
}