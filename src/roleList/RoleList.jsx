import React, { useEffect, useState } from "react";

const RoleList = () => {
    return (
        <div className="roleslist">
            <h2>Liste des rôles</h2>
            <ul>
                <li className="role-item">
                    <button className="rmRole">x</button>
                </li>
            </ul>
        </div>
    );
};

export default RoleList;
