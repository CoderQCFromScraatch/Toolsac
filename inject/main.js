var prefix = "https://z0gddo.csb.app/inject";

var loadFromSource = function (tag, url, implementationCode, location) {
  var scriptTag = document.createElement(tag);
  scriptTag.src = url;

  scriptTag.onload = implementationCode;
  scriptTag.onreadystatechange = implementationCode;

  location.appendChild(scriptTag);
};

function openToolsacNav() {
  document.getElementById("toolsac-sidebar").style.width = "500px";
  document.getElementById("toolsac-main").style.filter = "blur(8px)";
}

function closeToolsacNav() {
  document.getElementById("toolsac-sidebar").style.width = "0";
  document.getElementById("toolsac-main").style.marginLeft = "0";
  document.getElementById("toolsac-main").style.filter = "";
}

var loadedResources = function () {
  document.body.appendChild(
    quantum.createElement("link", {
      rel: "stylesheet",
      href: prefix + "/main.css"
    }).message
  );
  document.body.id += "toolsac-main";
  console.log("Loaded all resources!");

  loadFromSource(
    "script",
    "https://cdn.jsdelivr.net/npm/toastify-js",
    function () {
      Toastify({
        text:
          "Successfully loaded Toolsac. \n Click this notification or press the backquote key (`) to show the menu",
        duration: 3000,
        destination: "javascript:(function()%7BopenToolsacNav()%7D)()%3B",
        newWindow: false,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)"
        },
        onClick: function () {} // Callback after click
      }).showToast();
      document.body.addEventListener("keydown", (event) => {
        if (event.isComposing || event.keyCode === 229) {
          return;
        }
        if (event.keyCode == 192) {
          openToolsacNav();
        }
      });
    },
    document.body
  );

  // Start creating the basic sidebar

  document.querySelector("html").appendChild(
    quantum.createElement("div", {
      id: "toolsac-sidebar",
      class: "toolsac-sidebar"
    }).message
  );
  document.querySelector("#toolsac-sidebar").appendChild(
    quantum.createElement(
      "div",
      {
        id: "toolsac-sidebar-heading",
        class: ""
      },
      "Toolsac"
    ).message
  );
  document.querySelector("#toolsac-sidebar").appendChild(
    quantum.createElement(
      "a",
      {
        href: "javascript:void(0)",
        onclick: "closeToolsacNav()",
        class: "toolsac-closebtn"
      },
      "x"
    ).message
  );
};

loadFromSource(
  "script",
  prefix + "/quantum.js",
  loadedResources,
  document.body
);
