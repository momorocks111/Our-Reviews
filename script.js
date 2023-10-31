const reviews = [
  {
    id: 1,
    name: "Marcus Smith",
    job: "App Developer",
    img: "images/reviewer-1.webp",
    text: "This app has been a game-changer for me! As someone who is new to coding, I was struggling to understand some of the concepts and syntax. But with this app, I've been able to learn at my own pace and feel much more confident in my coding abilities. The interface is intuitive and easy to use, and the app is packed with helpful features and resources. I highly recommend it to anyone who wants to improve their coding skills!",
  },
  {
    id: 2,
    name: "Anna Neeson",
    job: "Software Engineer",
    img: "images/reviewer-2.jpg",
    text: "I've been using this app for a few weeks now, and I'm already seeing a huge improvement in my coding. The app is well-designed and user-friendly, with clear explanations and examples that make it easy to understand even complex concepts. I also appreciate the community aspect of the app, which allows me to connect with other coders and get feedback on my work. Overall, I'm really impressed with this app and would definitely recommend it to others.",
  },
  {
    id: 3,
    name: "Colin Kenwood",
    job: "Game Developer",
    img: "images/reviewer-3.jpg",
    text: "I've tried a lot of coding apps over the years, but this one is by far the best. It's packed with features and resources that make learning to code fun and engaging, and the interface is clean and easy to navigate. I also appreciate the personalized feedback and support from the app's team, which has helped me to improve my coding skills faster than I ever thought possible. If you're serious about learning to code, this app is a must-have!",
  },
  {
    id: 4,
    name: "Daphne Kamber",
    job: "AI Engineer",
    img: "images/reviewer-4.jpg",
    text: "This app is a lifesaver for anyone who wants to learn to code but doesn't know where to start. The tutorials are clear and concise, and the app is packed with helpful features like code completion and syntax highlighting that make coding a breeze. I also appreciate the app's focus on real-world applications, which has helped me to see how coding can be used to solve real problems. Overall, I'm really impressed with this app and would recommend it to anyone who wants to learn to code.",
  },
];

const img = document.querySelector(".reviewer-img");
const name = document.querySelector(".name");
const title = document.querySelector(".title");
const review = document.querySelector(".review");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const surprise = document.querySelector(".surprise");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  name.textContent = item.name;
  title.textContent = item.job;
  review.textContent = item.text;
}

// Next Person
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// Previous Person
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

//Show Random Person
surprise.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
