window.addEventListener("load", () => {
  // This is a check to see if there's a username stored
  let username = localStorage.getItem("username");
  if (!username) {
    // Prompt for one if a username isn't found
    username = window.prompt("What is your name?");
    localStorage.setItem("username", username);
  }

  const containerEl = document.querySelector("#newsfeed");

  // This makes things appear
  for (let index = bacefook.newsfeed.length - 1; index >= 0; index--) {
    const post = bacefook.newsfeed[index];

    const friendEl = document.createElement("div");
    friendEl.className = "friend";
    friendEl.innerText = post.friend;

    const postEl = document.createElement("div");
    postEl.innerText = post.text;
    postEl.append(friendEl);

    containerEl.append(postEl);
    // console.log(bacefook.newsfeed.length)
  }
});

function buttonClick() {
  const post = bacefook.newsfeed[bacefook.newsfeed.length - 1];
  //divを生成する
  const friendEl = document.createElement("div");
  //名前を表示させる
  const postEl = document.createElement("div");
  friendEl.className = "friend";
  friendEl.innerText = post.friend;
  
  //記事を表示させる
  postEl.innerText = post.text;
  //postElに名前を追加する
  postEl.append(friendEl);
  
  //
  const containerEl = document.querySelector("#newsfeed");
  containerEl.append(postEl);

};

const button = document.getElementsByClassName("relode-button")[0];
button.addEventListener("click",buttonClick)
