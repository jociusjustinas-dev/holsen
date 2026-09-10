import "./service-page.js";
import { enhanceCustomSelects, focusFormControl, syncCustomSelect } from "./custom-select.js";

// Deliberately client-only: no endpoint, payload, persistence or enquiry analytics.
const form = document.querySelector(".contact-form");
const checkButton = form.querySelector("[data-check-enquiry]");
const status = form.querySelector("[data-contact-status]");
const errorSummary = form.querySelector("#contact-errors");
const errorList = errorSummary.querySelector("ul");
const fields = [...form.querySelectorAll("[required]")];
const topic = form.querySelector("#contact-topic");
const hint = form.querySelector("#topic-hint");
const hints = {
  "": "Choose an enquiry type so we can show the most useful guidance.",
  logistics: "Include the cargo, route, timing and any special requirements in your message.",
  partner: "Include your available capacity, operating area and the services you can provide.",
  general: "Tell us what you would like to discuss and add any useful context.",
};
const labels = { "contact-topic": "Choose an enquiry type.", "contact-name": "Enter your full name.", "contact-company": "Enter your company name.", "contact-email": "Enter a valid business email address.", "contact-message": "Enter a message about your enquiry." };
const updateTopic = () => { hint.textContent = hints[topic.value] || hints.general; };
const requestedTopic = new URLSearchParams(location.search).get("enquiry");
if (Object.hasOwn(hints, requestedTopic)) topic.value = requestedTopic;
enhanceCustomSelects(form);
updateTopic();
topic.addEventListener("change", updateTopic);

function validate(field) {
  const invalid = !field.value.trim() || !field.validity.valid;
  const error = document.getElementById(`${field.id}-error`);
  field.toggleAttribute("data-invalid", invalid);
  if (invalid) field.setAttribute("aria-invalid", "true");
  else field.removeAttribute("aria-invalid");
  syncCustomSelect(field);
  error.textContent = invalid ? labels[field.id] : "";
  error.hidden = !invalid;
  return !invalid;
}

function refreshSummary() {
  errorList.replaceChildren();
  fields.filter(field => field.hasAttribute("data-invalid")).forEach(field => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = `#${field.id}`;
    link.textContent = labels[field.id];
    link.addEventListener("click", event => {
      event.preventDefault();
      focusFormControl(field);
    });
    item.append(link);
    errorList.append(item);
  });
  errorSummary.hidden = !errorList.children.length;
}

form.addEventListener("submit", event => event.preventDefault());
form.addEventListener("input", event => {
  status.textContent = "";
  if (fields.includes(event.target) && event.target.hasAttribute("data-invalid")) {
    validate(event.target);
    refreshSummary();
  }
});
checkButton.disabled = false;
checkButton.addEventListener("click", () => {
  fields.forEach(validate);
  refreshSummary();
  if (!errorSummary.hidden) {
    status.textContent = "";
    errorSummary.focus({ preventScroll: true });
    errorSummary.scrollIntoView({ block: "center", behavior: "instant" });
    return;
  }
  status.textContent = "Your enquiry details are complete. Nothing has been sent — this preview is not connected to an enquiry recipient.";
});
