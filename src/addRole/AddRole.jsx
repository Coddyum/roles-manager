import { useState } from "react";

export default function AddRole() {
    const [showCreateRole, setShowCreateRole] = useState(false);

    const handleShowClick = () => {
        setShowCreateRole(true);
    };

    return (
        <>
            <button className="addRoleBtn" onClick={handleShowClick}>
                +
            </button>
        </>
    );
}
