import React from "react";

class Dimensions extends React.Component {
  state = {
    user: null
  }
  
  fetchUserData = async (id) => {
    const res = await fetch(`https://api.github.com/users/${id}`);
    return await res.json();
  }
  
  componentDidMount() {
    this.fetchUserData(this.props.userId)
      .then(user => {
        this.setState({ user })
      })
  }
  

  render() {
    const { user } = this.state;

    if(!user) {
      return null;
    }

    const { avatar_url, name, location } = user;
    
    return (
      <div class="user">
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
}

export default Dimensions;
