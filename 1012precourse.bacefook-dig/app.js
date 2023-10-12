//headbarのスタイルを適応する

//星空のスタイルを適応する
window.addEventListener("DOMContentLoaded", () => {
  // 星を表示するための親要素を取得
  const stars = document.querySelector(".stars");

  // 星を生成する関数
  const createStar = () => {
    const starEl = document.createElement("span");
    starEl.className = "star";
    const minSize = 1; // 星の最小サイズを指定
    const maxSize = 2; // 星の最大サイズを指定
    const size = Math.random() * (maxSize - minSize) + minSize;
    starEl.style.width = `${size}px`;
    starEl.style.height = `${size}px`;
    starEl.style.left = `${Math.random() * 100}%`;
    starEl.style.top = `${Math.random() * 100}%`;
    starEl.style.animationDelay = `${Math.random() * 10}s`;
    stars.appendChild(starEl);
  };

  // for文で星を生成する関数を指定した回数呼び出す
  for (let i = 0; i <= 500; i++) {
    createStar();
  }
});

//自動でpostを生成する
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
  usernameEl.innerText = "ようこそ、 " + username + " さん";

  // headbar要素を取得
  const headbarEl = document.querySelector("#headbar");

  // headbar内にusernameEl要素を追加
  headbarEl.append(usernameEl);

  const containerEl = document.querySelector("#newsfeed");
  // containerEl.className = "main_all_container";

  // This makes things appear
  for (let index = bacefook.newsfeed.length - 1; index >= 0; index--) {
    const post = bacefook.newsfeed[index];

    const mainUserEl = document.createElement("div");
    mainUserEl.className = "main-user-container";
    // icon画像作成
    const friendIconEl = document.createElement("img");
    friendIconEl.src = post.icon;
    friendIconEl.alt = "アイコン画像だよ";
    friendIconEl.className = "iconImg";

    // iconを表示
    mainUserEl.append(friendIconEl);

    // usernameを作成
    const friendEl = document.createElement("div");
    friendEl.className = "friend";
    friendEl.innerText = post.friend;
    // usernameを表示
    mainUserEl.append(friendEl);

    //post領域全体を囲う
    const postEl = document.createElement("div");
    postEl.className = "main-post-container";

    //lmainUserEleftに寄せる要素をまとめる
    const postLeftEl = document.createElement("div");
    postLeftEl.className = "main-post-left";
    //表示させるテキストを指定
    const postLeftTextEl = document.createElement("p");
    postLeftTextEl.innerText = post.text;
    // postLeftEl.innerText = post.text;
    // postLeftEl.className = "main__post";
    postLeftTextEl.className = "main-post-text";

    postLeftEl.append(mainUserEl);
    postLeftEl.append(postLeftTextEl);
    //user表示を追加

    //timestampを生成

    //postTimeから経過時間を生成
    const elapsedTimeEl = document.createElement("div");
    elapsedTimeEl.className = "postedTime";
    elapsedTimeEl.innerText = `posted ${moment(post.timestamp).fromNow()}`;
    mainUserEl.append(elapsedTimeEl);

    postEl.append(postLeftEl);

    //timestampを追加

    const postTimestampEl = document.createElement("div");
    postTimestampEl.className = "main-post-timestamp";

    postTimestampEl.innerText = post.timestamp;
    postLeftEl.append(postTimestampEl);
    //imgを表示させる
    const imgEl = document.createElement("img");
    imgEl.src = post.image;
    imgEl.alt = "ランダム画像だよ";
    imgEl.className = "post-img";
    postEl.append(imgEl);

    containerEl.append(postEl);
    // console.log(bacefook.newsfeed.length)
  }
});

//relodeボタンに機能を付与
function relodeButtonClick() {
  
  // //postを生成する
  const post = bacefook.newsfeed[bacefook.newsfeed.length - 1];

  const mainUserEl = document.createElement("div");
  mainUserEl.className = "main-user-container";
  // icon画像作成
  const friendIconEl = document.createElement("img");
  friendIconEl.src = post.icon;
  friendIconEl.alt = "アイコン画像だよ";
  friendIconEl.className = "iconImg";

  // iconを表示
  mainUserEl.append(friendIconEl);

  // usernameを作成
  const friendEl = document.createElement("div");
  friendEl.className = "friend";
  friendEl.innerText = post.friend;
  // usernameを表示
  mainUserEl.append(friendEl);

  //post領域全体を囲う
  const postEl = document.createElement("div");
  postEl.className = "main-post-container";

  //lmainUserEleftに寄せる要素をまとめる
  const postLeftEl = document.createElement("div");
  postLeftEl.className = "main-post-left";
  //表示させるテキストを指定
  const postLeftTextEl = document.createElement("p");
  postLeftTextEl.innerText = post.text;
  // postLeftEl.innerText = post.text;
  // postLeftEl.className = "main__post";
  postLeftTextEl.className = "main-post-text";

  postLeftEl.append(mainUserEl);
  postLeftEl.append(postLeftTextEl);
  //user表示を追加

  //timestampを生成

  //postTimeから経過時間を生成
  const elapsedTimeEl = document.createElement("div");
  elapsedTimeEl.className = "postedTime";
  elapsedTimeEl.innerText = `posted ${moment(post.timestamp).fromNow()}`;
  mainUserEl.append(elapsedTimeEl);

  postEl.append(postLeftEl);

  //timestampを追加

  const postTimestampEl = document.createElement("div");
  postTimestampEl.className = "main-post-timestamp";
  
  postTimestampEl.innerText = post.timestamp;
  postLeftEl.append(postTimestampEl);
  //imgを表示させる
  const imgEl = document.createElement("img");
  imgEl.src = post.image;
  imgEl.alt = "ランダム画像だよ";
  imgEl.className = "post-img";
  postEl.append(imgEl);
  
  //postを格納するcontainerを作成する
  const containerEl = document.querySelector("#newsfeed");
  containerEl.prepend(postEl);
  
}

