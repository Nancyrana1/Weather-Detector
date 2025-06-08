 async function getWeather() {
        const inputBox = document.querySelector("#input-box");
        const btn = document.querySelector("#btn");
        const resultBox = document.querySelector("#result-box");
        const city = inputBox.value;

        if (city != "") {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=21805bff7224936fa25d6cec016a0a4b&units=metric`
          );
          const data = await response.json();
          console.log(data.main.temp);
          if (data.cod == "200") {
            resultBox.innerHTML = `
                    <h3>${data.name}</h3>
                    <h1>${data.main.temp}</h3>
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"
                    height="100px" width="100px">
                    <h3>${data.weather[0].description}</h3>
                    `;
          }
        } else if (data.cod == "404") {
          resultBox.innerHTML = `<h2>City note found</h2>`;
        } else {
          resultBox.innerHTML = `<h2>Internal Server error</h2>`;
        }
      }