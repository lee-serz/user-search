let form = document.querySelector(".form");
let input = document.querySelector(".username-input");
let section = document.querySelector(".user-wrapper");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  section.style.display = "flex";
  const inputValue = input.value;
  const username = inputValue.split(" ").join("");

  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  console.log(data);

  const userImg = document.querySelector(".user__image");
  const userName = document.querySelector(".user__name");
  const userDate = document.querySelector(".user__date");
  const userTag = document.querySelector(".user__tag");
  const userBio = document.querySelector(".user__bio");
  const userRepos = document.querySelector(".user__block-repo");
  const userFollowers = document.querySelector(".user__block-followers");
  const userFollowing = document.querySelector(".user__block-following");
  const userLocation = document.querySelector(".user__footer-location");
  const userTwitter = document.querySelector(".user__footer-twitter");
  const userUrl = document.querySelector(".user__footer-url");
  const userCompany = document.querySelector(".user__footer-company");

  const dateValue = new Date(data.created_at);
  const options = { month: "short" };
  const monthName = dateValue.toLocaleString("en-US", options);
  const date = `Joined ${dateValue.getDate()} ${monthName} ${dateValue.getFullYear()}`;

  userImg.innerHTML = `<img src="${data.avatar_url}">`;
  userName.innerHTML = data.name || "Not Aviable";
  userDate.innerHTML = date;
  userTag.innerHTML = `@${data.login}`;
  userRepos.innerHTML = data.public_repos;
  userFollowers.innerHTML = data.followers;
  userFollowing.innerHTML = data.following;

  userLocation.innerHTML = data.location || "Not Aviable";
  userTwitter.innerHTML = data.twitter_username || "Not Aviable";
  userUrl.innerHTML = data.blog || "Not Aviable";
  userCompany.innerHTML = data.company || "Not Aviable";

  userBio.innerHTML = data.bio || "This profile has no bio";
});
