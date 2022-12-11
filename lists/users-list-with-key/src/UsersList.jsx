import React from "react";
import User from "./User";

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: props.users,
      sortText: '-'
    }
  }

  handleSortUsers = () => {
    const { users, sortText } = this.state;
    let copyUsers = [...users];
    const isCurrentSortByDesc = sortText === '-' || sortText === 'desc';
    
    copyUsers = copyUsers.sort((a, b) => isCurrentSortByDesc ? (a.age - b.age) : (b.age - a.age));
    this.setState({
      users: copyUsers,
      sortText: isCurrentSortByDesc ? 'asc' : 'desc'
    })
  }

  render() {
    const { users, sortText } = this.state;

    return (
      <div>
        <button class="btn" onClick={this.handleSortUsers}>{sortText}</button>
        <ul class="users">
          {users.map(user => <User key={user.name} {...user} />)}
        </ul>
      </div>
    );
  }
}

export default UsersList;
