import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Menu from '../components/Dashboard/Menu';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: '#53bff3',
    },
  },
});

// View Component
const AboutViewContent = lazy(() => import('./About'));
const ApiManagementViewContent = lazy(() => import('./ApiManagement'));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  footer: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    left: '0'
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Router>
          <Menu></Menu>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="xl" className={classes.container}>
              <Grid container spacing={3}>
                <Suspense fallback={<div>Loading...</div>}>
                  <Switch>
                    <Route exact path="/" component={ApiManagementViewContent}></Route>
                    <Route path="/about" component={AboutViewContent}></Route>
                  </Switch>
                </Suspense>
              </Grid>
              <Box pt={4} className={classes.footer}>
                <Copyright />
              </Box>
            </Container>
          </main>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}