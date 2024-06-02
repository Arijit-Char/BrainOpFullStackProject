import React from "react";
import "./Account.scss";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { ReactTyped } from "react-typed";

export default function Account() {
  const likedArray = useSelector((state) => state.likes.likedarray);
  if (!likedArray) {
    return <div>Loading...</div>;
  }
  return (
    <div className="account">
      <div className="profilepic">
        <CgProfile className="pp" />
      </div>
      <div className="name-user">
        <div className="name">Arijit Char</div>
        <div className="username">@arijit_char</div>
      </div>
      <div className="title">
        {" "}
        <ReactTyped
          strings={["Full Stack Developer", "Coder.", "Engineer."]}
          typeSpeed={150}
          loop
        />
      </div>
      <div className="totallikes">
        Total Likes: <span style={{ color: "red" }}>{likedArray.length}</span>
      </div>
    </div>
  );
}
