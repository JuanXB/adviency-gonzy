const list = document.querySelector("ul");
const input = document.querySelector("input");
const empty = document.querySelector(".empty");

function add() {
  const gift = input.value;

  if (gift !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");

    p.textContent = "- " + gift;
    li.id = gift;
    li.appendChild(p);
    li.appendChild(erase());
    list.appendChild(li);

    input.value = "";
  }

  console.log();
  if (list.childElementCount !== 0) {
    empty.style.display = "none";
  }
}

function erase() {
  const btn = document.createElement("button");

  btn.textContent = "X";
  btn.className = "btn-delete";

  btn.addEventListener("click", (e) => {
    var element = e.target.parentElement;
    list.removeChild(element);

    if (list.childElementCount == 0) {
      empty.style.display = "block";
    }
  });

  return btn;
}

function eraseAll() {
  if (! list.length) {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }

  empty.style.display = "block";
}
