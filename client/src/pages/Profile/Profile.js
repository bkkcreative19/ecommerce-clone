import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { Context } from "../../context/context";

const Profile = (props) => {
  const { logOut, profile } = useContext(Context);

  return (
    <div>
      {profile ? (
        <>
          <h1>{profile.name}</h1>
          <h5>{profile.email}</h5>
          <button onClick={() => logOut(props)}>Log Out</button>
        </>
      ) : (
        <h2>nope</h2>
      )}
    </div>
  );
};

export default withRouter(Profile);
