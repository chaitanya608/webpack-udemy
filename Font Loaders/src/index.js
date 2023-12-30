import _ from "lodash";
import styles from "./index.scss";
import "./clearButton";
import webpackLogo from "./assets/webpack_logo.png";
import fonts from "./assets/fonts/Redressed-Regular.ttf";

console.log({
	styles,
	webpackLogo
});

const btn1 = document.getElementById("button1");
const logoEl = document.getElementById("logo");

btn1.addEventListener("click", function() {
	const el = document.getElementById("header");
	el.innerHTML = "Hey, I have updated the code!";
	el.classList.add([styles.header]);

	const listItems = ["Apple", "Orange", "Banana"];
	const ul = document.getElementById("shopping-list");
	_.forEach(listItems, item => {
		const tempEl = document.createElement("li");
		tempEl.innerHTML = item;
		ul.appendChild(tempEl);
	});
});

btn1.classList.add([styles.button]);
logoEl.src = webpackLogo;
