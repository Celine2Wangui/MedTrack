const form = document.getElementById('MedicationForm');
const medicationList = document.getElementById('medicationList');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const medicationNameInput = document.getElementById('MedicationName');
    const dosageInput = document.getElementById('dosage');
    const dosageOtherInput = document.getElementById('dosageOther');
    const scheduleInput = document.getElementById('schedule');
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');

    if (medicationNameInput && dosageInput && scheduleInput && startDateInput && endDateInput) {
        const medicationName = medicationNameInput.value;
        let dosage = dosageInput.value;

        // Check if "Other" is selected and get the custom dosage value
        if (dosage === "other") {
            dosage = dosageOtherInput.value; // Get dosage from the "Other" input field
            if (!dosage) {
                alert("Please specify the dosage when 'Other' is selected.");
                return; // Prevent form submission if "Other" is selected but not specified
            }
        }

        const schedule = scheduleInput.value;
        const startDate = startDateInput.value;
        const endDate = endDateInput.value;

        // Create a new list item and add it to the list
        const li = document.createElement('li');
        li.textContent = `${medicationName} - ${dosage} - ${schedule} - ${startDate} - ${endDate}`;
        medicationList.appendChild(li);

        // Clear the form
        form.reset();
        document.getElementById("dosageOther").style.display = "none"; // Hide "Other" input after form reset
    } else {
        alert('Please fill in all fields.');
    }
});

// Show the "Other" input field when "Other" is selected from the dropdown
document.getElementById("dosage").addEventListener("change", function() {
    if (this.value === "other") {
        document.getElementById("dosageOther").style.display = "inline";
    } else {
        document.getElementById("dosageOther").style.display = "none";
    }
});

