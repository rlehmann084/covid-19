

let btn = document.querySelector("#loadbtn"),
	url = "https://api.covid19api.com/dayone/country/switzerland";

btn.addEventListener('click', function(e) {
    getData();
});

function getData() {

	fetch(url)
		.then(response => response.json())
		.then(function(data)  {

			let confirmed = [];
			let deaths = [];
			let recovered = [];
			let active = [];
			let Date = [];


			for(let i = 0; i < data.length; i++) {

				// read date
				Date[i] = [data[i].Date];

				// read confirmed cases
				confirmed[i] = [data[i].Confirmed];

				// read death cases
				deaths[i] = [data[i].Deaths];

				// read recovered cases
				recovered[i] = [data[i].Recovered];

				// read active cases
				active[i] = [data[i].Active];

			}

			console.log(data.length);

		})
}



