function url(event_id) {
  return `https://registration.pep-dortmund.org/events/${event_id}/`
}

async function getEvent(event_id) {
  let resp = await fetch(url(event_id));
  let data = await resp.json();
  return data.event;
}

class EventRegistration extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let root = this.attachShadow({ mode: "open" });
    let event_id = this.getAttribute("event");

    getEvent(event_id).then(event => {
      let text;
  
      if (!event.registration_open) {
        return;
      }

      if (event.free_places == 0) {
        text = "Ausgebucht, auf der Warteliste eintragen."
      } else if (event.free_places == 1) {
        text = "Noch ein freier Platz, jetzt anmelden!"
      } else {
        text = `Noch ${event.free_places} Plätze, jetzt anmelden!`
      }

      const wrapper = document.createElement("p");
      let link = document.createElement("a");
      link.href = `https://registration.pep-dortmund.org/events/${event_id}/registration/`
      link.innerHTML = text;
      wrapper.appendChild(link);
      root.append(wrapper)
    });
  }
}

customElements.define("event-registration", EventRegistration);
