// Task 2
function createSupportTicket(customerName, issue, priorityLevel) {
    const ticketDiv = document.createElement('div');
    ticketDiv.setAttribute('class', 'ticket');
    ticketDiv.setAttribute('id', `ticket-${Date.now()}`);

    const customerHeading = document.createElement('h3');
    customerHeading.textContent = `Customer: ${customerName}`;
    ticketDiv.appendChild(customerHeading);

    const issueDescriptor = document.createElement('p');
    issueDescriptor.textContent = `Issue: ${issue}`;
    ticketDiv.appendChild(issueDescriptor);

    const priorityColor = document.createElement('span');
    priorityColor.textContent = `Priority: ${priorityLevel}`;
    if (priorityLevel === 'High'){
        priorityColor.classList.add('priority-high')
    } else if (priorityLevel === 'Medium'){
        priorityColor.classList.add('priority-medium')
    } else if (priorityLevel === 'Low'){
        priorityColor.classList.add('priority-low')
    }
    ticketDiv.appendChild(priorityColor);

    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.setAttribute('class', 'resolve-button');
    resolveButton.addEventListener('click', () =>{
        ticketDiv.remove()
    })
    ticketDiv.appendChild(resolveButton)

    const ticketContainer = document.getElementById('ticketContainer')
    ticketContainer.appendChild(ticketDiv)
}
createSupportTicket('The Riddler', 'Leave Clue Boxes for batman', 'High');
createSupportTicket('Two-Face', 'Organize National Bank', 'Medium');
createSupportTicket('Poison Ivy', 'Assign soldiers to maintain plants', 'Low')

