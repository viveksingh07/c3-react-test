import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteUserProfile } from '../actions';

export class UserProfile extends Component {

  render() {
    const { avatar, first_name, last_name, id } = this.props.user;
    return (
      <div className="profile-card">
        <div className="avatar-container">
          <img src={ avatar } alt="Avatar not available" />
        </div>
        <div className="profile-card-body">
          <div className="profile-name-container">
            <span>{ first_name } { last_name }</span>
          </div>
          <div className="delete-profile-link">
            <span onClick={ () => this.props.deleteUserProfile(id) }>Delete</span>
          </div>
        </div>
      </div>
    );
  }
}

export default connect( null, { deleteUserProfile } )( UserProfile );
