window.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.getElementById('search-btn');
  const cityInput = document.getElementById('city-input');
  const forecastScreen = document.getElementById('forecast-screen');
  const carouselScreen = document.getElementById('carousel-screen');
  const forecastFrame = document.getElementById('forecast-frame');

  

  const cities = {

    "Tokyo": { lat: 35.6895, lon: 139.6917 },
    "London": { lat: 51.5085, lon: -0.1257 },
    "New York": { lat: 40.7128, lon: -74.0060 },
    "Los Angeles" : { lat: 34.0549, lon: 118.2426},
    "Chicago" : { lat: 41.8832, lon: 87.6324},
    "Miami" : { lat: 25.7617, lon: 80.1918},
    "Seattle" : { lat: 47.6061, lon: 122.3328},
    "San Francisco" : { lat: 37.7749, lon: 122.4194},
    "Boston" : { lat: 42.3555, lon: 71.0565},
    "Washington D.C." : { lat: 38.9072, lon: 77.0369},
    "Las Vegas" : { lat: 36.1716, lon: 115.1391},
    "San Diego" : { lat: 32.7157, lon: 117.1611},
    "Orlando" : { lat: 28.5384, lon: 81.3789},
    "Atlanta" : { lat: 33.7501, lon: 84.3885},
    "Houston" : { lat: 29.7601, lon: 95.3701},
    "Dallas" : { lat: 32.7767, lon: 96.7970},
    "Austin" : { lat: 30.2672, lon: 97.7431},
    "Denver" : { lat: 39.7392, lon: 104.9903},
    "Portland" : { lat: 45.5152, lon: 122.6784},
    "Philadelphia" : { lat: 39.9526, lon: 75.1652},
    "San Jose" : { lat: 37.3387, lon: 121.8853},
    "Honolulu" : { lat: 21.3099, lon: 157.8581},
    "Minneapolis" : { lat: 44.9778, lon: 93.2650},
    "New Orleans" : { lat: 29.9509, lon: 90.0758},
    "Nashville" : { lat: 36.1627, lon: 86.7816},
    "Tampa" : { lat: 27.9517, lon: 82.4588},
    "Pheonix" : { lat: 33.4483, lon: 112.0725},
    "Baltimore" : { lat: 39.2905, lon: 76.6104},
    "Salt Lake City" : { lat: 40.7606, lon: 111.8881},
    "Madison" : { lat: 43.0722, lon: 89.4008},
    "St. Louis" : { lat: 38.6274, lon: 90.1982},
    "Pittsburgh" : { lat: 40.4387, lon: 79.9972},
    "Charleston" : { lat: 32.7833, lon: 79.9320},
    "Providence" : { lat: 41.8246, lon: 71.4142},
    "Colombus" : { lat: 39.9625, lon: 83.0032},
    "Raleigh" : { lat: 35.7796, lon: 78.6382},
    "Charlotte" : { lat: 35.2271, lon: 80.8409},
    "New Haven" : { lat: 41.3083, lon: 72.9279},
    "Milwaukee" : { lat: 43.0410, lon: 87.9097},
    "Portland, OR" : { lat: 45.5152, lon: 122.6784},
    "Portland, ME" : { lat: 43.6708, lon: 70.2844},
    "Rochester" : { lat: 43.1566, lon: 77.6088},
    "Cleveland" : { lat: 41.4993, lon: 81.6944},
    "San Antonio" : { lat: 29.4252, lon: 98.4946},
    "Buffalo" : { lat: 42.8869, lon: 78.8789},
    "Richmond" : { lat: 37.5407, lon: 77.4360},
    "Albany" : { lat: 42.6518, lon: 73.7545},
    "Omaha" : { lat: 41.2565, lon: 95.9345},
    "Tuscon" : { lat: 32.2540, lon: 110.9742},
    "Detroit" : { lat: 42.3297, lon: 83.0425},
    "Sacramento" : { lat: 38.5781, lon: 121.4944},
    "Provo" : { lat: 40.2335, lon: 111.6670},
    "Hartford" : { lat: 41.7658, lon: 72.6734},
    "Cincinnati" : { lat: 39.1031, lon: 84.5120},
    "Des Moines" : { lat: 41.5896, lon: 93.6164},
    "Indianapolis" : { lat: 39.7691, lon: 86.1580},
    "Durham" : { lat: 35.9956, lon: 78.9002},
    "Bridgeport" : { lat: 41.1799, lon: 73.1923},
    "Kansas City" : { lat: 39.0997, lon: 94.5786},
    "Louiseville" : { lat: 38.2469, lon: 85.7664},
    "Syracuse" : { lat: 43.0495, lon: 76.1474},
    "Harrisburg" : { lat: 40.2732, lon: 76.8867},
    "Jacksonville" : { lat: 30.3298, lon: 81.6592},
    "San Juan" : { lat: 18.4153, lon: 66.0594},
    "Worcester" : { lat: 42.2628, lon: 71.8025},
    "Grand Rapids" : { lat: 42.9704, lon: 85.6722},
    "Lancaster" : { lat: 34.7039, lon: 118.1481},
    "Lexington" : { lat: 38.0389, lon: 84.5153},
    "Fayetteville" : { lat: 35.0524, lon: 78.8784},
    "Greenville" : { lat: 34.8485, lon: 82.4000},
    "Albuquerque" : { lat: 35.0844, lon: 106.6504},
    "Boise" : { lat: 46.6150, lon: 116.2023},
    "Virginia Beach" : { lat: 36.8516, lon: 75.9792},
    "Ogden" : { lat: 41.2186, lon: 111.9705},
    "Spokane" : { lat: 47.6580, lon: 117.4235},
    "Knoxville" : { lat: 35.9653, lon: 83.9233},
    "Colorado Springs" : {lat: 38.8353, lon: 104.8216},
    "Allentown" : { lat: 40.6023, lon: 75.4714},
    "Reno" : { lat: 39.5299, lon: 119.8143},
    "Dayton" : { lat: 39.7592, lon: 84.1936},
    "Tulsa" : { lat: 36.1151, lon: 95.9895},
    "Toledo" : { lat: 41.6528, lon: 83.5379},
    "Columbia" : { lat: 34.0008, lon: 81.0351},
    "Memphis" : { lat: 35.1486, lon: 90.0519},
    "Poughkeepsie" : { lat: 41.7056, lon: 73.9284},
    "Huntsville" : { lat: 34.7295, lon: 86.5853},
    "Akron" : { lat: 41.0812, lon: 81.5188},
    "Wichita" : { lat: 37.6935, lon: 97.3382},
    "Oklahoma City" : { lat: 35.4689, lon: 97.5195},
    "Pensacola" : { lat: 30.4077, lon: 87.2190},
    "Oxnard" : { lat: 34.1977, lon: 119.1775},
    "Lakeland" : { lat: 28.0421, lon: 81.9535},
    "Birmingham" : { lat: 52.4823, lon: 1.8900},
    "Greensboro" : { lat: 36.0726, lon: 79.7915},
    "Winston-Salem" : { lat: 36.0948, lon: 80.2434},
    "Little Rock" : { lat: 34.7445, lon: 92.2880},
    "Baton Rouge" : { lat: 30.4515, lon: 91.1871},
    "Riverside" : { lat: 33.9825, lon: 117.3758},
    "Scranton" : { lat: 41.4103, lon: 75.6611},
    "Daytona Beach" : { lat: 29.2071, lon: 81.0197},
    "Chattanooga" : { lat: 35.0458, lon: 85.3094},
    "Stockton" : { lat: 37.9575, lon: 121.2925},
    "El Paso" : { lat: 31.7619, lon: 106.4850},
    "Anchorage" : { lat: 61.2176, lon: 149.8997},
    "Rehoboth Beach" : { lat: 38.7209, lon: 75.0760}
  };

  const weatherLabelMap = {
    0: "Clear Sky",
    1: "Mainly Clear",
    2: "Partially Cloudy",
    3: "Overcast",
    45: "Foggy",
    48: "Rime Ice",
    51: "Drizzling Rain",
    53: "Drizzling Rain",
    55: "Drizzling Rain",
    56: "Drizzling Rain",
    57: "Drizzling Rain",
    61: "Light Rain",
    63: "Moderate Rain",
    65: "Raining",
    66: "Light Rain",
    67: "Heavy Rain",
    71: "Icy",
    73: "Snowing",
    75: "Blizzard",
    77: "Icy",
    80: "Moderate Rain",
    81: "Heavy Rain",
    82: "Pouring Rain",
    85: "Snowing",
    86: "Blizzard",
    95: "Thunderstorm",
    96: "Hailing",
    99: "Severe Weather"
  };

  const iconMap = {
    0: "assets/images/sunny-icon.svg",
    1: "assets/images/sunny-icon.svg",
    2: "assets/images/partly-cloudy-icon.svg",
    3: "assets/images/fog-icon.svg",
    45: "assets/images/fog-icon.svg",
    48: "assets/images/rime-ice-icon.svg",
    51: "assets/images/drizzle-icon.svg",
    53: "assets/images/drizzle-icon.svg",
    55: "assets/images/drizzle-icon.svg",
    56: "assets/images/drizzle-icon.svg",
    57: "assets/images/drizzle-icon.svg",
    61: "assets/images/drizzle-icon.svg",
    63: "assets/images/rain-icon.svg",
    65: "assets/images/rain-icon.svg",
    66: "assets/images/drizzle-icon.svg",
    67: "assets/images/rain-icon.svg",
    71: "assets/images/icy-icon.svg",
    73: "assets/images/snow-icon.svg",
    75: "assets/images/blizzard-icon.svg",
    77: "assets/images/icy-icon.svg",
    80: "assets/images/rain-icon.svg",
    81: "assets/images/rain-icon.svg",
    82: "assets/images/rainstorm-icon.svg",
    85: "assets/images/snow-icon.svg",
    86: "assets/images/blizzard-icon.svg",
    95: "assets/images/stormy-icon.svg",
    96: "assets/images/hail-icon.svg",
    99: "assets/images/severe-weather-icon.svg",
  };

  // Centralized section toggle
  function showSection(sectionId) {
    carouselScreen.classList.add('hidden');
    forecastScreen.classList.add('hidden');
    document.getElementById(sectionId).classList.remove('hidden');
  }

  searchBtn.addEventListener('click', async () => {
    const city = cityInput.value.trim();
    if (!cities[city]) {
      alert("City not found in list");
      return;
    }

    const { lat, lon } = cities[city];
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&timezone=auto`;


    try {
  const response = await fetch(url);
  const data = await response.json();
  console.log("API response:", data);

  forecastFrame.innerHTML = "";

  // Loop through daily forecast
  
  data.daily.time.forEach((day, i) => {
  const weekday = new Date(day).toLocaleDateString('en-US', { weekday: 'long' });
  const max = data.daily.temperature_2m_max[i];
  const min = data.daily.temperature_2m_min[i];
  const code = data.daily.weathercode[i];
  const iconFile = iconMap[code] || "default-icon.svg";
  const label = weatherLabelMap[code] || `Code ${code}`;

  const box = document.createElement("div");
  box.className = "forecast-day";
  box.innerHTML = `
    <p class="city-name">${city} – ${weekday}</p>
    <p class="forecast">${label}</p>
    <img src="${iconFile}" width="100px" height="100px" alt="${label}">
    <p class="high-temp" data-value="${max}">High: ${max}°C</p>
    <p class="low-temp" data-value="${min}">Low: ${min}°C</p>
  `;

    forecastFrame.appendChild(box);
  });

  showSection('forecast-screen');

} catch (err) {
  console.error("Error fetching weather:", err);
}

  });
  
 // Tablet Menu

  const tabletMenuBtn = document.getElementById('tablet-menu');
  const menuOverlay = document.getElementById('menu-overlay');

  tabletMenuBtn.addEventListener('click', () => {
  menuOverlay.classList.toggle('active');
  if (menuOverlay.classList.contains('active')) {
    tabletMenuBtn.src = "desktop-hamburger-menu-closed.svg";
  } else {
    tabletMenuBtn.src = "desktop-hamburger-menu-open.svg";
  }
});

// Tablet Search Cities Mechanism

let searchCity = "Search City:";
const summaryText = document.getElementById("tablet-summary-text");
  summaryText.textContent = searchCity;
    
  document.querySelectorAll(".tablet-search-city").forEach(item => {
    item.addEventListener("click", () => {
      searchCity = item.getAttribute("data-city");
      summaryText.textContent = "Search City: " + searchCity;
      item.closest(".city-list").scrollTop = 0;
      console.log("Selected city is now:", searchCity);
    });
  });

const viewBtn = document.getElementById("view-btn");

viewBtn.addEventListener("click", async () => {
  if (!cities[searchCity]) {
    alert("City not found in list");
    return;
  }

  const { lat, lon } = cities[searchCity];
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&timezone=auto`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Tablet API response:", data);

    forecastFrame.innerHTML = "";

    data.daily.time.forEach((day, i) => {
      const weekday = new Date(day).toLocaleDateString('en-US', { weekday: 'long' });
      const max = data.daily.temperature_2m_max[i];
      const min = data.daily.temperature_2m_min[i];
      const code = data.daily.weathercode[i];
      const iconFile = iconMap[code] || "default-icon.svg";
      const label = weatherLabelMap[code] || `Code ${code}`;

      const box = document.createElement("div");
      box.className = "forecast-day";
      box.innerHTML = `
        <p class="city-name">${searchCity} – ${weekday}</p>
        <p class="forecast">${label}</p>
        <img src="${iconFile}" width="100px" height="100px" alt="${label}">
        <p class="high-temp" data-value="${max}">High: ${max}°C</p>
        <p class="low-temp" data-value="${min}">Low: ${min}°C</p>
      `;

      forecastFrame.appendChild(box);
    });

    showSection('forecast-screen');
  } catch (err) {
    console.error("Error fetching weather:", err);
  }
});

