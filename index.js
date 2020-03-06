import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Image, Menu, Icon, Dropdown, Grid, List } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    const menuStyle = { color: "white", margin: 5}
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item position="fitted left" style={menuStyle}>HOME</Menu.Item>
            <Menu.Item position="fitted left" style={menuStyle}>MISSION</Menu.Item>
            <Dropdown item text="PRODUCTS & SERVICES">

              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="ABOUT US">
              <Dropdown.Menu>
                <Dropdown.Item>null</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item style={menuStyle}>CONTACT</Menu.Item>
            <Menu.Item position="right" style={menuStyle}><Icon name="search"/></Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class Middle extends React.Component {
  render() {
    const gridStyle = { height: "500px" };
    return (
        <div className="murphys-background">

        </div>
    )
  }
}

class BottomMenu extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Grid container columns="one">
            <Grid.Row centered>
              lc) 2017 Three Peaks <br/> Photos taken by Aki Lily Photography <br/> Site created by ICS 314 <br/>

            </Grid.Row>
          </Grid>
        </div>
    )
  }
}

class Murphys extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <Middle/>
          <BottomMenu/>
        </div>
    );
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));