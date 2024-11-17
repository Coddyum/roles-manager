import React, { useEffect, useState } from "react";
import axios from "axios";
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
    }, []); // Tableau de dépendances vide pour ne l'exécuter qu'une seule fois au montage

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5001/api/roles/${id}`);

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
                        <button onClick={() => handleDelete(role.id)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoleList;
