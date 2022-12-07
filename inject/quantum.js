// Quantum, a JS library by CoderQC

var quantum = {};

class QuantumReply {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }
}

quantum.createElement = function (tag, attributes, innerHTML) {
  if (typeof tag !== "string") {
    return new QuantumReply(-1, "tag is not string");
  } else if (typeof attributes !== "object" && "null") {
    return new QuantumReply(
      -1,
      "attributes is not null or object (dictionary)"
    );
  }
  var element = document.createElement(tag);
  for (const property in attributes) {
    element.setAttribute(`${property}`, `${attributes[property]}`);
  }
  if (innerHTML === undefined) {
    element.innerHTML = "";
  } else {
    element.innerHTML = innerHTML;
  }
  return new QuantumReply(0, element);
};
