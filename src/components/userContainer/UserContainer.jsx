import { useEffect, useState } from "react";

import UserCard from "./userCard/UserCard";

import "./UserContainer.css";
import { getAllUsers } from "../../utils/fetch";

const UserContainer = ({ loggedUser, isLoggedIn }) => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  console.log("logged user in usercontainer", loggedUser.user.token);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getAllUsers(
        loggedUser.user.token,
        loggedUser.user.role
      );
      console.log("Fetched users:", data.users);
      if (data.message === "Access forbidden: Insufficient privileges") {
        setMessage("Access denied: You do not have sufficient privileges.");
        setUsers([]);
      } else if (data.message) {
        setMessage(data.message);
        setUsers([]);
      } else {
        setUsers(data.users || []);
        setMessage("");
      }
    };

    fetchUsers();
  }, [isLoggedIn]);

  return (
    <div className="flex flex-column container">
      {message && <p>{message}</p>}
      <div className="flex flex-row inner-container user-inner-container">
        {users.length >= 1 ? (
          users.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <p>No users</p>
        )}
      </div>
    </div>
  );
};

export default UserContainer;
