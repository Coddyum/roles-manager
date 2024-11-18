import { useState, useEffect } from "react";
import RoleList from "../roleList/RoleList";
import api from "../api";

export default function CreateNewRole() {
    return (
        <>
            <div className="newRole">
                <h2>Create New Role</h2>
                <form>
                    <div className="formInput">
                        <input type="text" required placeholder="Role Name" />
                        <input type="color" required />
                    </div>
                    <button type="submit">Add New Role</button>
                </form>
            </div>

            {/* Passer roles et setRoles à RoleList */}
            <RoleList />
        </>
    );
}
