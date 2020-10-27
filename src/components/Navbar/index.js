import React, { useState } from "react";
import classNames from "classnames";
import "./style.css";
import { NavLink } from "react-router-dom";
const Navbar = (props) => {
  const arrayPost = [
    { id: "/post/1", name: "Fitness Mantra To Live Fit Life" },
    { id: "/post/2", name: "Beautiful & Special Moment" },
    { id: "/post/3", name: "Beauti lies within special" },
    { id: "/post/4", name: "Sliding My Way To Life" },
    { id: "/post/5", name: "Memories From Last Summer" },
  ];

  const [search, setSearch] = useState(false);
  const submitSearch = (e) => {
    e.preventDefault();
  };
  const openSearch = () => {
    if (search === true) {
      let searchKey = document.getElementById("1").value.toLowerCase();
      let dem = 0;
      if (searchKey == "") {
        searchKey = -1;
      }

      arrayPost.forEach((e) => {
        let toLowerCase = e.name.toLowerCase();
        if (toLowerCase.search(searchKey) != -1) {
          document.getElementById("2").href = e.id;
          return;
        } else {
          dem++;
        }
      });
      if (dem === 5) {
        alert("Không tìm thấy kêt quả !");
      }
    }
    setSearch(true);
  };
  return (
    <div className="navbar">
      <ul className="navbarMenu">
        <li>
          {" "}
          <NavLink to="/">Home</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/about-us">About Us</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/contact-us">Contact Us</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/post">Post</NavLink>{" "}
        </li>
      </ul>
      <div className="search">
        <div></div>
        <form onSubmit={submitSearch}>
          <input
            id="1"
            type="text"
            placeholder="Seach"
            className={classNames("searchinput", {
              searchinputclose: search == false,
              searchinputopen: search == true,
            })}
          />
          <a id="2">
            <img
              onClick={openSearch}
              src={require("../../assets/icons/search.png")}
              alt="Search"
              className="searchicon"
            />
          </a>
        </form>
      </div>
    </div>
  );
};
export default Navbar;
