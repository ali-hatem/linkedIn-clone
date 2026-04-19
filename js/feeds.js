users = getUsersFromLocalStorage('users');
posts = getUsersFromLocalStorage('posts');
let currentUser = sessionStorage.getItem("currentUser")
let profileCard = document.getElementById("profileCard")
let newPostBtn = document.getElementById("postBtn")
let postsHolder = document.getElementById("posts-holder");
let postContent = document.getElementById("postContent");


function showPosts(){
postsHolder.innerHTML = ""

let randomPosts = [...posts].sort(() => 0.5 - Math.random())
let postsToShow = randomPosts.slice(0,5)


for(post of postsToShow){
  let postOwner = ""
  for(user of users){
    if(user.id == post.userId){
      postOwner = (user.firstName + " " + user.lastName)
      break;
    }
  }
  let postContent = `
    <div class="card rounded-3 post-card">
          <div class="card-body pb-2">
            <div class="d-flex align-items-start mb-2">
              <img src="assets/images/user-image.png" class="rounded-circle me-2" width="48" height="48" alt="User">
              <div class="flex-grow-1">
                <h6 class="mb-0 fw-semibold"><a href="#" class="post-author-name text-decoration-none">${postOwner}</a> <i class="bi bi-patch-check" style="color: var(--li-blue); font-size: 0.9rem;"></i></h6>
                <p class="post-timestamp small mb-0">${post.time}<i class="bi bi-globe"></i></p>
              </div>
              <button class="btn text-muted p-1"><i class="bi bi-three-dots"></i></button>
            </div>

            <div class="post-content">
            <p class="mb-2">${post.content}</p>
            </div>
            <span class="badge"> #TechJobs</span>
            <span class="badge">#GoogleCareers</span>
            <span class="badge">#AIJobs</span>
            <span class="badge">#Hiring</span>

            <div class="mt-2 rounded-2 overflow-hidden">
              <img src="assets/images/user-image.png" class="img-fluid w-100" alt="Post image">
            </div>

            <div class="d-flex align-items-center mt-2 mb-1">
              <div class="d-flex me-auto">
                <span class="rounded-circle text-white d-inline-flex align-items-center justify-content-center" style="width:20px;height:20px;font-size:0.7rem; background-color: var(--li-blue);">👍</span>
                <span class="rounded-circle text-white d-inline-flex align-items-center justify-content-center ms-1" style="width:20px;height:20px;font-size:0.7rem; background-color: var(--li-error);">❤</span>
                <span class="rounded-circle text-white d-inline-flex align-items-center justify-content-center ms-1" style="width:20px;height:20px;font-size:0.7rem; background-color: var(--li-green);">🎉</span>
              </div>
              <a href="#" class="reaction-count ms-2 text-decoration-none small">${post.likes}</a>
            </div>

            <hr class="my-1 post-actions">
            <div class="d-flex justify-content-around py-1 post-actions">
              <button class="btn post-action-btn post-action-btn-recommend flex-grow-1 d-flex align-items-center justify-content-center">
                <i class="bi bi-hand-thumbs-up me-1" style="font-size:1.1rem;"></i> <span class="small">Recommend</span>
              </button>
              <button class="btn post-action-btn post-action-btn-comment flex-grow-1 d-flex align-items-center justify-content-center">
                <i class="bi bi-chat me-1" style="font-size:1.1rem;"></i> <span class="small">Comment</span>
              </button>
              <button class="btn post-action-btn post-action-btn-repost flex-grow-1 d-flex align-items-center justify-content-center">
                <i class="bi bi-arrow-repeat me-1" style="font-size:1.1rem;"></i> <span class="small">Repost</span>
              </button>
              <button class="btn post-action-btn post-action-btn-send flex-grow-1 d-flex align-items-center justify-content-center">
                <i class="bi bi-send me-1" style="font-size:1.1rem;"></i> <span class="small">Send</span>
              </button>
            </div>
          </div>
        </div>
  `
  postsHolder.innerHTML += postContent
}
}

window.addEventListener("load", () =>{
  showPosts()
})


{
  let postOwner =" ";
  for(user of users){
    if(user.id == currentUser){
      postOwner = (user.firstName + " " + user.lastName)
      break;
    }
  }


  let postContent = `
    <div class="text-center pt-4 pb-2 profile-banner"></div>
            <div class="card-body pt-0 pb-3 text-center">
              <img
                src="assets/images/user-image.png"
                class="rounded-circle border border-3 border-white mb-2"
                width="72"
                height="72"
                alt="Profile"
              />
              <h6 class="mb-0 fw-semibold profile-name">
                <a href="#" class="text-decoration-none">${postOwner}</a>
              </h6>
              <hr class="my-2" />
              <div class="text-start px-3">
                <p class="small mb-1">
                  <span class="stat-label">Profile viewers</span>
                  <span class="float-end stat-value">142</span>
                </p>
                <p class="small mb-1">
                  <span class="stat-label">Post impressions</span>
                  <span class="float-end stat-value">1,203</span>
                </p>
              </div>
              <hr class="my-2" />
              <a href="#" class="d-block sidebar-link small py-1">
                <i class="bi bi-bookmark me-1"></i> My items
              </a>
            </div>
  `
  
  profileCard.innerHTML = postContent
}


newPostBtn.addEventListener("click", function() {
  let postId = Math.floor(Math.random()*1000);
  let now = new Date()
  let postTime = now.getHours() + ":" + now.getMinutes() ;
  let newPost = {
    id: postId,
    userId: currentUser,
    content: postContent.value,
    time: postTime,
    likes: 0,
  }
  // posts.push(newPost)

  console.log(posts);
  setUsersToLocalStorage("posts", posts)
  location.reload();
})




