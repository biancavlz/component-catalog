import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function UserAuthenticationProfile() {
  const [user, setUser] = useState(null);

  function login(username) {
    setUser({ name: username });
  }

  function logout(username) {
    setUser(null);
  }

  return (
    <AuthContext value={{ login, logout, user }}>
      <NavBar />
      <MainContent />
    </AuthContext>
  );
}

function NavBar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      <p>{user ? `welcome ${user.name}` : "Not logged in "}</p>

      {user && <button onClick={logout}>Logout</button>}
    </nav>
  );
}

function MainContent() {
  const { user, login } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <p>Hi ${user.name}! Enjoy</p>
      ) : (
        <button onClick={() => login("John Doe")}>Login</button>
      )}
    </div>
  );
}

export default UserAuthenticationProfile;
