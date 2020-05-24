import React from "react"
import { Grid, makeStyles } from '@material-ui/core';
import OneElement from '../components/Dashboard/CssPractice/OneElement'
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Slide from '@material-ui/core/Slide';
import { useCodePenEmbed } from 'react-codepen-prefill-embed';
import ReactHtmlParser from 'react-html-parser';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  root: {
    minHeight: '90vh',
  },
  'articles__wrap': {
    marginTop: '30px'
  },
  'article__wrap': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default function CssPractice() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (cssLink) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useCodePenEmbed();

  var output = `<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="Queryeleison" data-slug-hash="xxGoJBa" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Marceline Morph">
  <span>See the Pen <a href="https://codepen.io/Queryeleison/pen/xxGoJBa">
  Marceline Morph</a> by Álex S. Lérida (<a href="https://codepen.io/Queryeleison">@Queryeleison</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>`;

  return (
    <Container className={classes.root}>
      This is CssPractice
      <Grid container className={classes.articles__wrap}>
        <Grid item lg={4} className={classes.article__wrap}>
          <OneElement openDialog={handleClickOpen}></OneElement>
        </Grid>
        <Grid item lg={4} className={classes.article__wrap}>
          <OneElement></OneElement>
        </Grid>
        <Grid item lg={4} className={classes.article__wrap}>
          <OneElement></OneElement>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        fullWidth
        maxWidth="lg"
      >
        {ReactHtmlParser(output)}
        <DialogActions>
        </DialogActions>
      </Dialog>
    </Container>
  )
}