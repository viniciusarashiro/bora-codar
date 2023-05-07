const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

function render() {
  let output = "";

  const thisMonth = months[new Date().getMonth()];
  console.log(thisMonth);

  for (let month of months) {
    const active = thisMonth == month ? "active" : "";
    output += `<div class="${active}">${month}</div>`;
  }

  return output;
}

const app = document.querySelector("#app");
app.querySelector("main").innerHTML = render();
app.querySelector("header span").innerHTML = new Date().getFullYear();
