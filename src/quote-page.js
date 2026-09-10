import { enhanceCustomSelects, focusFormControl, syncCustomSelect } from "./custom-select.js";

// Preview only: values stay in the current DOM. No storage, requests or RFQ analytics.
export const initQuotePage = (scope = document) => {
const form = scope.querySelector(".quote-form");
if (!form) return () => {};
const panels = [...form.querySelectorAll("[data-quote-panel]")];
const progress = scope.querySelector(".quote-progress");
const stepButtons = [...progress.querySelectorAll("button")];
const completedSteps = new Set();
const next = form.querySelector("[data-quote-next]");
const back = form.querySelector("[data-quote-back]");
const responseCommitment = form.querySelector("[data-response-commitment]");
const status = form.querySelector("[data-quote-status]");
const errors = form.querySelector("#quote-errors");
const errorList = errors.querySelector("ul");
const radios = [...form.querySelectorAll('input[name="service"]')];
const serviceError = form.querySelector("#quote-service-error");
const review = form.querySelector("[data-quote-review]");
const edit = form.querySelector("[data-edit-logistics]");
const upload = form.querySelector("#quote-files");
const uploadError = form.querySelector("#quote-files-error");
const uploadSelection = form.querySelector("#quote-files-selection");
const uploadList = form.querySelector("[data-upload-list]");
const uploadClear = form.querySelector("[data-upload-clear]");
const allowedFileExtensions = new Set(["pdf", "doc", "docx", "xls", "xlsx", "csv", "jpg", "jpeg", "png"]);
const maxFileCount = 5;
const maxFileSize = 10 * 1024 * 1024;
const maxTotalFileSize = 25 * 1024 * 1024;
const tips = [
  "Start with the service. You do not need to know the final transport setup before describing your requirement.",
  "Explain the cargo and the complete route. Include recurring volumes, delivery constraints or specialist needs where relevant.",
  "Review your brief, add a business contact and attach any useful shipment documents. Attachments are optional.",
];
const labels = {
  "quote-origin": "Enter the origin, or state that it is not decided.",
  "quote-destination": "Enter the destination, or state that it is not decided.",
  "quote-cargo": "Describe the cargo or shipment.",
  "quote-frequency": "Choose the shipment frequency, including ‘Not sure yet’ if needed.",
  "quote-name": "Enter your full name.",
  "quote-company": "Enter your company name.",
  "quote-email": "Enter a valid business email address.",
};
enhanceCustomSelects(form);
let current = 0;
let visited = 0;
const value = id => scope.querySelector(`#${CSS.escape(id)}`).value.trim();
const service = () => radios.find(radio => radio.checked)?.value;
const files = () => [...upload.files];
const formatFileSize = bytes => bytes < 1024 * 1024
  ? `${Math.max(1, Math.round(bytes / 1024))} KB`
  : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;

function renderFileSelection() {
  const selected = files();
  uploadList.replaceChildren();
  selected.forEach(file => {
    const item = document.createElement("li");
    const name = document.createElement("span");
    const size = document.createElement("span");
    name.textContent = file.name;
    size.textContent = formatFileSize(file.size);
    item.append(name, size);
    uploadList.append(item);
  });
  uploadSelection.hidden = selected.length === 0;
}

function validateFiles() {
  const selected = files();
  const totalSize = selected.reduce((total, file) => total + file.size, 0);
  const hasUnsupportedType = selected.some(file => {
    const extension = file.name.includes(".") ? file.name.split(".").pop().toLowerCase() : "";
    return !allowedFileExtensions.has(extension);
  });
  let message = "";
  if (selected.length > maxFileCount) message = "Attach no more than 5 files.";
  else if (hasUnsupportedType) message = "Use PDF, DOC, DOCX, XLS, XLSX, CSV, JPG or PNG files.";
  else if (selected.some(file => file.size > maxFileSize)) message = "Each file must be 10 MB or smaller.";
  else if (totalSize > maxTotalFileSize) message = "The total attachment size must be 25 MB or smaller.";

  uploadError.hidden = !message;
  uploadError.textContent = message;
  if (message) upload.setAttribute("aria-invalid", "true");
  else upload.removeAttribute("aria-invalid");
  return !message;
}

function renderReview() {
    const frequency = scope.querySelector("#quote-frequency");
  const entries = [
    ["Service", service() || "Not selected"],
    ["Origin", value("quote-origin")], ["Destination", value("quote-destination")],
    ["Cargo", value("quote-cargo")], ["Frequency", frequency.selectedOptions[0].textContent],
    ["Volume", value("quote-volume") || "Not specified"],
    ["Timing", value("quote-timing") || "Not specified"],
    ["Needs", [...form.querySelectorAll("[data-quote-extra]:checked")].map(input => input.value).join(", ") || "None specified"],
    ["Attachments", files().map(file => file.name).join("\n") || "None selected"],
  ];
  review.replaceChildren();
  entries.forEach(([label, text]) => {
    const row = document.createElement("div");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = label;
    dd.textContent = text;
    row.append(dt, dd);
    review.append(row);
  });
}

function focusElement(element) {
  focusFormControl(element);
}

function refreshErrors() {
  errorList.replaceChildren();
  const invalid = current === 0
    ? (serviceError.hidden ? [] : [{ element: radios[0], text: serviceError.textContent }])
    : [...panels[current].querySelectorAll('[aria-invalid="true"]:not(.custom-select__trigger)')].map(element => ({
      element,
      text: scope.querySelector(`#${CSS.escape(element.id)}-error`)?.textContent || labels[element.id],
    }));
  invalid.forEach(({ element, text }) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = `#${element.id}`;
    link.textContent = text;
    link.addEventListener("click", event => { event.preventDefault(); focusElement(element); });
    item.append(link);
    errorList.append(item);
  });
  errors.hidden = invalid.length === 0;
}

