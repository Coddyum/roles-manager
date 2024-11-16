import { useState } from "react";
import RoleList from "../roleList/RoleList";

export default function CreateNewRole() {
    const [name, setName] = useState("");
    const [color, setColor] = useState("#000000");

    return (
        <>
            <div className="newRole">
                <h2>Create New Role</h2>
                <form>
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
