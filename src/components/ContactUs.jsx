import React, { Component } from 'react'
import { connect } from 'react-redux'

import {indigo500} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';


class ContactUs extends Component {
  render() {

    return (
      <div className="contac-us grid">
        <h1>Contact Us</h1>

        <Paper
          style={{padding: '10px'}} 
          zDepth={1}
          rounded={false} 
          children={
            <div>
              <Avatar style={{marginRight: '20px'}} backgroundColor={indigo500} icon={<i className="fa fa-facebook" aria-hidden="true"></i>} />
              Facebook
              <RaisedButton 
                label="Visit page >"
                backgroundColor={indigo500}
                labelColor="#fff"
                style={{float:'right'}}
                href="https://www.facebook.com/4eyal"
                />
            </div>
            }
          />
      </div>
    );
  }
}

export default connect(null, {})(ContactUs)
