import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Card, CardHeader, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
import {indigo500, lightBlue500, green600, yellow700} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';

class HowItWorks extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      expanded1: true,
      expanded2: false,
      expanded3: false,
      expanded4: false,
    };
  }
  handleExpandChange = (cardNumber) => {
    switch(cardNumber) {
      case 'card1':
        this.setState({expanded1: !this.state.expanded1});
        break;
      case 'card2':
        this.setState({expanded2: !this.state.expanded2});
        break;
      case 'card3':
        this.setState({expanded3: !this.state.expanded3});
        break;
      case 'card4':
        this.setState({expanded3: !this.state.expanded4});
        break;
      default:
      break
    }
  };

  render() {
    return (
      <div className="how-it-works grid">
        <h1>Ameen Merchant App</h1>
        <Card expanded={this.state.expanded1} onExpandChange={() => this.handleExpandChange('card1')}>
          <CardHeader
            title="How to Setup"
            avatar={<Avatar backgroundColor={indigo500} icon={<FontIcon className="material-icons">assignment</FontIcon>} />}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            <List style={{marginLeft: '50px'}}>
              <ListItem 
                primaryText="Step 1:"
                secondaryText="git clone this repo" />
              <ListItem 
                primaryText="Step 2:"
                secondaryText="cd to the cloned repo" />
              <ListItem 
                primaryText="Step 1:"
                secondaryText="install the Application with yarn or npm i" />
            </List>
          </CardText>
        </Card>

        <Card style={{marginTop: '10px'}} expanded={this.state.expanded2} onExpandChange={() => this.handleExpandChange('card2')}>
          <CardHeader
            title="How to Run the App"
            avatar={<Avatar backgroundColor={lightBlue500} icon={<FontIcon className="material-icons">help</FontIcon>} />}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText style={{marginLeft: '50px'}}>
            <code>npm start</code>
          </CardText>
        </Card>
        
        <Card style={{marginTop: '10px'}} expanded={this.state.expanded3} onExpandChange={() => this.handleExpandChange('card3')}>
          <CardHeader
            title="Standart Compliant"
            avatar={<Avatar backgroundColor={green600} icon={<FontIcon className="material-icons">flag</FontIcon>} />}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText style={{marginLeft: '50px'}}>
            <code>npm run build</code>
          </CardText>
        </Card>
        
        <Card style={{marginTop: '10px'}} expanded={this.state.expanded3} onExpandChange={() => this.handleExpandChange('card3')}>
          <CardHeader
            title="Secrets"
            avatar={<Avatar backgroundColor={yellow700} icon={<FontIcon className="material-icons">visibility</FontIcon>} />}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText style={{marginLeft: '50px'}} expandable={true}>
            <p>
              <a href="https://github.com/eyale/react-create-app">This project </a>
              uses react-native-config bla-bla-bla...
              <code>nav</code>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Quia quibusdam quam, porro in aperiam accusamus quaerat eum beatae atque rem omnis molestiae 
              consequuntur sapiente pariatur cupiditate fuga nihil dolore? Voluptas.
              <code className="block">
                API_URL=https://some.com
                <br/>
                GOOGLE_MAPS_API_KEY=alksdajshhlkahjsl
              </code>
            </p>
          </CardText>
        </Card>
      </div>
    );
  }
}


export default connect(null, {})(HowItWorks)
