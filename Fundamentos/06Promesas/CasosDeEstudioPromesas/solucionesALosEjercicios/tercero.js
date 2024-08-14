function fetchCities() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cities = [
                { name: "Madrid", population: 3200000, country: "España" },
                { name: "Barcelona", population: 1600000, country: "España" },
                { name: "Paris", population: 2100000, country: "Francia" },
                { name: "Londres", population: 8900000, country: "Reino Unido" }
            ];
            resolve(cities);
        }, 1500);
    });
}

async function getSpanishCities() {
    try {
        const cities = await fetchCities();
        const spanishCities = cities.filter(city => city.country === "España");
        const totalPopulation = spanishCities.reduce((acc, city) => acc + city.population, 0);
        console.log("Ciudades en España:", spanishCities);
        console.log("Población total en España:", totalPopulation);
    } catch (error) {
        console.error("Error al obtener ciudades:", error);
    }
}

getSpanishCities();
