import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Skeleton from '@material-ui/lab/Skeleton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import EditIcon from '@material-ui/icons/Edit'
import TablePagination from '@material-ui/core/TablePagination';
import Popover from '@material-ui/core/Popover';
import ApiEditComponent from './ApiEdit';

const useStyles = makeStyles({
  root: {
    paddingLeft: "10px"
  },
  table: {
    minWidth: 650,
  },
  title: {
    flex: '1 1 100%',
    fontWeight: "600",
    color: "#3785e6"
  },
});

function createData(url, des, method, input) {
  return { url, des, method, input };
}

const rows = [
  createData('https://material-ui.com/components/tables/#table', 'Api upload article', 'GET', null),
  createData('https://material-ui.com/components/tables/#table', 'Api upload article', 'POST', { imageBlobData: "Blob data" }),
  createData('https://material-ui.com/components/tables/#table', 'Api upload article', 'PUT',  { id: "string" }),
  createData('https://material-ui.com/components/tables/#table', 'Api upload article', 'GET', null),
  createData('https://material-ui.com/components/tables/#table', 'Api upload article', 'POST', null),
  createData('https://material-ui.com/components/tables/#table', 'Api upload article', 'PUT', null),
  createData('https://material-ui.com/components/tables/#table', 'Api upload article', 'GET', null),
  createData('https://material-ui.com/components/tables/#table', 'Api upload article', 'POST', null),
  createData('https://material-ui.com/components/tables/#table', 'Api upload article', 'PUT', null),
];

export default function SimpleTable() {
  const classes = useStyles();
  // Define state
  const [loading, setLoading] = useState(true);
  const [rowsPerPage] = React.useState(5);
  const [data, setData] = useState([])
  const [page, setPage] = React.useState(0);
  //-----------------
  const handleClick = (event, index) => {
    if (index >= 0) {
      var newData = data.map((item, i) => {
        if (i === index) {
          item.openEditState = {
            isOpen: true,
            id: 'simple-popover',
            anchorEl: event.currentTarget
          };
        }
        return item;
      });
      setData(newData);
    }
  };
  const handleClose = () => {
    const newData = data.map(item => {
      item.openEditState = {
        isOpen: false,
        id: undefined,
        anchorEl: null
      }
      return item;
    });
    setData(newData);
  };
  //-----------------
  // TODO: delete
  function dummy() {
    setLoading(false);
    rows.map(item => {
      item.openEditState = {
        isOpen: false,
        id: undefined,
        anchorEl: null
      }
      return item;
    });
    setData(rows);
  }
  useEffect(() => {
    setTimeout(() => {
      dummy();
    }, 2000);
  }, [])
  //---------------------
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleEditButton = function (data) {
    console.log(data);
  };
  return (
    <React.Fragment>
      <Toolbar className={classes.root}>
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          API List
        </Typography>
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 600 }}>Api url</TableCell>
              <TableCell style={{ fontWeight: 600 }} align="left">Description</TableCell>
              <TableCell style={{ fontWeight: 600 }} align="left">Method</TableCell>
              <TableCell style={{ fontWeight: 600 }} align="right">Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? Array.from(new Array(3)).map((row, index) => {
              return <TableRow key={index}>
                <TableCell component="th" scope="row">
                  <Skeleton />
                </TableCell>
                <TableCell align="left"><Skeleton /></TableCell>
                <TableCell align="left"><Skeleton /></TableCell>
                <TableCell align="right"><Skeleton /></TableCell>
              </TableRow>
            }) :
              data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {data.url}
                  </TableCell>
                  <TableCell align="left">{data.des}</TableCell>
                  <TableCell align="left">{data.method}</TableCell>
                  <TableCell align="right">
                    <IconButton color="primary" component="span" style={{ padding: "0 10px" }} onClick={(event) => handleClick(event, index)}>
                      <EditIcon></EditIcon>
                    </IconButton>
                    <Popover
                      id={data.openEditState.isOpen ? 'simple-popover' : undefined}
                      open={data.openEditState.isOpen}
                      anchorEl={data.openEditState.anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                    >
                      <ApiEditComponent data={data}></ApiEditComponent>
                    </Popover>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
      />
    </React.Fragment>
  );
}
