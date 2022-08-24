const github = new Github();
const ui = new UI();

// SEARCH INPUT
const searchUSers = document.getElementById("searchUser");

searchUSers.addEventListener("keyup", (e) => {
  // GEt USERS INPUT TYPED IN
  const userText = e.target.value;

  if (userText !== "") {
    github.getUser(userText)
      .then((data) => {
        if (data.profile.message === "Not Found") {
          ui.showAlert("User not found", "alert alert-danger");
        } else {
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
      .catch((error) => console.log(error));
  } else {
    ui.clearProfile();
  }

  e.preventDefault();
});
