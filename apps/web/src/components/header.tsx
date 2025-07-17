import { Link } from "@tanstack/react-router";

import UserMenu from "./user-menu";

export default function Header() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/pricing", label: "Pricing" },
    { to: "/downloads", label: "Downloads" },
    { to: "/about", label: "Dashboard" },
  ];

  return (
    <>
      <header className="flex flex-row items-center justify-between p-4">
        <a className="flex items-center gap-2">
          <img src="/todo.png" width="40" height="40" />
          <span>DOB4</span>
        </a>
        <nav className="flex gap-4 rounded-md">
          {links.map(({ to, label }) => {
            return (
              <Link key={to} to={to}>
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <UserMenu />
        </div>
      </header>
    </>
  );
}
