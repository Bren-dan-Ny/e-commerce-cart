// components/CategoriaDropdown.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/categorydropdown.css";

export default function CategoriaDropdown({
  icon,
  label,
  items = [],
  sidebarOpen,
}) {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    if (sidebarOpen) setOpen(!open); // Solo permite abrir si está abierto
  };

  return (
    <div className="custom-dropdown border-bottom">
      <button
        className="btn w-100 d-flex align-items-center justify-content-between"
        onClick={toggleDropdown}
      >
        <div className="d-flex p-2 align-items-center ">
          <i className={`bi ${icon}`} style={{ fontSize: "1.3rem" }}></i>
          {sidebarOpen && <span className="ms-2">{label}</span>}
        </div>
        {sidebarOpen && (
          <i className={`bi ${open ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
        )}
      </button>

      {open && sidebarOpen && (
        <div className="dropdown-items mt-1">
          {items.map((item, idx) => (
            <NavLink
              to={`/categoria/${item.toLowerCase()}`}
              className="dropdown-item "
              key={idx}
            >
              {item}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
