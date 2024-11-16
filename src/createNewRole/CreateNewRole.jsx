import { useState } from "react";
import RoleList from "../roleList/RoleList";

export default function CreateNewRole() {
    const [name, setName] = useState("");
    const [color, setColor] = useState("#000000");

    return (
        <>
            <div className="newRole">
                <h1>Create New Role</h1>
                <form>
                    <label>
                        Name :
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Color :
                        <input
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <button type="submit">Add New Role</button>
                </form>
            </div>
            <RoleList />
        </>
    );
}
