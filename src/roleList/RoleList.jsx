import React from "react";
import axios from "axios";
import api from "../api";

const RoleList = ({ roles, setRoles }) => {
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5001/api/roles/${id}`);

            // Mise à jour des rôles après suppression
            setRoles((prevRoles) => prevRoles.filter((role) => role.id !== id));
        } catch (error) {
            console.error("Erreur lors de la suppression du rôle : ", error);
        }
    };

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
                        <button
                            className="rmRole"
                            onClick={() => handleDelete(role.id)}>
                            x
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoleList;
