import React, { useEffect, useState } from 'react'
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
import DialogTitle from '@mui/material/DialogTitle';
import Axios from 'axios'
import 'styles/Table.css'
import { ToastContainer, toast } from 'react-toastify';

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
    const [ventas, setVentas] = useState([])
    const [idDeleteVenta, setIdDeleteVenta] = React.useState(0)
    const [search, setSearch] = React.useState('')

    const notifyAdd = () => toast.success("Venta agregada");
    const notifyDelete = () => toast.success("Venta eliminada");
    const notifyUpdate = () => toast.success("Venta Actualizada");

    useEffect(() => {
        getVentas()
    }, [])

    const getVentas = async () => {
        try {
            const venta = await Axios.get('http://localhost:5000/ventas')
            setVentas(venta.data)

        } catch (error) {
            console.log(error)
        }
    }

    const handlerOpen = (index) => {
        setOpen({ index: index, open: true })
    }
    const handlerClose = (index) => {
        setOpen({ index: index, open: false })
    }
    const handlerUpdate = (index, item) => {
        setItemEdit({ index: index, cedula: item.cedula, cliente: item.cliente })
    }
    const updateItem = (e) => {
        setItemEdit({ ...itemEdit, [e.target.name]: e.target.value })

    }
    const cancelEdit = () => {
        setItemEdit({ index: -1, cedula: 0, cliente: '' })
    }
    const addNewItem = () => {
        setNewItem([{ total: '', cedula: '', cliente: '' }])
    }
    const handlerNewItem = (e) => {
        setNewItem([{ ...newItem[0], [e.target.name]: e.target.value }])
    }
    const handlerOpenDialog = (value, id = 0) => {
        setOpenDialog(value)
        setIdDeleteVenta(id)
    }
    const addedVenta = async () => {
        try {
            console.log(newItem[0])
            const venta = await Axios.post('http://localhost:5000/ventas', { ...newItem[0], detalles: [] })

            if (venta.status === 200) {
                setNewItem([])
                getVentas()
                notifyAdd()

            }
        } catch (error) {
            setNewItem([])
        }

    }
    const deleteVenta = async () => {
        try {
            const venta = await Axios.delete('http://localhost:5000/ventas/' + idDeleteVenta)
            if (venta.status === 200) {
                setOpenDialog(false)
                getVentas()
                notifyDelete()
            }
        } catch (error) {
            console.log(error)
        }
    }
    const updateVenta = async (id) => {
        try {
            const venta = await Axios.patch('http://localhost:5000/ventas/' + id, {
                cedula: itemEdit.cedula,
                cliente: itemEdit.cliente
            })
            if (venta.status === 200) {
                getVentas()
                setItemEdit({ index: -1, estado: '', rol: '' })
                notifyUpdate()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '1000px', display: 'flex' }}>
                <TextField name="search" onChange={handleChange} placeholder="Buscar..." />
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px' }}>
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
                                        <TableCell align="center"><TextField onChange={handlerNewItem} value={newItem[0]._id} name="id" id="standard-basic" variant="standard" /></TableCell>
                                        <TableCell align="center"><TextField onChange={handlerNewItem} value={newItem[0].total} name="total" id="standard-basic" variant="standard" /></TableCell>
                                        <TableCell align="center"><TextField onChange={handlerNewItem} value={newItem[0].cedula} name="cedula" id="standard-basic" variant="standard" /></TableCell>
                                        <TableCell align="center"><TextField onChange={handlerNewItem} value={newItem[0].cliente} name="cliente" id="standard-basic" variant="standard" /></TableCell>
                                        <TableCell align="center">
                                            <div className="table-container-buttons">
                                                <a ><BsCheckCircleFill onClick={() => addedVenta()} color="#267a31" size="1.2rem" /></a>
                                                <a onClick={() => { setNewItem([]) }}><BsXCircleFill color="#943232" size="1.2rem" /></a>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                </>}
                                {ventas.filter((item, index) => String(item._id).includes(String(search)) || String(item.cedula).includes(String(search)) || String(item.cliente).includes(String(search))).map((venta, index) => index === itemEdit.index ? rowUpdate(itemEdit, venta, updateItem, cancelEdit, updateVenta) : normalRow(venta, index, open, handlerOpen, handlerClose, handlerUpdate, handlerOpenDialog))}

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
                        <Button onClick={() => deleteVenta()} autoFocus>
                            Aceptar
                        </Button>
                    </DialogActions>
                </Dialog>
                <ToastContainer position="bottom-right" />
            </div>
        </div>
    )
}

const rowUpdate = (itemEdit, venta, updateItem, cancelEdit, updateVenta) => {

    return (
        <>
            <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell>

                </TableCell>
                <TableCell align="center" component="th" scope="row">
                    {venta._id}
                </TableCell>
                <TableCell align="center">{venta.total}</TableCell>
                <TableCell align="center"><TextField value={itemEdit.cedula} onChange={updateItem} name="cedula" id="standard-basic" label="Cedula" variant="standard" /></TableCell>
                <TableCell align="center"><TextField value={itemEdit.cliente} onChange={updateItem} name="cliente" id="standard-basic" label="Cliente" variant="standard" /></TableCell>
                <TableCell align="center">
                    <div className="table-container-buttons">
                        <a ><BsCheckCircleFill onClick={() => { updateVenta(venta._id) }} color="#267a31" size="1.2rem" /></a>
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
                key={venta._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell>
                    <div onClick={() => open.open && open.index === index ? handlerClose(index) : handlerOpen(index)}>
                        {open.open && open.index === index ? <MdExpandLess /> : <MdExpandMore />}
                    </div>
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                    {venta._id}
                </TableCell>
                <TableCell align="center">{venta.total}</TableCell>
                <TableCell align="center">{venta.cedula}</TableCell>
                <TableCell align="center">{venta.cliente}</TableCell>
                <TableCell align="center">
                    <div className="table-container-buttons">
                        <a onClick={() => handlerUpdate(index, venta)}><RiPencilFill color="#267a31" size="1.2rem" /></a>
                        <a onClick={() => handlerOpenDialog(true, venta._id)}><RiDeleteBin2Fill color="#943232" size="1.2rem" /></a>
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
