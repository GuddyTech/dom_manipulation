const bodyBox = document.body;
console.log(bodyBox);

bodyBox.style.backgroundColor = "red";

// Removing Elements from the DOM
const para = document.body.childNodes[3];
console.log(para);

const smallPara = document.getElementById("small_p");
smallPara.style.color = "white";

const bigText = document.querySelector("#head-text");
// bigText.style.display = "none";

// bigText.remove(); // to remove the h1 tag

// removePara.removeChild(spanEls[0]); grabing a child by class name with index


//appending elements to empty divs: the bigText goes down to where it was appended.
const divEl = document.querySelector("div");
console.log(divEl);
divEl.append(bigText);

//GETTING ATTRIBUTES

//add attribute
bigText.setAttribute("class", "heading");
console.log(bigText);

// remove attribute
bigText.classList.add("");

bigText.removeAttribute("title");

// Add classname
bigText.classList.add("new-class");

//remove class
bigText.classList.remove("new-Class");

//toggle class
bigText.classListtoggle("light");





