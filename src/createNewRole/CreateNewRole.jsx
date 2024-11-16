import axios from "axios";
import { useState } from "react";

export default function CreateNewRole() {
    const [name, setName] = useState("");
    const [color, setColor] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5001/roles", {
                name,
                color,
            });
            console.log("Role créé :", response.data);
            setName("");
            setColor("");
        } catch (error) {
            console.error("Erreur lors de la création du rôle", error);
        }
    };

    return (
        <>
            <div>
                <h1>Create New Role</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name :
                        <input
                            type="text"
                            value={name} // Correction de 'requiredvalue' en 'value'
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
        </>
    );
}
