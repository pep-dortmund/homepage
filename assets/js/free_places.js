let elements = document.getElementsByClassName("FreePlaces");
for (let el of elements) {
	let event = el.getAttribute("event");
	let units = el.getAttribute("units") ?? "freie Plätze";
	let unit = el.getAttribute("unit") ?? "freier Platz";
	fetch("https://run.mocky.io/v3/118a49d2-2aaa-40b6-85e7-a476dcab5829")
		.then((resp) => resp.json())
		.then((data) => {
			const fp = data.event.free_places;
			el.innerHTML = el.innerHTML.replace("free_places", fp + " " + (fp > 1 ? units : unit));
		});
}
