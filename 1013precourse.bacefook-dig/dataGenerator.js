/*
  This generates our fake newsfeed information.

  There is no need to touch the code in here until you get to basic requirement #4,
  but please check it out to familiarize yourself beforehand.
*/
(() => {
  window.bacefook = {};
  bacefook.newsfeed = [];
  bacefook.friends = {};
  bacefook.friendNames = ["tamaroh", "kani", "eriko", "tsubasa", "masataka"];
  bacefook.icons = [
    "icons/1.png",
    "icons/2.png",
    "icons/3.png",
    "icons/4.png",
    "icons/5.png",
    "icons/6.png",
    ];
  bacefook.friendNames.forEach(name => {
    bacefook.friends[name] = [];
  });

  console.log(bacefook)

  const getRandomElement = array => {
    // Given an array, returns a random element
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const starters = [
    "totally just",
    "just",
    "completely",
    "waaaaah! i",
    "i just",
    "a salaryman",
    "a salaryman",
    "yesterday I",
    "a ninja",
    "my boss"
  ];
  const verbs = [
    "ate",
    "drank",
    "threw up in",
    "refactored",
    "iterated on",
    "thought about",
    "threw up on",
    "saw",
    "walked to",
    "got lost in",
    "walked into",
    "googled",
    "drove",
    "ran to",
    "worked on",
    "slept on",
    "slept in"
  ];
  const fillers = [
    "my",
    "your",
    "his",
    "her",
    "my favorite",
    "a beautiful",
    "a delicious",
    "that",
    "this",
    "an interesting",
    "",
    "the best",
    "the greatest",
    "a delightful"
  ];
  const nouns = [
    "DIG",
    "restaurant",
    "omakase",
    "hitomedia",
    "family mart",
    "private jet",
    "mama",
    "lawsons",
    "conbini",
    "whisky",
    "onigiri",
    "car",
    "food",
    "house",
    "toilet",
    "tokyo",
    "city",
    "iphone",
    "google",
    "unicorn",
    "mess",
    "pirate ship",
    "ninja"
  ];
  const hashtags = [
    "#DIG",
    "#techlife",
    "#toyota",
    "#tokyo",
    "#japan",
    "#interesting",
    "#til",
    "#lol",
    "#tgifriday",
    "#hashtags",
    "#japanlife",
    "#oops",
    ""
  ];
  const feelings = [
    "😄",
    "😎",
    "😍",
    "🤮",
    "😱",
    "😫",
    "😡",
    "😤",
    "🤩",
  ];
  const images = [
    "images/1.jpeg",
    "images/2.jpeg",
    "images/3.jpg",
    "images/4.JPG",
    "images/5.JPG",
    "images/6.JPG",
    "images/7.JPG",
    "images/8.JPG",
    "images/9.JPG",
    "images/10.jpg",
    "images/11.JPG",
    "images/12.JPG",
    "images/13.JPG",
  ];

  const generateRandomText = () => {
    return [
      getRandomElement(starters),
      getRandomElement(verbs),
      getRandomElement(fillers),
      getRandomElement(nouns),
      getRandomElement(feelings),
      getRandomElement(hashtags),
    ].join(" ");
  };

  // const generatePostObj = timeOffset => {
  //   // if an offset is provided, make the timestamp that much older, otherwise just use the current time
  //   const timestamp = timeOffset
  //     ? new Date(new Date().getTime() - timeOffset)
  //     : new Date();

  //   return {
  //     friend: getRandomElement(bacefook.friendNames),
  //     text: generateRandomText(),
  //     feeling: getRandomElement(feelings),
  //     image: getRandomElement(images),
  //     timestamp
  //   };
  // };
  
  // windowオブジェクトに generatePostObj を追加
  window.generatePostObj = timeOffset => {
    // if an offset is provided, make the timestamp that much older, otherwise just use the current time
    const timestamp = timeOffset
      ? new Date(new Date().getTime() - timeOffset)
      : new Date();

    return {
      friend: getRandomElement(bacefook.friendNames),
      icon:getRandomElement(bacefook.icons),
      text: generateRandomText(),
      feeling: getRandomElement(feelings),
      image: getRandomElement(images),
      hashtag:getRandomElement(hashtags),
      timestamp
    };
  };

  console.log(generatePostObj())

  const addPost = obj => {
    const friend = obj.friend;
    bacefook.friends[friend].push(obj);
    bacefook.newsfeed.push(obj);
  };

  const createPost = timeOffset => {
    const newPost = generatePostObj(timeOffset);
    addPost(newPost);
  };

  for (let i = 0; i < 10; i++) {
    // make the starting posts look like they were posted over the course of the past day
    const timeOffset = (2 * (10 - i) + Math.random()) * 60 * 60 * 1000;
    createPost(timeOffset);
  }

  const scheduler = () => {
    createPost(null);
    setTimeout(scheduler, (3 + Math.random() * 5) * 1000); // generate a new post every 3 to 8 seconds
  };

  scheduler();
})();