//Mobile Menu

 const mobileMenuBtn = document.getElementById('mobile-menu');   
const menuDrop = document.getElementById('menu-drop');     

mobileMenuBtn.addEventListener('click', () => {
  console.log("Mobile menu clicked!");
  menuDrop.classList.toggle('active');
  if (menuDrop.classList.contains('active')) {
    mobileMenuBtn.src = "mobile-hamburger-menu-clicked.svg";
  } else {
    mobileMenuBtn.src = "mobile-hamburger-menu-open.svg";
  }
});

// Mobile search filter
const mobileSearchInput = document.getElementById('mobile-bar');   
const mobileList = document.querySelector('.mobile-drop');         

mobileSearchInput.addEventListener('input', () => {
  const q = mobileSearchInput.value.toLowerCase();
  const items = mobileList.querySelectorAll('li');

  items.forEach(item => {
    // skip the first <li> that contains the label/input/button
    if (item.querySelector('input')) return;

    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(q) ? 'block' : 'none';
  });
});

// Mobile Version Search Mechanism
// Mobile city selection variable
let mobileCity = "Search City:"; // default string

// When a user clicks a city <li>, update the variable
document.querySelectorAll(".mobile-search-city").forEach(item => {
  item.addEventListener("click", () => {
    mobileCity = item.getAttribute("data-city");
    console.log("Mobile city selected:", mobileCity);
    document.querySelectorAll(".mobile-search-city").forEach(li => {
      li.classList.remove("active-city");
    })
    item.classList.add("active-city");
    item.closest(".mobile-drop").scrollTop = 0;
  });
});

