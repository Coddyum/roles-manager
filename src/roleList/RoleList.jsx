import React, { useEffect, useState } from "react";
import api from "../api";

const RoleList = () => {
    const [roles, setRoles] = useState([]);

    const fetchRoles = async () => {
        try {
            const response = await api.get("/roles");
            setRoles(response.data);
        } catch (error) {
            console.error("Error fetching roles:", error.response.data);
        }
    };

    useEffect(() => {
        fetchRoles();
    });

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
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoleList;
