import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadInitialProfiles, addMoreProfiles } from '../actions';

import UserProfile from './UserProfile';

export class PearsonUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 4,
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
          id: 5,
          first_name: "Charles",
          last_name: "Morris",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
          id: 6,
          first_name: "Tracey",
          last_name: "Ramos",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
      ]
    };
  }

  componentDidMount() {
    this.props.loadInitialProfiles(this.state.users); // To load initial profiles from component state to application state via action creator
  }

  render() {
    return (
      <div className="pearon-users">
        <div className="pearson-heading-container">
          <h1>Pearson User Management</h1>
          <button onClick={ () => this.props.addMoreProfiles() }>Fetch Profiles</button>
        </div>
        <div className="user-profiles-container">
          {
            this.props.userProfilesList.map((user,index) => {
              return (
                <UserProfile
                  key={index}
                  user={user}
                />
              )
            })
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    userProfilesList: state.userProfilesList
  };
}

export default connect( mapStateToProps, { loadInitialProfiles, addMoreProfiles } )( PearsonUsers );
