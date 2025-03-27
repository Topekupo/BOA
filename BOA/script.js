document.getElementById('wireTransferForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Simulate a check for Credit Karma linking (this is just a demo)
    const isLinkedToCreditKarma = false; // Change to `true` to test the success case

    const errorMessage = document.getElementById('error-message');

    if (!isLinkedToCreditKarma) {
        // Display the error message
        errorMessage.textContent = 'This account is not linked to Credit Karma.';
        errorMessage.style.display = 'block'; // Make the error message visible
    } else {
        // If linked, proceed with form submission (or other logic)
        errorMessage.style.display = 'none'; // Hide the error message
        alert('Wire transfer submitted successfully!'); // Placeholder for success action
    }
});

document.getElementById('wireTransferForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Simulate a check for Credit Karma linking (this is just a demo)
    const isLinkedToCreditKarma = true; // Change to `false` to test the error case

    const errorMessage = document.getElementById('error-message');

    if (!isLinkedToCreditKarma) {
        // Display the error message
        errorMessage.textContent = 'This account is not linked to Credit Karma.';
        errorMessage.style.display = 'block';
    } else {
        // Hide the error message
        errorMessage.style.display = 'none';

        // Capture form data
        const fromAccount = document.getElementById('fromAccount').value;
        const toAccount = document.getElementById('toAccount').value;
        const routingNumber = document.getElementById('routingNumber').value;
        const amount = document.getElementById('amount').value;
        const currency = document.getElementById('currency').value;
        const notes = document.getElementById('notes').value;

        // Display success page
        document.getElementById('wireTransferForm').style.display = 'none'; // Hide the form
        document.getElementById('successPage').style.display = 'block'; // Show the success page

        // Populate success page with transfer details
        document.getElementById('successFromAccount').textContent = fromAccount;
        document.getElementById('successToAccount').textContent = toAccount;
        document.getElementById('successRoutingNumber').textContent = routingNumber;
        document.getElementById('successAmount').textContent = amount;
        document.getElementById('successCurrency').textContent = currency;
        document.getElementById('successNotes').textContent = notes || 'N/A'; // Handle empty notes
    }
});