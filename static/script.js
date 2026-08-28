async function submitFlag() {
    const flagInput = document.getElementById("flag");
    const result = document.getElementById("result");

    const flag = flagInput.value.trim();

    if (flag === "") {
        result.textContent = "Enter a flag first.";
        result.className = "error";
        return;
    }

    result.textContent = "Checking...";
    result.className = "";

    try {
        const response = await fetch("/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                flag: flag
            })
        });

        const data = await response.json();

        result.textContent = data.message;

        if (data.correct) {
            result.className = "success";
        } else {
            result.className = "error";
        }

    } catch (error) {
        result.textContent = "Unable to connect to the server.";
        result.className = "error";
    }
}


document.addEventListener("DOMContentLoaded", function () {

    const flagInput = document.getElementById("flag");

    flagInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            submitFlag();
        }

    });

});