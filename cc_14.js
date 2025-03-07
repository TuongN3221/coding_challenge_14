// Task 2
function createSupportTicket(customerName, issue, priorityLevel) {
    const ticketDiv = document.createElement('div');
    ticketDiv.setAttribute('class', 'ticket');
    ticketDiv.setAttribute('id', `ticket-${Date.now()}`);

    const customerHeading = document.createElement('h3');
    customerHeading.textContent = `Member: ${customerName}`;
    ticketDiv.appendChild(customerHeading);

    const issueDescriptor = document.createElement('p');
    issueDescriptor.textContent = `Issue: ${issue}`;
    ticketDiv.appendChild(issueDescriptor);

    const priorityColor = document.createElement('span');
    priorityColor.textContent = `Priority: ${priorityLevel}`;
    ticketDiv.appendChild(priorityColor);

    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.setAttribute('class', 'resolve-button');
    resolveButton.addEventListener('click', (event) =>{
        event.stopPropagation()
        const ticketContainer = document.getElementById('ticketContainer')
        ticketContainer.removeChild(ticketDiv)
    })
    ticketDiv.appendChild(resolveButton)

    const ticketContainer = document.getElementById('ticketContainer')
    ticketContainer.appendChild(ticketDiv)
}
createSupportTicket('The Riddler', 'Leave Clue Boxes for Batman', 'High');
createSupportTicket('Two-Face', 'Organize robbery of Gotham National Bank', 'Medium');
createSupportTicket('Poison Ivy', 'Assign soldiers to maintain plants', 'Low')

// Task 3
function highlightHighPriority() {
    const allTickets = document.querySelectorAll('.ticket')

    const ticketArray = Array.from(allTickets);

    ticketArray.forEach(ticket => {
        const priorityElement = ticket.querySelector('span')
        if (priorityElement && priorityElement.textContent.includes('Priority: High')) {
            ticket.style.backgroundColor = '#ffcccc'
            ticket.style.backgroundColor = '2px solid #ff000'
        }
    })
}
highlightHighPriority();

// Task 4 
ticketContainer.addEventListener('click', (event) =>{
    console.log("A ticket has been clicked.")
    event.stopPropagation()
})