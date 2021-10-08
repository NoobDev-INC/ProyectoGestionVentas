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
import Box from '@mui/material/Box';
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import TextField from '@mui/material/TextField';
import { BsCheckCircleFill, BsXCircleFill, BsPlus } from "react-icons/bs";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import 'styles/Table.css'


const ventas = [
    {
        id: 9411,
        clienteId: 4865401,
        cliente: 'Juan Perez',
        total: 100000,
        detalles: [{ id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }]
    },
    {
        id: 1524,
        clienteId: 7864045,
        cliente: 'José Solarte',
        total: 500000,
        detalles: [{ id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }]
    },
    {
        id: 2454,
        clienteId: 4865401,
        cliente: 'Juan perez',
        total: 50000,
        detalles: [{ id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }]
    },
    {
        id: 9411,
        clienteId: 4865401,
        cliente: 'Juan Perez',
        total: 100000,
        detalles: [{ id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }]
    },
    {
        id: 1524,
        clienteId: 7864045,
        cliente: 'José Solarte',
        total: 500000,
        detalles: [{ id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }]
    },
    {
        id: 2454,
        clienteId: 4865401,
        cliente: 'Juan perez',
        total: 50000,
        detalles: [{ id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }]
    }, {
        id: 9411,
        clienteId: 4865401,
        cliente: 'Juan Perez',
        total: 100000,
        detalles: [{ id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }]
    },
    {
        id: 1524,
        clienteId: 7864045,
        cliente: 'José Solarte',
        total: 500000,
        detalles: [{ id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }]
    },
    {
        id: 2454,
        clienteId: 4865401,
        cliente: 'Juan perez',
        total: 50000,
        detalles: [{ id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }]
    }, {
        id: 9411,
        clienteId: 4865401,
        cliente: 'Juan Perez',
        total: 100000,
        detalles: [{ id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }]
    },
    {
        id: 1524,
        clienteId: 7864045,
        cliente: 'José Solarte',
        total: 500000,
        detalles: [{ id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }]
    },
    {
        id: 2454,
        clienteId: 4865401,
        cliente: 'Juan perez',
        total: 50000,
        detalles: [{ id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }]
    }, {
        id: 9411,
        clienteId: 4865401,
        cliente: 'Juan Perez',
        total: 100000,
        detalles: [{ id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }]
    },
    {
        id: 1524,
        clienteId: 7864045,
        cliente: 'José Solarte',
        total: 500000,
        detalles: [{ id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }]
    },
    {
        id: 2454,
        clienteId: 4865401,
        cliente: 'Juan perez',
        total: 50000,
        detalles: [{ id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }, { id: 1, nombre: 'Test', cantidad: 4, precio: 500 }]
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
    const [open, setOpen] = React.useState({ index: -1, open: false });
    const [itemEdit, setItemEdit] = React.useState({ index: -1, cedula: 0, cliente: '' });
    const [newItem, setNewItem] = React.useState([]);
    const [openDialog, setOpenDialog] = React.useState(false);

    const handlerOpen = (index) => {
        setOpen({ index: index, open: true })
    }
    const handlerClose = (index) => {
        setOpen({ index: index, open: false })
    }
    const handlerUpdate = (index, item) => {
        setItemEdit({ index: index, cedula: item.clienteId, cliente: item.cliente })
    }
    const updateItem = (e) => {
        setItemEdit({ ...itemEdit, [e.target.name]: e.target.value })

    }
    const cancelEdit = () => {
        setItemEdit({ index: -1, cedula: 0, cliente: '' })
    }
    const addNewItem = () => {
        setNewItem([{ id: '', total: '', cedula: '', cliente: '' }])
    }
    const handlerNewItem = (e) => {
        setNewItem([{ ...newItem, [e.target.name]: e.target.value }])
    }
    const handlerOpenDialog = (value) => {
        console.log('CLICK')
        setOpenDialog(value)
    }
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '5%' }}>
            <Paper elevation={3}>
                <TableContainer style={{ maxHeight: 500 }} component={Paper}>
                    <Table stickyHeader sx={{ minWidth: 1000 }} aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center"><a onClick={addNewItem}><BsPlus color="#267a31" size="1.2rem" /></a></StyledTableCell>
                                <StyledTableCell align="center">Id de venta</StyledTableCell>
                                <StyledTableCell align="center">Total</StyledTableCell>
                                <StyledTableCell align="center">Cédula</StyledTableCell>
                                <StyledTableCell align="center">Cliente</StyledTableCell>
                                <StyledTableCell align="center"></StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {newItem.length >= 1 && <>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell></TableCell>
                                    <TableCell align="center"><TextField onChange={handlerNewItem} value={newItem[0].id} name="id" id="standard-basic" variant="standard" /></TableCell>
                                    <TableCell align="center"><TextField onChange={handlerNewItem} value={newItem[0].total} name="total" id="standard-basic" variant="standard" /></TableCell>
                                    <TableCell align="center"><TextField onChange={handlerNewItem} value={newItem[0].cedula} name="cedula" id="standard-basic" variant="standard" /></TableCell>
                                    <TableCell align="center"><TextField onChange={handlerNewItem} value={newItem[0].cliente} name="cliente" id="standard-basic" variant="standard" /></TableCell>
                                    <TableCell align="center">
                                        <div className="table-container-buttons">
                                            <a ><BsCheckCircleFill color="#267a31" size="1.2rem" /></a>
                                            <a onClick={() => { setNewItem([]) }}><BsXCircleFill color="#943232" size="1.2rem" /></a>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            </>}
                            {ventas.map((venta, index) => index === itemEdit.index ? rowUpdate(itemEdit, venta, updateItem, cancelEdit) : normalRow(venta, index, open, handlerOpen, handlerClose, handlerUpdate, handlerOpenDialog))}

                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <Dialog
                open={openDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"¿Desea eliminar el elemento seleccionado?"}
                </DialogTitle>

                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
                    <Button onClick={() => setOpenDialog(false)} autoFocus>
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

