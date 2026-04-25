export default function ticket({firstName, lastName, emailAndress, eventDate, userAvatar, fullName, githubAccount, eventNumber}) {
  return `
        <!-- Generated tickets starts -->
            <div class="result-container" id="generatorResult">
                <h1 class="result-title">Congrats, <span id="firstName">${firstName}</span> <span id="${lastName}">Kapal</span>! Your ticket is ready.</h1>
                <p class="result-description">
                  We've emailed your ticket to <span id="userEmail">${emailAndress}</span> and will send updates in the run up to the event.
                </p>
        
                <div class="ticket-card">
                    <img src="assets/images/pattern-ticket.svg" alt="" class="ticket-bg-pattern" />
                    <div class="ticket-content">
                        <div class="ticket-header">
                          <img class="ticket-logo" src="./assets/images/logo-full.svg" alt="" />
                          <p class="ticket-event-date">${eventDate}<span class="event-location">/ Austin, TX</span></p>
                        </div>
        
                        <div class="ticket-body">
                          <img id="userAvatar" src="${userAvatar}" alt="Image user ticket" width="48" height="48" />
                          <div class="user-details">
                            <h3 class="user-fullname">${fullName}</h3>
                              <div class="user-github-handle">
                                <img src="./assets/images/icon-github.svg" alt="" />
                                <p class="github-username">${githubAccount}</p>
                              </div>
                          </div>
                        </div>
        
                        <div class="ticket-number">
                            <div id="number">${eventNumber}</div>
                        </div>
                    </div>
                </div>
                <!-- Generated tickets ends -->
            </div>
        `;
}
