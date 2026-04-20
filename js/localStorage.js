let users = [{
        id: 1,
        email: "ahmed@gmail.com",
        password: "123456",
        firstName: "Ahmed",
        lastName: "Ali",
        country: "Egypt",
        city: "Cairo",
        skills: ["HTML", "CSS"],
        posts: [1, 3, 6 ],
        connections: [{userId:2, status: "pending"},
          {userId:3, status: "pending"}
        ]
      },
      {
        id: 2,
        email: "sara@gmail.com",
        password: "123456",
        firstName: "Sara",
        lastName: "Mohamed",
        country: "Egypt",
        city: "Alexandria",
        skills: ["JavaScript"],
        posts: [2, 5],
        connections: [{userId:1, status: "pending"}]
      },
      {
        id: 3,
        email: "mark@gmail.com",
        password: "123456",
        firstName: "mark",
        lastName: "martin",
        country: "USA",
        city: "New York",
        skills: ["React"],
        posts: [4],
        connections: [{userId:1, status: "pending"}]
      }];
let posts = [
  {
    id: 1,
    userId: 1,
    content: "Today I realized that consistency beats motivation. Even on days when you don't feel like working, showing up and doing a small task can build momentum. Over time, these small efforts turn into something meaningful and impactful.",
    time: "09:15",
    likes: 27
  },
  {
    id: 2,
    userId: 2,
    content: "Building real-world projects is the fastest way to improve your development skills. You face real problems, think critically, and learn how to structure your code properly instead of just following tutorials blindly.",
    time: "11:40",
    likes: 31
  },
  {
    id: 3,
    userId: 1,
    content: "Debugging is like solving a mystery. Every error message is a clue, and every fix is a step closer to understanding your system better. The more you debug, the better developer you become.",
    time: "13:05",
    likes: 24
  },
  {
    id: 4,
    userId: 3,
    content: "Soft skills are just as important as technical skills. Being able to communicate your ideas clearly and work effectively with a team can make a huge difference in your career growth.",
    time: "15:30",
    likes: 22
  },
  {
    id: 5,
    userId: 2,
    content: "Writing clean code is an investment in your future. It might take more time initially, but it makes your project easier to scale, debug, and maintain in the long run.",
    time: "18:10",
    likes: 29
  },
  {
    id: 6,
    userId: 1,
    content: "Learning never stops in tech. There is always a new framework, tool, or concept to explore. The key is not to chase everything, but to build strong fundamentals and adapt when needed.",
    time: "20:45",
    likes: 33
  }
];


setUsersToLocalStorage('users', users)
users = getUsersFromLocalStorage('users');

setUsersToLocalStorage('posts', posts)
posts = getUsersFromLocalStorage('posts');

function getUsersFromLocalStorage(key) {
  let result = JSON.parse(localStorage.getItem(key));
  return Array.isArray(result) ? result : [];
}

function setUsersToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
