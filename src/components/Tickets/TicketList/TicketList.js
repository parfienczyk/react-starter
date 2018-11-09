import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// common
import EnhancedTableHead from 'components/common/table/TableHead/TableHead';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

const CustomPaginationActionsTable = ({
  classes,
  items,
  columns,
  queryParams,
  children,
  onChangeParams,
  onChangeSorting,
}) => {
  const handleChangePage = (event, page) => onChangeParams({ page });

  const handleChangeSort = (event, orderBy) => onChangeSorting(orderBy);

  const handleChangeRowsPerPage = event =>
    onChangeParams({ limit: event.target.value });

  const { limit, page, order, orderBy } = queryParams;
  const emptyRows = limit - Math.min(limit, items.length - page * limit);

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table className={classes.table}>
          <EnhancedTableHead
            columns={columns}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleChangeSort}
          />
          <TableBody>
            {items.slice(page * limit, page * limit + limit).map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell numeric>{row.userId}</TableCell>
                <TableCell numeric>{row.id}</TableCell>
                <TableCell numeric>{row.id}</TableCell>
                <TableCell numeric>{row.id}</TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 48 * emptyRows }}>
                <TableCell colSpan={columns.length} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                colSpan={columns.length}
                count={items.length}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 25, 50]}
                labelRowsPerPage="Item per page:"
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>

      <h1>children: {children}</h1>
    </Paper>
  );
};

CustomPaginationActionsTable.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  items: PropTypes.array,
  columns: PropTypes.array,
  queryParams: PropTypes.object,
  onChangeParams: PropTypes.func,
  onChangeSorting: PropTypes.func,
};

CustomPaginationActionsTable.defaultProps = {
  items: [],
  columns: [],
  queryParams: {
    page: 0,
    limit: 10,
    order: 'desc',
    orderBy: 'name',
  },
};
export default withStyles(styles)(CustomPaginationActionsTable);
