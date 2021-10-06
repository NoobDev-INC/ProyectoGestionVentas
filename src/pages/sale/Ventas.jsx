import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { RiDeleteBin2Fill, RiPencilFill } from "react-icons/ri";
import Collapse from '@mui/material/Collapse';
import { MdExpandMore, MdExpandLess } from "react-icons/md";

import 'styles/Table.css'

const ventas = [
    {
        id: 9411,
        clienteId: 4865401,
        cliente: 'Juan Perez',
        total: 100000
    },
    {
        id: 1524,
        clienteId: 7864045,
        cliente: 'José Solarte',
        total: 500000
    },
    {
        id: 2454,
        clienteId: 4865401,
        cliente: 'Juan perez',
        total: 50000
    },
    {
        id: 9411,
        clienteId: 4865401,
        cliente: 'Juan Perez',
        total: 100000
    },
    {
        id: 1524,
        clienteId: 7864045,
        cliente: 'José Solarte',
        total: 500000
    },
    {
        id: 2454,
        clienteId: 4865401,
        cliente: 'Juan perez',
        total: 50000
    }, {
        id: 9411,
        clienteId: 4865401,
        cliente: 'Juan Perez',
        total: 100000
    },
    {
        id: 1524,
        clienteId: 7864045,
        cliente: 'José Solarte',
        total: 500000
    },
    {
        id: 2454,
        clienteId: 4865401,
        cliente: 'Juan perez',
        total: 50000
    }, {
        id: 9411,
        clienteId: 4865401,
        cliente: 'Juan Perez',
        total: 100000
    },
    {
        id: 1524,
        clienteId: 7864045,
        cliente: 'José Solarte',
        total: 500000
    },
    {
        id: 2454,
        clienteId: 4865401,
        cliente: 'Juan perez',
        total: 50000
    }, {
        id: 9411,
        clienteId: 4865401,
        cliente: 'Juan Perez',
        total: 100000
    },
    {
        id: 1524,
        clienteId: 7864045,
        cliente: 'José Solarte',
        total: 500000
    },
    {
        id: 2454,
        clienteId: 4865401,
        cliente: 'Juan perez',
        total: 50000
    }

];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 18,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 100,
        maxHeight: 100,
    },
}));

const Ventas = (props) => {
    const [open, setOpen] = React.useState(false);
    const [element, setElement] = React.useState(false);
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '5%' }}>
            <Paper elevation={3}>
                <TableContainer style={{ maxHeight: 500 }} component={Paper}>
                    <Table stickyHeader sx={{ minWidth: 1000 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center"></StyledTableCell>
                                <StyledTableCell align="center">Id de venta</StyledTableCell>
                                <StyledTableCell align="center">Total</StyledTableCell>
                                <StyledTableCell align="center">Id cliente</StyledTableCell>
                                <StyledTableCell align="center">Cliente</StyledTableCell>
                                <StyledTableCell align="center"></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ventas.map((venta, index) => (
                                <>
                                    <TableRow
                                        key={venta.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>
                                            <div onClick={() => { setOpen(!open); setElement(index) }}>
                                                {open ? <MdExpandLess /> : <MdExpandMore />}
                                            </div>
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row">
                                            {venta.id}
                                        </TableCell>
                                        <TableCell align="center">{venta.total}</TableCell>
                                        <TableCell align="center">{venta.clienteId}</TableCell>
                                        <TableCell align="center">{venta.cliente}</TableCell>
                                        <TableCell align="center">
                                            <div className="table-container-buttons">
                                                <a><RiPencilFill color="#267a31" size="1.2rem" /></a>
                                                <a><RiDeleteBin2Fill color="#943232" size="1.2rem" /></a>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                            <Collapse in={open && element === index} timeout="auto" unmountOnExit>
                                                Test
                                            </Collapse>
                                        </TableCell>
                                    </TableRow>
                                </>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    )
}

export default Ventas
