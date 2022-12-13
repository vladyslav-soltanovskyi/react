import React from "react";

class UserForm extends React.Component {
  state = {
    name: '',
    student: false,
    occupation: '',
    about: ''
  }

  onChange = ({ target }) => this.setState({ [target.name]: target.value });

  onChangeChecked = ({ target }) => this.setState({ [target.name]: target.checked });
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    const { name, student, occupation, about } = this.state;
    
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" for="name">Name</label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={this.onChange}
          />
        </div>
        <div className="form-control">
          <label className="form-label" for="student">Student</label>
          <input
            className="form-input"
            type="checkbox"
            id="student"
            name="student"
            value={student}
            onChange={this.onChangeChecked}
          />
        </div>
        <div className="form-control">
          <label className="form-label" id="occupation" for="occupation">Occupation</label>
          <select
            name="occupation"
            value={occupation}
            onChange={this.onChange}
            className="form-input"
          >
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="coconut">Sidney</option>
            <option value="mango">Berlin</option>
          </select>
        </div>
        <div className="form-control">
          <label
            className="form-label"
            id="about"
            for="about"
          >About</label>
          <textarea
            name="about"
            value={about}
            onChange={this.onChange}
            className="form-input"
          ></textarea>
        </div>
        <button className="submit-button" type="submit">Submit</button>
      </form>
    );
  }
}

export default UserForm;
