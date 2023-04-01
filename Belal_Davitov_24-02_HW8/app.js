import ColorBlock from "./Components/ColorBlock/ColorBlock";

const appElement = document.querySelector("#app");


const generateColor = () => {
    appElement.innerHTML = ColorBlock();
};

generateColor()

document.body.addEventListener("click", (event) => {
    const clickedElement = event.target;
    const action = clickedElement.dataset.type;
    if(!action) return;
    switch (action) {
        case "change":
            generateColor()
            break;
        case "copy":
            navigator.clipboard.writeText(clickedElement.innerText);
            alert("Copied");
            break;
    } 
})