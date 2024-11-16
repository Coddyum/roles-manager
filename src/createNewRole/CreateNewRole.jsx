import { useState } from "react";
import RoleList from "../roleList/RoleList";
import api from "../api";

export default function CreateNewRole() {
    const [name, setName] = useState("");
    const [color, setColor] = useState("#000000");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/roles", { name, color });
            console.log("Role Created:", response.data);

            setName("");
            setColor("");
        } catch (error) {
            console.error("Error Creating Role:", error.response.data);
        }
    };

    return (
        <>
            <div className="newRole">
                <h2>Create New Role</h2>
                <form onSubmit={handleSubmit}>
                    <div className="formInput">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="Role Name"
                        />
                        <input
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Add New Role</button>
                </form>
            </div>
            <RoleList />
        </>
    );
}
