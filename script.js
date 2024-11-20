form.addEventListener('submit', (event) => {
    event.preventDefault();

    const medicationNameInput = document.getElementById('medicationName');
    const dosageInput = document.getElementById('dosage');
    const scheduleInput = document.getElementById('schedule');
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');

    if (medicationNameInput && dosageInput && scheduleInput && startDateInput && endDateInput) {
        const medicationName = medicationNameInput.value;
        const dosage = dosageInput.value;
        const schedule = scheduleInput.value;
        const startDate = startDateInput.value;
        const endDate = endDateInput.value;

        // Create a new list item and add it to the list
        const li = document.createElement('li');
        li.textContent = `${medicationName} - ${dosage} - ${schedule} - ${startDate} - ${endDate}`;
        medicationList.appendChild(li);

        // Clear the form
        form.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