const rowUpdate = (itemEdit, venta, updateItem, cancelEdit) => {

    return (
        <>
            <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell>

                </TableCell>
                <TableCell align="center" component="th" scope="row">
                    {venta.id}
                </TableCell>
                <TableCell align="center">{venta.total}</TableCell>
                <TableCell align="center"><TextField value={itemEdit.cedula} onChange={updateItem} name="cedula" id="standard-basic" label="Cedula" variant="standard" /></TableCell>
                <TableCell align="center"><TextField value={itemEdit.cliente} onChange={updateItem} name="cliente" id="standard-basic" label="Cliente" variant="standard" /></TableCell>
                <TableCell align="center">
                    <div className="table-container-buttons">
                        <a ><BsCheckCircleFill color="#267a31" size="1.2rem" /></a>
                        <a onClick={cancelEdit}><BsXCircleFill color="#943232" size="1.2rem" /></a>
                    </div>
                </TableCell>
            </TableRow>
        </>
    )
}
const normalRow = (venta, index, open, handlerOpen, handlerClose, handlerUpdate, handlerOpenDialog) => {
    return (
        <>
            <TableRow
                key={venta.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell>
                    <div onClick={() => open.open && open.index === index ? handlerClose(index) : handlerOpen(index)}>
                        {open.open && open.index === index ? <MdExpandLess /> : <MdExpandMore />}
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
                        <a onClick={() => handlerUpdate(index, venta)}><RiPencilFill color="#267a31" size="1.2rem" /></a>
                        <a onClick={() => handlerOpenDialog(true)}><RiDeleteBin2Fill color="#943232" size="1.2rem" /></a>
                    </div>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open.open && open.index === index} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 5 }}>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow >
                                        <TableCell align="center">Id producto</TableCell>
                                        <TableCell align="center">Nombre</TableCell>
                                        <TableCell align="center">Cantidad</TableCell>
                                        <TableCell align="center" >Precio</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {venta.detalles.map((producto) => (
                                        <TableRow key={producto.id}>
                                            <TableCell align="center" component="th" scope="row">
                                                {producto.id}
                                            </TableCell>
                                            <TableCell align="center">{producto.nombre}</TableCell>
                                            <TableCell align="center">{producto.cantidad}</TableCell>
                                            <TableCell align="center">
                                                {producto.precio}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell rowSpan={3} />
                                        <TableCell colSpan={2}>Subtotal</TableCell>
                                        <TableCell align="right">2</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2}>Iva</TableCell>
                                        <TableCell align="right">4</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2}>Total</TableCell>
                                        <TableCell align="right">5</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}
export default Ventas