function validateField(field) {
  const invalid = !field.value.trim() || !field.validity.valid;
  const error = scope.querySelector(`#${CSS.escape(field.id)}-error`);
  error.hidden = !invalid;
  error.textContent = invalid ? labels[field.id] : "";
  if (invalid) field.setAttribute("aria-invalid", "true");
  else field.removeAttribute("aria-invalid");
  syncCustomSelect(field);
  return !invalid;
}

function validateStep(index) {
  if (index === 0) {
    const invalid = !service();
    serviceError.hidden = !invalid;
    radios.forEach(radio => {
      if (invalid) { radio.setAttribute("aria-invalid", "true"); radio.setAttribute("aria-describedby", "quote-service-error"); }
      else { radio.removeAttribute("aria-invalid"); radio.removeAttribute("aria-describedby"); }
    });
    return !invalid;
  }
  const fieldsValid = [...panels[index].querySelectorAll("[required]")].map(validateField).every(Boolean);
  const filesValid = index !== 2 || validateFiles();
  return fieldsValid && filesValid;
}

function showStep(index, focus = true) {
  current = index;
  visited = Math.max(visited, current);
  const progressValue = completedSteps.has(1) ? 100 : completedSteps.has(0) ? 50 : 0;
  progress.style.setProperty("--quote-progress", `${progressValue}%`);
  panels.forEach((panel, i) => { panel.hidden = i !== current; });
  stepButtons.forEach((button, i) => {
    button.disabled = i > visited;
    if (i === current) button.setAttribute("aria-current", "step");
    else button.removeAttribute("aria-current");
    const isComplete = completedSteps.has(i);
    button.toggleAttribute("data-complete", isComplete);
    button.querySelector(".quote-progress__marker").textContent = isComplete ? "✓" : String(i + 1).padStart(2, "0");
    button.querySelector("[data-step-status]").textContent = isComplete ? ", completed" : "";
  });
  back.hidden = current === 0;
  responseCommitment.hidden = current !== 2;
  next.textContent = ["Continue to Your Logistics", "Continue to About You", "Submit Quote Request"][current];
  if (current === 2) {
    next.setAttribute("aria-describedby", "quote-privacy quote-response-time");
  } else {
    next.removeAttribute("aria-describedby");
  }
  scope.querySelector("[data-quote-tip]").textContent = tips[current];
  status.textContent = "";
  if (current === 2) renderReview();
  refreshErrors();
  if (focus) {
    const heading = panels[current].querySelector("[data-step-heading]");
    heading.focus({ preventScroll: true });
    heading.scrollIntoView({ block: "start", behavior: "instant" });
  }
}

next.addEventListener("click", () => {
  // Final check revalidates earlier steps after edits through the progress navigation.
  const toCheck = current === 2 ? [0, 1, 2] : [current];
  const firstInvalid = toCheck.find(index => !validateStep(index));
  if (firstInvalid !== undefined) {
    showStep(firstInvalid, false);
    refreshErrors();
    focusElement(errors);
    return;
  }
  completedSteps.add(current);
  if (current < 2) showStep(current + 1);
  else {
    showStep(current, false);
    status.textContent = "Quote details checked. Nothing has been sent — this preview is not connected to a recipient. No price or booking has been confirmed.";
  }
});
back.addEventListener("click", () => showStep(Math.max(0, current - 1)));
stepButtons.forEach((button, index) => button.addEventListener("click", () => { if (index <= visited) showStep(index); }));
edit.addEventListener("click", () => showStep(1));
form.addEventListener("submit", event => event.preventDefault());
form.addEventListener("input", event => {
  status.textContent = "";
  if (completedSteps.delete(current)) showStep(current, false);
  if (radios.includes(event.target)) validateStep(0);
  else if (event.target === upload) return;
  else if (event.target.hasAttribute("aria-invalid")) validateField(event.target);
  refreshErrors();
});
upload.addEventListener("change", () => {
  status.textContent = "";
  renderFileSelection();
  validateFiles();
  if (current === 2) renderReview();
  refreshErrors();
});
uploadClear.addEventListener("click", () => {
  upload.value = "";
  renderFileSelection();
  validateFiles();
  if (current === 2) renderReview();
  refreshErrors();
  upload.focus();
});
next.disabled = false;
edit.disabled = false;
progress.hidden = false;
renderFileSelection();
showStep(0, false);
return () => {};
};