//postボタンに機能を付与
function postButtonClick() {
  
  const post = bacefook.newsfeed[bacefook.newsfeed.length - 1];
  console.log(post);
  
  const mainUserEl = document.createElement("div");
  mainUserEl.className = "main-user-container";
  // icon画像作成
  const friendIconEl = document.createElement("img");
  friendIconEl.src = post.icon;
  friendIconEl.alt = "アイコン画像だよ";
  friendIconEl.className = "iconImg";

  // iconを表示
  mainUserEl.append(friendIconEl);

  // usernameを作成
  const friendEl = document.createElement("div");
  friendEl.className = "friend";
  friendEl.innerText = localStorage.getItem("username");
  // usernameを表示
  mainUserEl.append(friendEl);
  
  //post領域全体を囲う
  const postEl = document.createElement("div");
  postEl.className = "main-post-container";
  
  //lmainUserEleftに寄せる要素をまとめる
  const postLeftEl = document.createElement("div");
  postLeftEl.className = "main-post-left";
  
  //入力された値を取得
  const posted = document.getElementById("post").value;
  console.log(posted);

  //表示させるテキストを指定
  const postLeftTextEl = document.createElement("p");
  postLeftTextEl.innerText = posted + " " + post.feeling + " " + post.hashtag;
  postLeftTextEl.className = "main-post-text";

  postLeftEl.append(mainUserEl);
  postLeftEl.append(postLeftTextEl);
  //user表示を追加

  //timestampを生成

  //postTimeから経過時間を生成
  const elapsedTimeEl = document.createElement("div");
  elapsedTimeEl.className = "postedTime";
  elapsedTimeEl.innerText = `posted ${moment(post.timestamp).fromNow()}`;
  mainUserEl.append(elapsedTimeEl);

  postEl.append(postLeftEl);

  //timestampを追加
  
  const postTimestampEl = document.createElement("div");
  postTimestampEl.className = "main-post-timestamp";
  
  postTimestampEl.innerText = post.timestamp;
  postLeftEl.append(postTimestampEl);
  //imgを表示させる
  const imgEl = document.createElement("img");
  imgEl.src = post.image;
  imgEl.alt = "ランダム画像だよ";
  imgEl.className = "post-img";
  postEl.append(imgEl);
  
  //postを格納するcontainerを作成する
  const containerEl = document.querySelector("#newsfeed");
  containerEl.prepend(postEl);
  // containerEl.append(postEl);
  
  // 入力フィールドの値をクリアする
  document.getElementById("post").value = "";

  // //post領域全体を囲う
  // const postEl = document.createElement("div");
  // postEl.className = "main-post-container";

  // //leftに寄せる要素をまとめる
  // const postLeftEl = document.createElement("div");
  // postLeftEl.className = "main-post-left";


  // //userを表示させる
  // const friendEl = document.createElement("div");
  // friendEl.className = "friend";
  // friendEl.innerText = post.friend;
  
  // //user表示を追加
  // postLeftEl.append(friendEl);
  
  // //timestampを追加
  // postLeftEl.append(post.timestamp);
  
  // //postTimeから経過時間を生成
  // const elapsedTimeEl = document.createElement("div");
  // elapsedTimeEl.className = "postedTime";
  // elapsedTimeEl.innerText = moment(post.timestamp).fromNow();
  // postLeftEl.append(elapsedTimeEl);
  
  // postEl.append(postLeftEl);

  // //imgを表示させる
  // const imgEl = document.createElement("img");
  // imgEl.src = post.image;
  // imgEl.alt = "ランダム画像だよ";
  // imgEl.className = "post-img";
  // postEl.append(imgEl);
  
  // //  containerEl.append(postEl);
  
  
  
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
      //   });
      //   postForm.appendChild(submitButton);
      
      //   const containerEl = document.querySelector("#newsfeed");
      //   containerEl.prepend(postForm);
      // }
      //     displayPost(newPost);
      //     textArea.value = "";  // フォームをクリア
      
      //relodeButtonのクリックイベントを付与
      const relodeButton = document.getElementsByClassName("relode-button")[0];
      relodeButton.addEventListener("click", relodeButtonClick);

      //postButtonのクリックイベントを付与
      const postButton = document.getElementsByClassName("post-button")[0];
      postButton.addEventListener("click", postButtonClick);
      