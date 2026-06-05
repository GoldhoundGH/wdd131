
const form = document.querySelector("#fsyForm");
console.log(form);


function getCheckedCampuses(campuses) {
    return Array.from(campuses)
                .filter(campus => campus.checked)
                .map(campus => campus.value);
}

function isDateValid() {
    const date = document.getElementById("availableDate").value;
    const today = new Date();

    return date > today;
}

form.addEventListener('submit', event => {
    event.preventDefault();
    document.getElementById("output").textContent = ""
    // console.log(event);
    // console.log(form.firstName.value);
    // console.log(form.lastName.value, form.email.value);
    
    const campus_quant = form.travelRange.value;
    const campus_quant_confirm = form.campus;
    // console.log(campus_quant_confirm);
    
    if(campus_quant === "one" && getCheckedCampuses(campus_quant_confirm).length == 0) {
        // console.log("No input")

        document.getElementById("output").textContent = "Select one or more campuses."
    }

    if(campus_quant === "many" && getCheckedCampuses(campus_quant_confirm).length < 2) {
        // console.log("No input")

        document.getElementById("output").textContent = "Select two or more campuses."
    }
    
    if(!isDateValid()) {                    // ! is "not"
        document.getElementById("output").textContent = "Select a date in the future."
    }
});