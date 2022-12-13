import React from "react";

class UserForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(this.formRef));
    this.props.onSubmit(formData);
  }

  setRef = (node) => {
    this.formRef = node;
  }

  render() {
    return (
      <form ref={this.setRef} className="login-form" onSubmit={this.handleSubmit}>
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" for="name">Name</label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div className="form-control">
          <label className="form-label" for="student">Student</label>
          <input
            className="form-input"
            type="checkbox"
            id="student"
            name="student"
          />
        </div>
        <div className="form-control">
          <label className="form-label" id="occupation" for="occupation">Occupation</label>
          <select
            name="occupation"
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
            className="form-input"
          ></textarea>
        </div>
        <button className="submit-button" type="submit">Submit</button>
      </form>
    );
  }
}

export default UserForm;
