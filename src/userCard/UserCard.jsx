import { useState } from "react";
import CreateNewRole from "../createNewRole/CreateNewRole";

export default function UserCard({ user, close }) {
    const [showCreateNewRole, setShowCreateNewRole] = useState(false);

    if (!user) return null;

    const handleAddRoleClick = () => {
        setShowCreateNewRole(true);
    };

    return (
        <>
            <div className="userCard">
                <button className="closeBtn" onClick={close}>
                    <img src="/svg/close.svg" alt="" />
                </button>
                <img className="userCardImg" src={user.image} alt="image" />
                <div>
                    <h2>{user.name}</h2>
                    <h4>@{user.pseudo}</h4>
                </div>
                <button className="addRole" onClick={handleAddRoleClick}>
                    +
                </button>
            </div>

            {showCreateNewRole && <CreateNewRole />}
        </>
    );
}
