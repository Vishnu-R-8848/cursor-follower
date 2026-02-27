let cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
});

let h1 = document.querySelector("h1");
h1.addEventListener("mouseenter", () => {
    cursor.style.height = 143 + "px";
    cursor.style.width = 143 + "px";
    cursor.style.opacity = ".8";
});

h1.addEventListener("mouseleave", () => {
    cursor.style.height = 25 + "px";
    cursor.style.width = 25 + "px";
    cursor.style.opacity = "1";
});
