// fetch("https://randomuser.me/api")
//   .then((response) => response.json())
//   .then((data) => console.log("data :>> ", data))
//   .catch((err) => console.log("err :>> ", err));

// const response = await fetch("https://randomuser.me/api");
// const data = response.json();

const fetchData = async () => {
  const response = await fetch("https://randomuser.me/api");
  const data = await response.json();

  return data;
};

fetchData().then((data) => console.log("data :>> ", data));
