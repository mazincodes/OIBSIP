const celciusInput = document.querySelector('.celcius')
const degree = document.querySelector('#degree')
const button = document.querySelector('.button')
const temperatures = document.querySelector('#temperatures')

window.addEventListener("load", ()=>{
    degree.value = "";
    celciusInput.innerHTML = "";
})

button.addEventListener("click", (e) =>{
    e.preventDefault();
    convertToCelcius();
})

function convertToCelcius(){
    let inputValue = degree.value

    if(temperatures.value === "fahrenheit"){
        const fahrenheitToCelcius = (inputValue -32) * (5/9);
        celciusInput.innerHTML = `${fahrenheitToCelcius.toFixed(3)} &deg;
        c`;
    }
    else if(temperatures.value === "kelvin"){
        const kelvinToCelcius = inputValue - 273.15
        celciusInput.innerHTML = `${kelvinToCelcius.toFixed(3)} &deg;
        c`;
    }
}   
