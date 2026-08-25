import { Link, Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/reducers">Reducers</Link> |{" "}
        <Link to="/contexts">Contexts</Link>
      </nav>

      <hr />

      <Outlet />
    </>
  );
}
