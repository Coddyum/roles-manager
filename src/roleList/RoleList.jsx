import React, { useEffect, useState } from "react";
import axios from "axios";

const RoleList = () => {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await axios.get("http://localhost:5001/roles");
                setRoles(response.data);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des rôles",
                    error
                );
            }
        };
        fetchRoles();
    }, []);

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
