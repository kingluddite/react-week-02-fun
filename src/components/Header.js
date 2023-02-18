import React from "react";
import "./Header.css";

const Header = ({ person, nflTeamsArr }) => {
  // console.log(props);
  // console.log(nflTeamsArr[0].Name);
  // const teamsArr = nflTeamsArr.map((team) => {
  //   <div>yo</div>;
  // });
  // console.log(teamsArr);
  return (
    <div className="my-header">
      {nflTeamsArr.map((team) => (
        <div key={team.ID}>{team.Name}</div>
      ))}
      <span>{person.firstName}</span>
    </div>
  );
};

export default Header;
