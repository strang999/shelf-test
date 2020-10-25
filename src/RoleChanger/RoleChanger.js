import React, { Component } from "react";

export default class RoleChanger extends Component {
  render() {
    return (
      <>
        <label for="">User Role</label>
        <select name="" id="">
          <option selected value="admin">
            Admin
          </option>
          <option value="user">User</option>
          <option value="member">Member</option>
        </select>
      </>
    );
  }
}
