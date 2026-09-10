import "./service-page.js";
import { enhanceCustomSelects, focusFormControl, setCustomSelectValue, syncCustomSelect } from "./custom-select.js";

// Client-side preview only: there is no endpoint, persistence or lead analytics yet.
const form = document.querySelector("[data-partner-form]");

if (form) {
  const checkButton = form.querySelector("[data-check-partner]");
  const status = form.querySelector("[data-partner-status]");
  const errorSummary = form.querySelector("#partner-errors");
  const errorList = errorSummary.querySelector("ul");
  const fields = [...form.querySelectorAll("[required]")];
  const partnerType = form.querySelector("#partner-type");
  const messages = {
    "partner-type": "Choose a partner type.",
    "partner-name": "Enter your full name.",
    "partner-company": "Enter your company name.",
    "partner-email": "Enter a valid business email address.",
    "partner-area": "Enter the countries, routes or location you cover.",
    "partner-capacity": "Describe the capacity and capabilities you can provide.",
  };
  enhanceCustomSelects(form);

  const validate = (field) => {
    const invalid = !field.value.trim() || !field.validity.valid;
    const error = document.getElementById(`${field.id}-error`);
    field.toggleAttribute("data-invalid", invalid);
    if (invalid) field.setAttribute("aria-invalid", "true");
    else field.removeAttribute("aria-invalid");
    syncCustomSelect(field);
    if (error) {
      error.textContent = invalid ? messages[field.id] : "";
      error.hidden = !invalid;
    }
    return !invalid;
  };

  const refreshSummary = () => {
    errorList.replaceChildren();
    fields.filter((field) => field.hasAttribute("data-invalid")).forEach((field) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = `#${field.id}`;
      link.textContent = messages[field.id];
      link.addEventListener("click", (event) => {
        event.preventDefault();
        focusFormControl(field);
      });
      item.append(link);
      errorList.append(item);
    });
    errorSummary.hidden = !errorList.children.length;
  };

  document.querySelectorAll("[data-partner-choice]").forEach((link) => {
    link.addEventListener("click", () => {
      setCustomSelectValue(partnerType, link.dataset.partnerChoice || "");
      partnerType.removeAttribute("aria-invalid");
      partnerType.removeAttribute("data-invalid");
      const error = document.getElementById("partner-type-error");
      if (error) error.hidden = true;
      refreshSummary();
    });
  });

  form.addEventListener("submit", (event) => event.preventDefault());
  form.addEventListener("input", (event) => {
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
    status.textContent = "Your partner enquiry details are complete. Nothing has been sent — this preview is not connected to a partner-enquiry recipient.";
  });
}
