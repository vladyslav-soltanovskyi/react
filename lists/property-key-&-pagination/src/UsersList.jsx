import React from "react";
import Pagination from "./Pagination";
import User from "./User";

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 3
    }
  }

  goPrev = () => this.setState({ currentPage: this.state.currentPage - 1 })

  goNext = () => this.setState({ currentPage: this.state.currentPage + 1 })
  
  render() {
    const { currentPage, itemsPerPage } = this.state;
    const { users } = this.props;
    const fromUser = (currentPage - 1) * itemsPerPage;
    const toUser = currentPage * itemsPerPage;
    const copyUsers = users.slice(fromUser, toUser);
    const totalItems = users.length;
    
    return (
      <div>
        <Pagination
          totalItems={totalItems}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          goNext={this.goNext}
          goPrev={this.goPrev}
        />
        <ul className="users">
          {copyUsers.map(user => <User key={user.id} {...user}/>)}
        </ul>
      </div>
    );
  }
}

export default UsersList;
