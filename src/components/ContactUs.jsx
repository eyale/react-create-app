import React, { Component } from 'react'
import { connect } from 'react-redux'

import {indigo500,pink500,blue500,grey900} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';


class ContactUs extends Component {
  render() {

    return (
      <div className="contac-us grid">
        <h1>Contact Us</h1>

        <Paper
          style={{padding: '10px', margin:'10px 0'}} 
          zDepth={1}
          rounded={false} 
          children={
            <div>
              <Avatar
                style={{marginRight: '20px'}}
                backgroundColor={pink500}
                icon={<i style={{width:'auto'}} className="fa fa-envelope-o" aria-hidden="true"></i>} />
              Email
              <RaisedButton 
                label="Contact us >"
                backgroundColor={indigo500}
                labelColor="#fff"
                style={{float:'right'}}
                href="mailto:4eyalush@gmail.com"
                />
            </div>
            }
          />
        <Paper
          style={{padding: '10px', margin:'10px 0'}} 
          zDepth={1}
          rounded={false} 
          children={
            <div>
              <Avatar
                style={{marginRight: '20px'}}
                backgroundColor={blue500} 
                icon={<i style={{width:'auto'}} className="fa fa-facebook" aria-hidden="true"></i>} />
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
        <Paper
          style={{padding: '10px', margin:'10px 0'}} 
          zDepth={1}
          rounded={false} 
          children={
            <div>
              <Avatar
                style={{marginRight: '20px'}}
                backgroundColor={indigo500}
                icon={<i style={{width:'auto'}} className="fa fa-linkedin" aria-hidden="true"></i>} />
              LinkedIn
              <RaisedButton 
                label="Visit page >"
                backgroundColor={indigo500}
                labelColor="#fff"
                style={{float:'right'}}
                href="https://www.linkedin.com/in/anton-honcharov-04216791/"
                />
            </div>
            }
          />
        <Paper
          style={{padding: '10px', margin:'10px 0'}} 
          zDepth={1}
          rounded={false} 
          children={
            <div>
              <Avatar
                style={{marginRight: '20px'}}
                backgroundColor={grey900}
                icon={<i style={{width:'auto'}} className="fa fa-github" aria-hidden="true" />} />
              Github
              <RaisedButton 
                label="Visit page >"
                backgroundColor={indigo500}
                labelColor="#fff"
                style={{float:'right'}}
                href="https://github.com/eyale/"
                />
            </div>
            }
          />
      </div>
    );
  }
}

export default connect(null, {})(ContactUs)
