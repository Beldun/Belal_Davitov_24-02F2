import chroma from "chroma-js";

export default function ColorBlock() {
    let color = chroma.random();
    const labelColor = color.luminance() > 0.5 ? "black" : "white";
    const labelbg = color.luminance() > 0.5 ? "white" : "black"
    color = color.toString().toUpperCase();

    return `
    <div class="color-block" style="background-color: ${color}">
    <div class="text">
    <h2 data-type="copy" style="color: ${labelColor}; 
    background-color: ${labelbg};
    width: 500px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    ">${color}</h2>
    </div>
    <button data-type="change" id="click">Change</button>
    </div>`;
}
