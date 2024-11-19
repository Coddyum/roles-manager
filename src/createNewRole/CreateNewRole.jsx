import RoleList from "../roleList/RoleList";

export default function CreateNewRole() {
    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="newRole">
                <h2>Create New Role</h2>
                <form onSubmit={handleSubmit}>
                    <div className="formInput">
                        <input type="text" required placeholder="Role Name" />
                        <input type="color" required />
                    </div>
                    <button type="submit">Add New Role</button>
                </form>
            </div>

            <RoleList />
        </>
    );
}
