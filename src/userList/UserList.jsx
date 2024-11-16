import { useState } from "react";
import UserCard from "../userCard/UserCard";
import user from "./data/user.json";

export default function UserList() {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleUserClick = (item) => {
        setSelectedUser(item);
    };

    return (
        <div className="container">
            <aside className="userList">
                <ul className="user">
                    {user.map((item) => (
                        <li
                            className="userId"
                            key={item.id}
                            onClick={() => handleUserClick(item)}>
                            <img
                                className="userImg"
                                src={item.image}
                                alt="img"
                            />
                            <h4>{item.name}</h4>
                        </li>
                    ))}
                </ul>
            </aside>
            {selectedUser && (
                <UserCard
                    user={selectedUser}
                    close={() => setSelectedUser(null)}
                />
            )}
        </div>
    );
}
