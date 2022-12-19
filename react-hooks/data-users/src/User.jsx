import React from "react";

const User = ({ match }) => {
  const [user, setUser] = React.useState(null);
  const { userId } = match.params;

  const fetchUserData = async () => {
    const res = await fetch(`https://api.github.com/users/${userId}`);
    const data = await res.json();
    setUser(data);
  }

  React.useEffect(() => {
    fetchUserData();
  }, [userId]);

  if(!user) {
    return null;
  }

  const { avatar_url, name, location } = user;
  
  return (
    <div className="user">
      <img
        alt="User Avatar"
        src={avatar_url}
        className="user__avatar"
      />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
}

export default User;
