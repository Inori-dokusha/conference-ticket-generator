const html = `
<!-- Generated tickets starts -->
        <div class="result-container hidden" id="generatorResult">
            <h1 class="result-title">Congrats, <span id="firstName">Budi</span> <span id="lastName">Kapal</span>! Your ticket is ready.</h1>
            <p class="result-description">
                We've emailed your ticket to <span id="userEmail">budikapallaut@gmail.com</span> and will send updates in the run up to the event.
            </p>

            <div class="ticket-card">
                <img src="assets/images/pattern-ticket.svg" alt="" class="ticket-bg-pattern" />
                <div class="ticket-content">
                    <div class="ticket-header">
                        <img class="ticket-logo" src="./assets/images/logo-full.svg" alt="" />
                        <p class="ticket-event-date">Jan 31, 2025 <span class="event-location">/ Austin, TX</span></p>
                    </div>

                    <div class="ticket-body">
                        <img id="userAvatar" src="assets/images/image-avatar.jpg" alt="Image user ticket" width="48" height="48" />
                        <div class="user-details">
                            <h3 class="user-fullname">Budi Kapal Laut</h3>
                            <div class="user-github-handle">
                                <img src="./assets/images/icon-github.svg" alt="" />
                                <p class="github-username">@kapallaut</p>
                            </div>
                        </div>
                    </div>

                    <div class="ticket-number">
                        <div id="number">090909#</div>
                    </div>
                </div>
            </div>
            <!-- Generated tickets ends -->
        </div>
`;
