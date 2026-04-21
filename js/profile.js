let profileHead = document.getElementById("profileHead");
users = getUsersFromLocalStorage("users");

profileHead.innerHTML = ""
profileUser = JSON.parse(sessionStorage.getItem("currentUser"))
let profileOwner = "";
let profileLocation = "";
for (var user of users) {
  if(user.id == profileUser){
    profileOwner = (user.firstName + " " + user.lastName)
    profileLocation = (user.country + " " + user.city)
      break;
  }
}
profileHeadContent = `
      <div class="li-profile-meta">
                <h1 class="li-profile-meta__name">${profileOwner}</h1>
                <p class="li-profile-meta__headline">
                  Senior Product Designer · UX Researcher · Design Systems Lead
                </p>
  
                <!-- Location + connections -->
                <div class="li-profile-meta__details">
                  <span class="li-profile-meta__location">
                    <i class="bi bi-geo-alt-fill"></i> ${profileLocation}
                  </span>
                  <a href="#" class="li-profile-meta__connections">
                    <i class="bi bi-people-fill"></i> ${user.connections.length} connections
                  </a>
                </div>
  
                <!-- CTA Buttons -->
                <div class="li-profile-meta__cta">
                  <button class="li-btn li-btn--primary">
                    <i class="bi bi-person-plus-fill"></i> Connect
                  </button>
                  <button class="li-btn li-btn--secondary">
                    <i class="bi bi-chat-dots-fill"></i> Message
                  </button>
                  <button class="li-btn li-btn--ghost">
                    <i class="bi bi-hand-thumbs-up-fill"></i> Follow
                  </button>
                  <button class="li-btn li-btn--ghost li-btn--icon-only" aria-label="More options">
                    <i class="bi bi-three-dots"></i>
                  </button>
                </div>
              </div>
  `;
profileHead.innerHTML = profileHeadContent
