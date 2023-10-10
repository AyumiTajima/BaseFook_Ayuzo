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

    const imgEl = document.createElement("img");
    imgEl.src = "https://source.unsplash.com/random/75x50";
    imgEl.alt = "ランダム画像だよ";
    postEl.append(imgEl);

    containerEl.append(postEl);
    // console.log(bacefook.newsfeed.length)
  }
});
const reslut = [];
let x = 0;
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

  //imgを生成する
  const imgEl = document.createElement("img");
  imgEl.src = "https://source.unsplash.com/random/75x50";
  imgEl.alt = "ランダム画像だよ";
  // img1を表示させる
  postEl.append(imgEl);
  const containerEl = document.querySelector("#newsfeed");
  containerEl.append(postEl);

  // timestampを生成する
  const timestampEl = document.createElement("div");
  timestampEl.className = "timestamp";
  const nowTime = new Date();
  timestampEl.innerText = nowTime;
  postEl.append(timestampEl);

  localStorage.setItem(`postedtime${x}`, nowTime.getTime());
  const progressTimeEl = `posted ${moment().startOf("minutes").fromNow()}`;
  postEl.append(progressTimeEl);

  // // 投稿時間を取得（仮のタイムスタンプ）
  // const postTimestamp = new Date().getTime();
  // // ローカルストレージに投稿時間を保存
  // localStorage.setItem("postTimestamp", postTimestamp);
  // // ローカルストレージから投稿時間を取得
  // const savedPostTimestamp = localStorage.getItem("postTimestamp");
  // // 取得した投稿時間を表示
  // console.log("保存された投稿時間:", new Date(parseInt(savedPostTimestamp)));
  x++;
}

const button = document.getElementsByClassName("relode-button")[0];
button.addEventListener("click", buttonClick);
