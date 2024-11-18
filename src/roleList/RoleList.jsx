import React from "react";

const RoleList = ({ roles, setRoles }) => {
    return (
        <div className="roleslist">
            <h2>Liste des rôles</h2>
            <ul>
                {roles.map((role) => (
                    <li
                        key={role.id}
                        className="role-item"
                        style={{ borderColor: role.color, color: role.color }}>
                        {role.name}
                        <button className="rmRole">x</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoleList;
