let elements = document.getElementsByClassName("FreePlaces");
for (let el of elements) {
	let event = el.getAttribute("event");
	let units = el.getAttribute("units") ?? "freie Plätze";
	let unit = el.getAttribute("unit") ?? "freier Platz";
	fetch("https://registration.pep-dortmund.org/events/" + event + "/")
		.then((resp) => resp.json())
		.then((data) => {
			const fp = data.event.free_places;
			el.innerHTML = el.innerHTML.replace("free_places", fp + " " + (fp > 1 ? units : unit));
		})
		.catch(() => el.innerHTML = "");
}
