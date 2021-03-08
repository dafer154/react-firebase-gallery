import { getAllProducts, getAllProductsColumns } from '../../services/DataService'
import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SpinnerCustom from '../shared/SpinnerCustom';
import './styles/Products.css';
import { Row, Columns } from '../../models/Products.Model';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


const useStyles = makeStyles({
    table: {
        minWidth: 800,
    },
});

const Products = () => {

    const [rows, setRows] = useState<any>(null);
    const [columns, setColumns] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        getAllData();
    }, [])


    const getAllData = async () => {
        const productsData: any = await getAllProducts();
        const productsColumns: any = await getAllProductsColumns();
        setRows(productsData.data.productsPage.products);
        setColumns(productsColumns.data.productsPage.columnsProducts);
        setLoading(false);
    }

    const classes = useStyles();

    return (
        <div className="container">
            <h1>Table products</h1>
            {loading && <SpinnerCustom />}
            <div className="container-table">
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                {
                                    columns && columns.map((col: Columns) => (
                                        <StyledTableCell key={col.field} align="center">{col.headerName}</StyledTableCell>
                                    ))
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows && rows.map((row: Row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell align="center">{row.number}</StyledTableCell>
                                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                                    <StyledTableCell align="center">{row.date}</StyledTableCell>
                                    <StyledTableCell align="center">{row.sku}</StyledTableCell>
                                    <StyledTableCell align="center">{row.weight}</StyledTableCell>
                                    <StyledTableCell align="center">{row.height}</StyledTableCell>
                                    <StyledTableCell align="center">{row.width}</StyledTableCell>
                                    <StyledTableCell align="center">{row.origin}</StyledTableCell>
                                    <StyledTableCell align="center">{row.minimum}</StyledTableCell>
                                    <StyledTableCell align="center">{row.delay}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </div>
    );
};

export default Products;