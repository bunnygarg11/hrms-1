import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleIcon from "@material-ui/icons/People";
import AddBoxIcon from "@material-ui/icons/AddBox";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import { setCurrentComponent } from "../../actions/componentActions";
import { connect } from "react-redux";
import Myprofile from "../myprofile";
import AddUser from "../addUser";
import ViewUsers from "../viewUser";
import ViewMyTeam from "../viewMyTeam"
import { viewUsers } from "../../actions/viewUser";
import {viewMyTeam} from "../../actions/viewMyTeam";
import KraRequest from "../kraRequest";

class Adminfeatures extends Component {
  state = {};
  renderComponent = Component => {
    this.props.setCurrentComponent(Component);
  };
  componentDidMount() {
    this.props.viewUsers();
    this.props.viewMyTeam();
  }
  render() {
    const { allusers } = this.props;
    const {myteam}=this.props;
    return (
      <div>
        <ListItem
          button
          onClick={() => {
            this.renderComponent(<Myprofile />);
          }}
        >
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            this.renderComponent(<AddUser />);
          }}
        >
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Add Employee" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            this.renderComponent(< ViewMyTeam myusers={myteam}/>);
          }}
        >
          <ListItemIcon>
            <GroupWorkIcon />
          </ListItemIcon>
          <ListItemText primary="My Team" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            this.renderComponent(<ViewUsers allusers={allusers} />);
          }}
        >
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="View All" />
        </ListItem>
        
        <ListItem
          button
          onClick={() => {
            this.renderComponent(<KraRequest />);
          }}
        >
          <ListItemIcon>
            <NotificationImportantIcon />
          </ListItemIcon>
          <ListItemText primary="KRA Request" />
        </ListItem>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { allusers: state.allusers.all_users 
     ,myteam:state.myteam.myteam
    };
};

export default connect(mapStateToProps, { setCurrentComponent,viewMyTeam, viewUsers })(
  Adminfeatures
);
