// Define function to play click sound
function playClickSound() {
    const audio = new Audio('click.mp3');
    audio.play();
}

// Define function for GPL calculation
function calculateGPL() {
    playClickSound();
    const price = parseFloat(document.getElementById('gpl-price').value);
    const distance = parseFloat(document.getElementById('gpl-distance').value);
    
    if (isNaN(price) || isNaN(distance)) {
        document.getElementById('gpl-result').innerText = "Vă rugăm să introduceți valori valide.";
        return;
    }
    
    const consumptionPer100Km = 8.7;
    const cost = (price * distance * consumptionPer100Km) / 100;
    document.getElementById('gpl-result').innerText = `Călătoria va costa ${cost.toFixed(2)} lei.`;
    showSplashEffect();
}

// Define function for Benzin calculation
function calculateBenzin() {
    playClickSound();
    const price = parseFloat(document.getElementById('benzin-price').value);
    const distance = parseFloat(document.getElementById('benzin-distance').value);
    
    if (isNaN(price) || isNaN(distance)) {
        document.getElementById('benzin-result').innerText = "Vă rugăm să introduceți valori valide.";
        return;
    }
    
    const consumptionPer100Km = 8;
    const cost = (price * distance * consumptionPer100Km) / 100;
    document.getElementById('benzin-result').innerText = `Călătoria va costa ${cost.toFixed(2)} lei.`;
    showSplashEffect();
}

// Define function for Taxi calculation
function calculateTaxi() {
    playClickSound();
    const distance = parseFloat(document.getElementById('taxi-distance').value);
    
    if (isNaN(distance)) {
        document.getElementById('taxi-result').innerText = "Vă rugăm să introduceți o valoare validă.";
        return;
    }
    
    const cost = distance * 5;
    document.getElementById('taxi-result').innerText = `Taxa pentru călătorie este de ${cost.toFixed(2)} lei.`;
    showSplashEffect();
}

// Define function for Consumption calculation
function calculateConsumption() {
    playClickSound();
    const distance = parseFloat(document.getElementById('consumed-distance').value);
    const liters = parseFloat(document.getElementById('liters-used').value);
    
    if (isNaN(distance) || isNaN(liters)) {
        document.getElementById('consumption-result').innerText = "Vă rugăm să introduceți valori valide.";
        return;
    }
    
    const consumptionPer100Km = (liters / distance) * 100;
    document.getElementById('consumption-result').innerText = `Consumul este de ${consumptionPer100Km.toFixed(2)} l/100 km.`;
    showSplashEffect();
}

// Define function for GPL Reservoir calculation
function calculateGPLReservoir() {
    playClickSound();
    const kmDriven = parseFloat(document.getElementById('km-driven').value);
    const pricePerLiter = parseFloat(document.getElementById('price-per-liter').value);
    
    if (isNaN(kmDriven) || isNaN(pricePerLiter)) {
        document.getElementById('reservoir-result').innerText = "Vă rugăm să introduceți valori valide.";
        return;
    }
    
    const consumptionPer100Km = 8.7;
    
    // Calculăm câți litri de GPL s-au consumat la numărul de kilometri indicați
    const consumedLiters = (consumptionPer100Km * kmDriven) / 100;
    
    // Calculăm costul total pentru acești litri consumați
    const totalCost = consumedLiters * pricePerLiter;

    document.getElementById('reservoir-result').innerText = `Toarnă ${consumedLiters.toFixed(2)} litri de GPL în sumă de ${totalCost.toFixed(2)} lei pentru un rezervor full și serios.`;
    showSplashEffect();
}

// Function to show splash effect
function showSplashEffect() {
    const splash = document.createElement('div');
    splash.className = 'splash';
    document.body.appendChild(splash);

    setTimeout(() => {
        splash.remove();
    }, 1200);
}

// Handle touch events to allow scrolling in container
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    let startY = 0;

    container.addEventListener('touchstart', function(event) {
        startY = event.touches[0].pageY;
    });

    container.addEventListener('touchmove', function(event) {
        const distance = event.touches[0].pageY - startY;
        if (distance > 0 && container.scrollTop === 0) {
            container.style.transform = `translateY(${distance}px)`;
        } else if (distance < 0 && container.scrollHeight - container.scrollTop === container.clientHeight) {
            container.style.transform = `translateY(${distance}px)`;
        }
    });

    container.addEventListener('touchend', function() {
        container.style.transition = 'transform 0.2s ease-out';
        container.style.transform = 'translateY(0)';
        setTimeout(() => {
            container.style.transition = '';
        }, 200);
    });
});
