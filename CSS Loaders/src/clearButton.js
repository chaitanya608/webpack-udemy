// import styles from "./clearButton.css";

const el = document.createElement("button");
el.innerHTML = "Clear";
el.classList.add(["button"]);
el.onclick = function() {
	alert("Clear clicked");
};

document.body.appendChild(el);
