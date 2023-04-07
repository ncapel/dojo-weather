function hideElement(element) {
    element = document.querySelector(element);
    element.style.display = 'none';
}
var temps = {
    highTemp: document.querySelectorAll('.temp-high'),
    lowTemp: document.querySelectorAll('.temp-low')
}

function generateTemperatures() {
    var currentUnit = document.querySelector('#temp-units').value
    if (currentUnit == 'celcius') {
        for (var i = 0; i < temps.highTemp.length; i++) {
            temps.highTemp[i].textContent = Math.floor(Math.random() * (32 - 22)) + 22 +'°'
        }
        for (var i = 0; i < temps.lowTemp.length; i++) {
            temps.lowTemp[i].textContent = Math.floor(Math.random() * 22) + '°'
        }
    } else {
        for (var i = 0; i < temps.highTemp.length; i++) {
            temps.highTemp[i].textContent = Math.floor(Math.random() * (89 - 71)) + 71 +'°'
        }
        for (var i = 0; i < temps.lowTemp.length; i++) {
            temps.lowTemp[i].textContent = Math.floor(Math.random() * 71) + '°'
        }
    }
    return temps
}

function updateLocationName(link) {
    var titleLocation = document.querySelector('#title');
    if (link.innerText == 'Burbank') {
        titleLocation.innerText = 'Burbank';
    } else if (link.innerText == 'Chicago') {
        titleLocation.innerText = 'Chicago';
    } else if (link.innerText == 'Dallas') {
        titleLocation.innerText = 'Dallas';
    } else if (link.innerText == 'San Jose') {
        titleLocation.innerText = 'San Jose';
    } else {
        console.log('Something went wrong :(')
    }
}

function convertTemps(unit) {
    for (var i = 0; i < temps.highTemp.length; i++) {
        if (unit == 'celcius') {
            var tempValue = temps.highTemp[i].textContent.replace('°', '');
            temps.highTemp[i].textContent = `${Math.floor((parseInt(tempValue) -32) * 5/9)}°`;
        } else if (unit == 'fahrenheit') {
            var tempValue = temps.highTemp[i].textContent.replace('°', '');
            temps.highTemp[i].textContent = `${Math.floor((parseInt(tempValue) * 9/5) + 32)}°`;
        } else {
            console.log('Something went wrong')
        }
    }
    for (var i = 0; i < temps.lowTemp.length; i++) {
        if (unit == 'celcius') {
            var tempValue = temps.lowTemp[i].textContent.replace('°', '');
            temps.lowTemp[i].textContent = `${Math.floor((parseInt(tempValue) -32) * 5/9)}°`;
        } else if (unit == 'fahrenheit') {
            var tempValue = temps.lowTemp[i].textContent.replace('°', '');
            temps.lowTemp[i].textContent = `${Math.floor((parseInt(tempValue) * 9/5) + 32)}°`;
        } else {
            console.log('Something went wrong')
        }
    }
    return temps
}