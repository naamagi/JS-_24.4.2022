const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];
const displayUsers = (users) => {
  const ol = document.createElement("ol");
  ol.setAttribute("style", "list-style-type: none");
  const div = document.createElement("div");
  document.querySelector("body").appendChild(div).appendChild(ol);
  users.forEach((user) => {
    const li = document.createElement("li");
    li.setAttribute("data-id", `${user.id}`);
    li.innerText = `${user.firstName} ${user.lastName}`;
    ol.appendChild(li);
  });
};
displayUsers(users);
