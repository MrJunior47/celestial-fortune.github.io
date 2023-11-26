const panels = document.querySelectorAll(".pamel");
panels.forEach((panel)=> {
    panel.addEventListener("click", () =>{
        removeActiveClasses();
        panel.classList.add("active");
    });
});

const removeActiveClasses = () => {
    panels.forEach((panel) =>{
        panel.classList.remove("active");
    });
};

let button = document.getElementById("button");
let BtnIconRow = document.getElementById("button-icon-row");

function send() {
    BtnIconRow.style.transform = "translateX(0%)";

    setTimeout(() => {
        if ((BtnIconRow.style.transform = "translateX(0%)")) {
            document.getElementById("icon-sent").style.transform = "rotate(45deg)";
                document.getElementById("icon-sent").style.opacity = "0"
            setTimeout(() => {
                document.getElementById("icon-sent-check").style.opacity = "1"
            }, 200);
            document.getElementById("button-placeholder-row").style.transform = "translateY(-50)%";
        }
    }, 1000);
}

document.getElementById("year").innerHTML = new Date().getFullYear();