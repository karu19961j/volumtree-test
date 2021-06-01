export const updateLocalStorage = (data, type, action) => {
  const users = JSON.parse(localStorage.getItem("userList"));
  switch (type) {
    case "add":
      data.id = users[users.length - 1].id + 1;
      users.push(data);
      action(users);
      setLocalStorage("userList", JSON.stringify(users));
      break;
    case "edit":
      users[data.index] = data;
      delete data.index;
      action(users);
      setLocalStorage("userList", JSON.stringify(users));
      break;
    case "delete":
      const filteredUsers = users.filter(
        (_, index) => index !== data.userIndex
      );
      action(filteredUsers);
      setLocalStorage("userList", JSON.stringify(filteredUsers));
      break;
    // TODO
    default:
      users.push(data);
      action(users);
      setLocalStorage("userList", JSON.stringify(users));
  }
};

const setLocalStorage = (key, data) => {
  localStorage.setItem(key, data);
};
