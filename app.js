const slots = ["first", "second", "third"];

const users = [
  { id: 1, name: "moe", slot: "first" },
  { id: 2, name: "larry", slot: "second" },
  { id: 3, name: "curly", slot: "third" },
  { id: 4, name: "lucy", slot: "third" },
];

const app = document.querySelector("#root");

const createHeader = () => {
  const header = document.createElement("h1");
  header.innerText = "ACME First, Second, and Third";
  header.classList.add("header");

  return header;
};

const createDivs = () => {
  const main = document.createElement("div");
  main.classList.add("main");

  const first = document.createElement("div");
  first.classList.add("first");

  const second = document.createElement("div");
  second.classList.add("second");

  const third = document.createElement("div");
  third.classList.add("third");

  const firstRight = document.createElement("button");
  firstRight.innerText = ">";
  firstRight.addEventListener("click", (ev) => {
    ev.preventDefault();
    users.map((user) => {
      if (user.slot === "first" && user.selected) {
        user.slot = "second";
        user.selected = false;
      }
      renderUsers();
    });
  });

  const secondRight = document.createElement("button");
  secondRight.innerText = ">";
  secondRight.addEventListener("click", (ev) => {
    ev.preventDefault();
    users.map((user) => {
      if (user.slot === "second" && user.selected) {
        user.slot = "third";
        user.selected = false;
      }
      renderUsers();
    });
  });

  const secondLeft = document.createElement("button");
  secondLeft.innerText = "<";
  secondLeft.addEventListener("click", (ev) => {
    ev.preventDefault();
    users.map((user) => {
      if (user.slot === "second" && user.selected) {
        user.slot = "first";
        user.selected = false;
      }
      renderUsers();
    });
  });

  const thirdLeft = document.createElement("button");
  thirdLeft.innerText = "<";
  thirdLeft.addEventListener("click", (ev) => {
    ev.preventDefault();
    users.map((user) => {
      console.log(user);
      if (user.slot === "third" && user.selected) {
        user.slot = "second";
        user.selected = false;
      }
      renderUsers();
    });
  });

  first.append(firstRight);
  second.append(secondLeft, secondRight);
  third.append(thirdLeft);

  const firstName = document.createElement("h1");
  firstName.innerText = "First";

  const secondName = document.createElement("h1");
  secondName.innerText = "Second";

  const thirdName = document.createElement("h1");
  thirdName.innerText = "Third";

  first.append(firstName);
  second.append(secondName);
  third.append(thirdName);

  const firstBox = document.createElement("div");
  firstBox.classList.add("firstBox");

  const secondBox = document.createElement("div");
  secondBox.classList.add("secondBox");

  const thirdBox = document.createElement("div");
  thirdBox.classList.add("thirdBox");

  first.append(firstBox);
  second.append(secondBox);
  third.append(thirdBox);

  main.append(first, second, third);

  return main;
};

const renderPage = () => {
  app.append(createHeader());
  app.append(createDivs());
};

const renderUsers = () => {
  const first = document.querySelector(".firstBox");
  first.innerHTML = "";
  const second = document.querySelector(".secondBox");
  second.innerHTML = "";
  const third = document.querySelector(".thirdBox");
  third.innerHTML = "";

  users.map((user) => {
    const nameBox = document.createElement("div");
    nameBox.classList.add("nameBox");
    nameBox.innerText = user.name;
    nameBox.addEventListener("click", (ev) => {
      console.log(ev.target.innerText);
      ev.target.classList.toggle("selected");
      users.map((user) => {
        if (user.name === ev.target.innerText && !user.selected) {
          user.selected = true;
          return;
        }
        if (user.name === ev.target.innerText && user.selected) {
          user.selected = false;
          return;
        }
      });
    });

    if (user.slot === "first") {
      first.append(nameBox);
    }
    if (user.slot === "second") {
      second.append(nameBox);
    }
    if (user.slot === "third") {
      third.append(nameBox);
    }
  });
};

renderPage();
renderUsers();
