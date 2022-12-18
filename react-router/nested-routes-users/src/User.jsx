import React from "react";

class Product extends React.Component {
  state = {
    userData: null
  }

  componentDidMount() {
    const { userId } = this.props.match.params;
    
    this.fetchUserData(userId);
  }

  componentDidUpdate() {
    const { userId } = this.props.match.params;
    
    this.fetchUserData(userId);
  }

  fetchUserData = async (userId) => {
    try {
      const res = await fetch(`https://api.github.com/users/${userId}`);

      if(!res.ok) {
        throw new Error('Server error');
      }
      const data = await res.json();

      this.setState({ userData: data });
    } catch(err) {
      alert(err.message);
    }
  }

  render() {
    const { userData } = this.state;

    if (!userData) {
      return null;
    }
    
    const { avatar_url, location, name } = userData;

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
}

export default Product;