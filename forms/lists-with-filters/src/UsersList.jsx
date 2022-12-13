import React from "react";
import Filter from "./Filter";
import User from "./User";

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    }
  }

  handleChangeFilter = (e) => this.setState({ filterText: e.target.value });
  
  render() {
    const { filterText } = this.state;
    const { users } = this.props;
    
    const filteredUsers = users.filter(({ name }) => name.toLowerCase().includes(filterText.toLocaleLowerCase()));
    
    return (
      <div>
        <Filter
          count={5}
          filterText={filterText}
          onChange={this.handleChangeFilter}
        />
        <ul className="users">
          {filteredUsers.map(user => <User key={user.id} {...user} />)}
        </ul>
      </div>
    );
  }
}

export default UsersList;
