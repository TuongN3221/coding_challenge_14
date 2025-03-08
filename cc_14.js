// Task 2
function createSupportTicket(customerName, issue, priorityLevel) {
    // Creates div element for support ticket
    const ticketDiv = document.createElement('div');
    ticketDiv.setAttribute('class', 'ticket');
    ticketDiv.setAttribute('id', `ticket-${Date.now()}`);
    // Create headings for ticket
    const customerHeading = document.createElement('h3');
    customerHeading.textContent = `Member: ${customerName}`;
    ticketDiv.appendChild(customerHeading);

    const issueDescriptor = document.createElement('p');
    issueDescriptor.textContent = `Issue: ${issue}`;
    ticketDiv.appendChild(issueDescriptor);

    const priorityColor = document.createElement('span');
    priorityColor.textContent = `Priority: ${priorityLevel}`;
    ticketDiv.appendChild(priorityColor);

    // Create Resolve button
    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.setAttribute('class', 'resolve-button');
    resolveButton.addEventListener('click', (event) => {
        event.stopPropagation();
        const ticketContainer = document.getElementById('ticketContainer');
        ticketContainer.removeChild(ticketDiv);
    });
    ticketDiv.appendChild(resolveButton);

    // Task 5 Create Edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit'; // Add text to the edit button
    editButton.setAttribute('class', 'edit-button');
    editButton.addEventListener('click', () => {
        allowEditing(ticketDiv, customerHeading, issueDescriptor, priorityColor);
    });
    ticketDiv.appendChild(editButton);

    const ticketContainer = document.getElementById('ticketContainer');
    ticketContainer.appendChild(ticketDiv);
}

// Task 5 Enable editing
function allowEditing(ticketDiv, customerHeading, issueDescriptor, priorityColor) {
    //Gets current text of the ticket detail
    const name = customerHeading.textContent;
    const issue = issueDescriptor.textContent;
    const priority = priorityColor.textContent;

    // Creates input fields to edit
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = name;

    const issueInput = document.createElement('input');
    issueInput.type = 'text';
    issueInput.value = issue;

    const priorityInput = document.createElement('input');
    priorityInput.type = 'text';
    priorityInput.value = priority;

    // Creates save button
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save'; // Add text to the save button
    saveButton.addEventListener('click', () => {
        saveInputDetails(ticketDiv, customerHeading, issueDescriptor, priorityColor, nameInput, issueInput, priorityInput);
    });

    // Replace static text with input fields and edit button with save button
    customerHeading.replaceWith(nameInput);
    issueDescriptor.replaceWith(issueInput);
    priorityColor.replaceWith(priorityInput);
    ticketDiv.querySelector('.edit-button').replaceWith(saveButton);
}

// Task 5 Save details
function saveInputDetails(ticketDiv, customerHeading, issueDescriptor, priorityColor, nameInput, issueInput, priorityInput) {
    // Gets the values from the input field
    const updatedName = nameInput.value;
    const updatedIssue = issueInput.value;
    const updatedPriority = priorityInput.value;

    // Update ticket details
    customerHeading.textContent = updatedName;
    issueDescriptor.textContent = updatedIssue;
    priorityColor.textContent = updatedPriority;

    // Replace input fields with static text
    nameInput.replaceWith(customerHeading);
    issueInput.replaceWith(issueDescriptor);
    priorityInput.replaceWith(priorityColor);

    // Recreate edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.setAttribute('class', 'edit-button');
    editButton.addEventListener('click', () => {
        allowEditing(ticketDiv, customerHeading, issueDescriptor, priorityColor);
    });
    ticketDiv.querySelector('.resolve-button').insertAdjacentElement('afterend', editButton);
}

// Create initial tickets
createSupportTicket('The Riddler', 'Leave Clue Boxes for Batman', 'High');
createSupportTicket('Two-Face', 'Organize robbery of Gotham National Bank', 'Medium');
createSupportTicket('Poison Ivy', 'Assign soldiers to maintain plants', 'Low');

// Task 3
function highlightHighPriority() {
    // Collects all ticket element
    const allTickets = document.querySelectorAll('.ticket');
    const ticketArray = Array.from(allTickets);

    ticketArray.forEach(ticket => {
        const priorityElement = ticket.querySelector('span');
        if (priorityElement && priorityElement.textContent.includes('Priority: High')) {
            ticket.style.backgroundColor = '#ffcccc';
            ticket.style.border = '2px solid #ff0000';
        }
    });
}
highlightHighPriority();

// Task 4
const ticketContainer = document.getElementById('ticketContainer');
ticketContainer.addEventListener('click', (event) => {
    console.log("A ticket has been clicked.");
    event.stopPropagation();
});