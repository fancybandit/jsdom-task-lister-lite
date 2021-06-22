document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", function(e) {
    const inputField = document.getElementById("new-task-description");
    userInput = inputField.value;
    li = document.createElement("li");
    li.textContent = userInput;
    
    list = document.querySelector("div#list ul#tasks");
    list.appendChild(li);
    form.reset();
    e.preventDefault();
  });
});