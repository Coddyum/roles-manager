import React, { useEffect, useState } from "react";

const RoleList = () => {
    const [roles, setRoles] = useState([]);

    return (
        <div className="roleslist">
            <h2>Liste des rôles</h2>
            <ul>
                {roles.map((role) => (
                    <li key={role._id} style={{ color: role.color }}>
                        {role.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoleList;
