export default function UserCard({ user, close }) {
    return (
        <>
            <div className="userCard">
                <button className="closeBtn" onClick={close}>
                    <img src="/svg/close.svg" alt="" />
                </button>
                <img className="userCardImg" src={user.image} alt="PP" />
                <div>
                    <h2>{user.name}</h2>
                    <h4>@{user.pseudo}</h4>
                </div>
            </div>
        </>
    );
}
