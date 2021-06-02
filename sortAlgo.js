
const Posts = [
  {
    id: 1,
    desc: "Love For All, Hatred For None.",
    photo: "assets/post/1.jpeg",
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comment: 9,
    createdAt: "2021-05-28T06:52:52.131+00:00",
  },
  {
    id: 2,
    photo: "assets/post/2.jpeg",
    date: "15 mins ago",
    userId: 2,
    like: 2,
    comment: 1,
    createdAt: "Wed Jun 02 2021 14:50:31 GMT+0600 (Bangladesh Standard Time)"
  },
  {
    id: 3,
    desc: "Every moment is a fresh beginning.",
    photo: "assets/post/3.jpeg",
    date: "1 hour ago",
    userId: 3,
    like: 61,
    comment: 2,
    createdAt: "2021-05-28T05:36:06.309+00:00",
  },
  {
    id: 4,
    photo: "assets/post/4.jpeg",
    date: "4 hours ago",
    userId: 4,
    like: 7,
    comment: 3,
    createdAt: "Wed Jun 02 2021 14:44:59 GMT+0600 (Bangladesh Standard Time)",
  },
];


const sortByDate = Posts.sort((p1, p2) => {
    return new Date(p2.createdAt)-new Date(p1.createdAt)
})

console.log(sortByDate)