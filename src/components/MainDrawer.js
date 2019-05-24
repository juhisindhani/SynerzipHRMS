import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { withStyles } from '@material-ui/core/styles';
import Synerzip_logo from '../images/Synerzip_Logo.png'
import {onResetBtnClick, onSearchBtnClick} from "../actionCreators/directoryActionCreator";
import connect from "react-redux/es/connect/connect";
import {onMenuSelection} from "../actionCreators/appActionCreator";
import SearchDirectoryComponent from "../assignment1/SearchDirectoryComponent";
import ContentComponent from "../assignment1/ContentComponent";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        height: 64,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});

class MainDrawer extends React.Component {
    state = {
        mobileOpen: false,
        titles: 'Dashboard'
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };
    handleClick = (text) => {
        this.props.onMenuSelection(text)

    };
    handleClickLeave = () => {
        this.setState(state => ({ open: !state.open }));
    };

    render() {
        const { classes, theme, selectedMenu } = this.props;

        const drawer = (
            <div>
                <div className={classes.toolbar}>
                    <img width="200" height="50"
                        src={Synerzip_logo}
                        alt=""
                    />
                </div>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Dashboard" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="PIM" />
                    </ListItem>
                    <ListItem button onClick={this.handleClickLeave}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Leave" />
                        {this.state.open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText inset primary="Apply" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText inset primary="My Leave" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText inset primary="Leave List" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText inset primary="Assign Leave" />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
                <List>
                    {['Directory'].map((text, index) => (
                        <ListItem button key={text} onClick={() => this.handleClick(text)}>
                            <InboxIcon />
                            <ListItemText primary={text} />
                        </ListItem>
                        ))}
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            {selectedMenu}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer}>
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={this.props.container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <ContentComponent/>
                </main>
            </div>
        );
    }
}

MainDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};
const mapStateToProps = state => {
    return {
        selectedMenu: state.appReducer.selectedMenu
    }
};

const connectTheComponent = connect(
    mapStateToProps,
    {onMenuSelection}
)(MainDrawer);

export default withStyles(styles, { withTheme: true })(connectTheComponent);