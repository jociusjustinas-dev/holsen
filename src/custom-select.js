const instances = new WeakMap();
let instanceCount = 0;

const nextEnabledOption = (options, start, direction) => {
  let index = start;
  for (let checked = 0; checked < options.length; checked += 1) {
    index = (index + direction + options.length) % options.length;
    if (!options[index].disabled) return index;
  }
  return start;
};

const createCustomSelect = (select) => {
  if (!(select instanceof HTMLSelectElement) || select.multiple || instances.has(select)) return;

  instanceCount += 1;
  const originalLabel = select.id
    ? document.querySelector(`label[for="${CSS.escape(select.id)}"]`)
    : null;
  const wrapper = document.createElement("div");
  const trigger = document.createElement("button");
  const value = document.createElement("span");
  const icon = document.createElement("i");
  const listbox = document.createElement("div");
  const optionButtons = [...select.options].map((option, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "custom-select__option";
    button.id = `custom-select-${instanceCount}-option-${optionIndex}`;
    button.setAttribute("role", "option");
    button.setAttribute("aria-selected", option.selected ? "true" : "false");
    button.dataset.value = option.value;
    button.disabled = option.disabled;
    button.textContent = option.textContent;
    listbox.append(button);
    return button;
  });

  const triggerId = `custom-select-${instanceCount}-trigger`;
  const valueId = `custom-select-${instanceCount}-value`;
  const listboxId = `custom-select-${instanceCount}-listbox`;
  let typeahead = "";
  let typeaheadTimer = 0;

  wrapper.className = "custom-select";
  trigger.type = "button";
  trigger.id = triggerId;
  trigger.className = "custom-select__trigger";
  trigger.setAttribute("aria-haspopup", "listbox");
  trigger.setAttribute("aria-expanded", "false");
  trigger.setAttribute("aria-controls", listboxId);
  if (select.getAttribute("aria-describedby")) {
    trigger.setAttribute("aria-describedby", select.getAttribute("aria-describedby"));
  }
  value.id = valueId;
  value.className = "custom-select__value";
  icon.className = "custom-select__icon";
  icon.setAttribute("aria-hidden", "true");
  trigger.append(value, icon);

  listbox.id = listboxId;
  listbox.className = "custom-select__listbox";
  listbox.setAttribute("role", "listbox");
  listbox.setAttribute("aria-labelledby", triggerId);
  listbox.hidden = true;
  wrapper.append(trigger, listbox);
  select.after(wrapper);

  if (originalLabel) {
    if (!originalLabel.id) originalLabel.id = `custom-select-${instanceCount}-label`;
    originalLabel.htmlFor = triggerId;
    trigger.setAttribute("aria-labelledby", `${originalLabel.id} ${valueId}`);
  } else {
    trigger.setAttribute("aria-labelledby", valueId);
  }

  select.classList.add("custom-select__native");
  select.hidden = true;
  select.tabIndex = -1;
  select.setAttribute("aria-hidden", "true");

  const selectedIndex = () => Math.max(0, select.selectedIndex);
  const focusOption = (index) => optionButtons[index]?.focus({ preventScroll: true });
  const close = ({ restoreFocus = false } = {}) => {
    listbox.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
    wrapper.removeAttribute("data-open");
    if (restoreFocus) trigger.focus({ preventScroll: true });
  };
  const open = (focusIndex = selectedIndex()) => {
    document.querySelectorAll('.custom-select[data-open="true"]').forEach((openSelect) => {
      if (openSelect !== wrapper) openSelect.querySelector(".custom-select__trigger")?.click();
    });
    listbox.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
    wrapper.dataset.open = "true";
    window.requestAnimationFrame(() => focusOption(focusIndex));
  };
  const sync = () => {
    const current = select.selectedOptions[0] || select.options[0];
    value.textContent = current?.textContent || "";
    wrapper.dataset.hasValue = current?.value ? "true" : "false";
    optionButtons.forEach((button, index) => {
      button.setAttribute("aria-selected", index === select.selectedIndex ? "true" : "false");
    });
    trigger.disabled = select.disabled;
    if (select.getAttribute("aria-invalid") === "true") trigger.setAttribute("aria-invalid", "true");
    else trigger.removeAttribute("aria-invalid");
  };
  const choose = (index) => {
    if (!select.options[index] || select.options[index].disabled) return;
    select.selectedIndex = index;
    sync();
    close({ restoreFocus: true });
    select.dispatchEvent(new Event("input", { bubbles: true }));
    select.dispatchEvent(new Event("change", { bubbles: true }));
  };

  trigger.addEventListener("click", () => {
    if (listbox.hidden) open();
    else close();
  });
  trigger.addEventListener("keydown", (event) => {
    if (!["ArrowDown", "ArrowUp", "Home", "End", "Enter", " "].includes(event.key)) return;
    event.preventDefault();
    let index = selectedIndex();
    if (event.key === "ArrowDown") index = nextEnabledOption(optionButtons, index - 1, 1);
    if (event.key === "ArrowUp") index = nextEnabledOption(optionButtons, index + 1, -1);
    if (event.key === "Home") index = nextEnabledOption(optionButtons, -1, 1);
    if (event.key === "End") index = nextEnabledOption(optionButtons, 0, -1);
    open(index);
  });

  optionButtons.forEach((button, index) => {
    button.addEventListener("click", () => choose(index));
    button.addEventListener("keydown", (event) => {
      const currentIndex = optionButtons.indexOf(event.currentTarget);
      if (event.key === "Escape") {
        event.preventDefault();
        close({ restoreFocus: true });
        return;
      }
      if (event.key === "Tab") {
        close();
        return;
      }
      if (["Enter", " "].includes(event.key)) {
        event.preventDefault();
        choose(currentIndex);
        return;
      }
      if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
        event.preventDefault();
        if (event.key === "Home") focusOption(nextEnabledOption(optionButtons, -1, 1));
        else if (event.key === "End") focusOption(nextEnabledOption(optionButtons, 0, -1));
        else focusOption(nextEnabledOption(optionButtons, currentIndex, event.key === "ArrowDown" ? 1 : -1));
        return;
      }
      if (event.key.length === 1 && !event.altKey && !event.ctrlKey && !event.metaKey) {
        window.clearTimeout(typeaheadTimer);
        typeahead += event.key.toLocaleLowerCase();
        const match = optionButtons.findIndex((option) => !option.disabled && option.textContent.trim().toLocaleLowerCase().startsWith(typeahead));
        if (match >= 0) focusOption(match);
        typeaheadTimer = window.setTimeout(() => { typeahead = ""; }, 600);
      }
    });
  });

  document.addEventListener("pointerdown", (event) => {
    if (!wrapper.contains(event.target)) close();
  });
  select.addEventListener("change", sync);
  new MutationObserver(sync).observe(select, { attributes: true, attributeFilter: ["aria-invalid", "disabled"] });

  instances.set(select, { trigger, sync });
  sync();
};

export const enhanceCustomSelects = (root = document) => {
  root.querySelectorAll("select").forEach(createCustomSelect);
};

export const syncCustomSelect = (select) => {
  instances.get(select)?.sync();
};

export const setCustomSelectValue = (select, value) => {
  if (!(select instanceof HTMLSelectElement)) return;
  select.value = value;
  syncCustomSelect(select);
  select.dispatchEvent(new Event("change", { bubbles: true }));
};

export const focusFormControl = (control) => {
  const target = control instanceof HTMLSelectElement
    ? instances.get(control)?.trigger || control
    : control;
  target.focus({ preventScroll: true });
  target.scrollIntoView({ block: "center", behavior: "instant" });
};
