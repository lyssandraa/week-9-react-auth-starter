export const signUp = async (username, email, password) => {
  const response = await fetch("http://localhost:5001/users/", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  const data = await response.json();
  console.log(data);
  return data;
};

export const logIn = async (username, password) => {
  const response = await fetch("http://localhost:5001/users/login", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const data = await response.json();
  console.log(data);

  return data;
};

export const getAllUsers = async (token, role) => {
  if (role !== "admin") {
    return { message: "Access forbidden: Insufficient privileges" };
  }

  const response = await fetch("http://localhost:5001/users/getAllUsers", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  console.log(data);
  return { users: data.users };
};
