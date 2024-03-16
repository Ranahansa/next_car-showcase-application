export async function fetchCars() {
    const headers = {
        "X-RapidAPI-Key": "53045f9eacmsh3ee81d243ebf607p14c549jsnb3b155498616",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };

    const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", {
        headers: headers,
    });

    const result = await response.json();
    return result;
}