// Mobile Go button triggers the API call
const mobileGoBtn = document.getElementById("go-btn");

mobileGoBtn.addEventListener("click", async () => {
  if (!cities[mobileCity]) {
    alert("Please select a city first");
    return;
  }

  const { lat, lon } = cities[mobileCity];
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&timezone=auto`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Mobile API response:", data);

    forecastFrame.innerHTML = "";

    data.daily.time.forEach((day, i) => {
      const weekday = new Date(day).toLocaleDateString('en-US', { weekday: 'long' });
      const max = data.daily.temperature_2m_max[i];
      const min = data.daily.temperature_2m_min[i];
      const code = data.daily.weathercode[i];
      const iconFile = iconMap[code] || "default-icon.svg";
      const label = weatherLabelMap[code] || `Code ${code}`;

      const box = document.createElement("div");
      box.className = "forecast-day";
      box.innerHTML = `
        <p class="city-name">${mobileCity} – ${weekday}</p>
        <p class="forecast">${label}</p>
        <img src="${iconFile}" width="100px" height="100px" alt="${label}">
        <p class="high-temp" data-value="${max}">High: ${max}°C</p>
        <p class="low-temp" data-value="${min}">Low: ${min}°C</p>
      `;
      forecastFrame.appendChild(box);
    });

    menuDrop.classList.remove('active');


    showSection('forecast-screen');
  } catch (err) {
    console.error("Error fetching weather:", err);
  }
});


// Track current unit state
let currentUnit = "C";

// Central conversion function
function convertTemperatures(targetUnit) {
    const temps = document.querySelectorAll(".high-temp, .low-temp");

    temps.forEach(tempEl => {
        // Always read the original Celsius value from data-value
        const celsiusValue = parseFloat(tempEl.dataset.value);
        let displayValue = celsiusValue;

        if (targetUnit === "F") {
            displayValue = (celsiusValue * 9/5) + 32;
        }

        // Update text content with the correct unit
        if (tempEl.classList.contains("high-temp")) {
            tempEl.textContent = `High: ${displayValue.toFixed(1)}°${targetUnit}`;
        } else {
            tempEl.textContent = `Low: ${displayValue.toFixed(1)}°${targetUnit}`;
        }
    });

    // Sync mobile radio inputs
    document.getElementById("celsius").checked = (targetUnit === "C");
    document.getElementById("fahrenheit").checked = (targetUnit === "F");

    // Update state
    currentUnit = targetUnit;
}

// Desktop trigger
document.getElementById("convert-temp").addEventListener("click", () => {
    const newUnit = currentUnit === "C" ? "F" : "C";
    convertTemperatures(newUnit);
});

// Tablet trigger
document.getElementById("convert-link").addEventListener("click", () => {
    const newUnit = currentUnit === "C" ? "F" : "C";
    convertTemperatures(newUnit);
});

// Mobile trigger
document.querySelectorAll('input[name="unit"]').forEach(radio => {
    radio.addEventListener("change", (e) => {
        convertTemperatures(e.target.id === "celsius" ? "C" : "F");
    });
});



  const slides = document.querySelectorAll('.slide');
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 4000);
});




