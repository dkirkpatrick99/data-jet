
export const getValueFromSelector = (selector: string) => {
  if(selector.length <= 1) return "Please choose a selector by clicking on an element."
  return document.querySelector(selector)?.textContent || "Value not found. Choose a different CSS selector";
};