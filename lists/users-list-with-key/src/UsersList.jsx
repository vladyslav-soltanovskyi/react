import React from "react";
import User from "./User";

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sorting: ''
    }
  }

  handleChangeSort = () => {
    const { sorting } = this.state;
    const newSorting = sorting === 'asc' ? 'desc' : 'asc';

    this.setState({
      sorting: newSorting
    })
  }
  
  render() {
    const { sorting } = this.state;
    const { users } = this.props;
    const isCurrentSortByDesc = sorting === 'desc';
    let copyUsers = [...users];
    
    if (['asc', 'desc'].includes(sorting)) {
      copyUsers = [...users].sort((a, b) => isCurrentSortByDesc ? (b.age - a.age) : (a.age - b.age));
    }
    
    return (
      <div>
        <button class="btn" onClick={this.handleChangeSort}>{sorting || '-'}</button>
        <ul class="users">
          {copyUsers.map(user => <User key={user.name} {...user} />)}
        </ul>
      </div>
    );
  }
}

export default UsersList;
