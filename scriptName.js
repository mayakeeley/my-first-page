let clickText = document.querySelector("#clickText");

replaceText = () => {
    if (clickText.innerHTML === "Trainee Web Developer") {
        clickText.innerHTML = "Myers-Briggs nerd";
    } else if (clickText.innerHTML === "Myers-Briggs nerd") {
        clickText.innerHTML = "Travel enthusiast";
    } else {
        clickText.innerHTML = "Trainee Web Developer";
    }};
