window.addEventListener("load", () => {
  // This is a check to see if there's a username stored
  let username = localStorage.getItem("username");
  if (!username) {
    // Prompt for one if a username isn't found
    username = window.prompt("What is your name?");
    localStorage.setItem("username", username);
  }

  //usernameを表示する
  const usernameEl = document.createElement("div");
  usernameEl.className = "username";
  usernameEl.innerText = username;
  document.body.prepend(usernameEl);

  // 入力欄の値を書き換える
  // const paragraph = document.createElement("p");
  // paragraph.textContent = username;
  // document.body.prepend(paragraph);


  document.getElementById("username").value = username;
  // function getName () {
  //   document.getElementsById("area1").innerText = username;
  // }  

  const containerEl = document.querySelector("#newsfeed");
  containerEl.className = "main-container";


  // This makes things appear
  for (let index = bacefook.newsfeed.length - 1; index >= 0; index--) {
    const post = bacefook.newsfeed[index];
    
    const friendEl = document.createElement("div");
    friendEl.className = "friend";
    friendEl.innerText = post.friend;
    
    const postEl = document.createElement("div");
    postEl.innerText = post.text;
    postEl.append(friendEl);
    
    postEl.append(post.timestamp);
    
    //postTimeから経過時間を生成
    const postTimestampEl = document.createElement("div");
    postTimestampEl.className = "postedTime";
    postTimestampEl.innerText = moment(post.timestamp).fromNow();
    postEl.append(postTimestampEl);
    
    const imgEl = document.createElement("img");
    imgEl.src = post.image;
    imgEl.alt = "ランダム画像だよ";
    imgEl.width = "100"
    imgEl.height = "75"
    postEl.append(imgEl);
    
    containerEl.append(postEl);
    // console.log(bacefook.newsfeed.length)
  }
});

window.onload = function() {
  Particles.init({
    selector: '.background',
    sizeVariations: 30,
    color: [
      '#0bd', 'rgba(0,187,221,.5)', 'rgba(0,187,221,.2)'
    ]
  });
};

function relodeButtonClick() {
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
  imgEl.width = "75"
  imgEl.height = "50"
  // img1を表示させる
  postEl.append(imgEl);
  const containerEl = document.querySelector("#newsfeed");
  containerEl.prepend(postEl);
  containerEl.className = "post-container";

  // timestampを生成する
  const timestampEl = document.createElement("div");
  timestampEl.className = "timestamp";
  const nowTime = new Date();
  timestampEl.innerText = nowTime;
  postEl.append(timestampEl);

  //postTimeから経過時間を生成
  const postTimestamp = document.createElement("div");
  postTimestamp.className = "postedTime";

};


// const yourPostObject = window.generatePostObj(timeOffset);
// console.log(yourPostObject);  // 他のファイルで生成した投稿オブジェクトを利用できます



function postButtonClick() {
  const post = bacefook.newsfeed[bacefook.newsfeed.length - 1];
  console.log(post)

  const posted = document.getElementById("post").value;
  console.log(posted)
  //divを生成する
  const friendEl = document.createElement("div");
  //名前を表示させる
  const postEl = document.createElement("div");
  friendEl.className = "friend";
  friendEl.innerText = post.friend;

  //記事を表示させる
  postEl.innerText = posted + post.feeling + post.hashtag;
  //postElに名前を追加する
  postEl.append(friendEl);

  
  // timestampを生成する
  const timestampEl = document.createElement("div");
  timestampEl.className = "timestamp";
  const nowTime = new Date();
  timestampEl.innerText = nowTime;
  postEl.append(timestampEl);
  
  //postTimeから経過時間を生成
  const postTimestampEl = document.createElement("div");
  postTimestampEl.className = "postedTime";
  postTimestampEl.innerText = moment(post.timestamp).fromNow();
  console.log(post.timestamp)
  postEl.append(postTimestampEl);



  // 出力 (2017年7月1日まで、どれだけあるか)
// console.log( moment( '2017-07-01' ).fromNow() );
  
  //imgを生成する
  const imgEl = document.createElement("img");
  imgEl.src = "https://source.unsplash.com/random/75x50";
  imgEl.alt = "ランダム画像だよ";
  // img1を表示させる
  postEl.append(imgEl);
  const containerEl = document.querySelector("#newsfeed");
  containerEl.prepend(postEl);
}

// function postButtonClick() {
//   const postContent = prompt("What's on your mind?");

//   // フォームから投稿内容を取得するための要素を追加
//   const postForm = document.createElement("div");
//   postForm.className = "post-form";

//   const textArea = document.createElement("textarea");
//   textArea.placeholder = "Write your post...";
//   postForm.appendChild(textArea);

//   const submitButton = document.createElement("button");
//   submitButton.innerText = "Post";
//   submitButton.addEventListener("click", () => {
//     const newPostContent = textArea.value;
//     const newPost = {
//       friend: localStorage.getItem("username"),
//       text: newPostContent
//     };
//     displayPost(newPost);
//     textArea.value = "";  // フォームをクリア
//   });
//   postForm.appendChild(submitButton);

//   const containerEl = document.querySelector("#newsfeed");
//   containerEl.prepend(postForm);
// }






//relodeButtonのクリックイベントを付与
const relodeButton = document.getElementsByClassName("relode-button")[0];
relodeButton.addEventListener("click", relodeButtonClick);

//postButtonのクリックイベントを付与
const postButton = document.getElementsByClassName("post-button")[0];
postButton.addEventListener("click", postButtonClick);