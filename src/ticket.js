export default function ticket({ firstName, lastName, emailAndress, eventDate, userAvatar, fullName, githubAccount, eventNumber }) {
  return `
        <!-- Generated tickets starts -->
            <div class="block" id="generatorResult">
              <div class="text-center">
                <h1 class="text-2xl font-bold mt-4">Congrats, <span id="firstName">${firstName}</span> <span id="${lastName}">Kapal</span>! Your ticket is ready.</h1>
                <p class="text-md">
                  We've emailed your ticket to <span id="userEmail">${emailAndress}</span> and will send updates in the run up to the event.
                </p>
              </div>
        
              <div class="relative flex flex-col justify-center mx-auto w-[330px] h-[200px] ">
                <img src="assets/images/pattern-ticket.svg" alt="logo" class="absolute top-" />
                  <div class="ticket-content">
                    <div class="ticket-header">
                      <img class="ticket-logo" src="./assets/images/logo-full.svg" alt="" />
                      <p class="text-xs text-neutral-500">${eventDate}<span class="event-location">/ Austin, TX</span></p>
                    </div>
      
                    <div class="flex items-center gap-4 mt-5">
                      <img id="userAvatar" src="${userAvatar}" alt="Image user ticket" width="50" height="50" />
                      <div class="">
                        <h3 class="text-lg">${fullName}</h3>
                          <div class="flex items-center mt-1">
                            <img src="./assets/images/icon-github.svg" alt="" width="16" height="16"/>
                            <p class="text-md text-neutral-500 ml-[5px]">${githubAccount}</p>
                          </div>
                      </div>
                    </div>
    
                    <div class="absolute top-0 rigth-0 flex items-center h-full w-[60px]">
                      <div id="number" class="text-md text-neutral-500 ">${eventNumber}</div>
                    </div>
                  </div>
                </div>
                <!-- Generated tickets ends -->
            </div>
        `;
}
