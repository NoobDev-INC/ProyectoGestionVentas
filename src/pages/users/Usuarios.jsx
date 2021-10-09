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
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import 'styles/Table.css'


const usuarios = [
    {
        rol: 'vendedor',
        nombre: 'Juan perez',
        id: 45,
        estado: 'activo'

    },
    {
        rol: 'vendedor',
        nombre: 'Juan perez',
        id: 12,
        estado: 'activo'

    },

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

const Usuarios = (props) => {
    const [open, setOpen] = React.useState({ index: -1, open: false });
    const [itemEdit, setItemEdit] = React.useState({ index: -1, estado: '', rol: '' });
    const [newItem, setNewItem] = React.useState([]);
    const [openDialog, setOpenDialog] = React.useState(false);

    const handlerOpen = (index) => {
        setOpen({ index: index, open: true })
    }
    const handlerClose = (index) => {
        setOpen({ index: index, open: false })
    }
    const handlerUpdate = (index, item) => {
        setItemEdit({ index: index, estado: item.estado, rol: item.rol })
    }
    const updateItem = (e) => {
        console.log(e)
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
                                <StyledTableCell align="center">id</StyledTableCell>
                                <StyledTableCell align="center">rol</StyledTableCell>
                                <StyledTableCell align="center">nombre</StyledTableCell>
                                <StyledTableCell align="center">estado</StyledTableCell>
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
                            {usuarios.map((usuario, index) => index === itemEdit.index ? rowUpdate(itemEdit, usuario, updateItem, cancelEdit) : normalRow(usuario, index, open, handlerOpen, handlerClose, handlerUpdate, handlerOpenDialog))}

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

const rowUpdate = (itemEdit, usuario, updateItem, cancelEdit) => {
    return (
        <>
            <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell>

                </TableCell>
                <TableCell align="center" component="th" scope="row">
                    {usuario.id}
                </TableCell>
                <TableCell align="center">
                    <Select
                        value={itemEdit.rol}
                        name="rol"
                        label="Rol"
                        onChange={updateItem}
                    >
                        <MenuItem value={"vendedor"}>vendedor</MenuItem>
                        <MenuItem value={"administrador"}>administrador</MenuItem>
                    </Select>
                </TableCell>
                <TableCell align="center">{usuario.nombre}</TableCell>
                <TableCell align="center"> <Select
                    value={itemEdit.estado}
                    name="estado"
                    label="Estado"
                    onChange={updateItem}
                >
                    <MenuItem value={"activo"}>activo</MenuItem>
                    <MenuItem value={"inactivo"}>inactivo</MenuItem>
                </Select></TableCell>
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
const normalRow = (usuario, index, open, handlerOpen, handlerClose, handlerUpdate, handlerOpenDialog) => {
    return (
        <>
            <TableRow
                key={usuario.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell></TableCell>
                <TableCell align="center" component="th" scope="row">
                    {usuario.id}
                </TableCell>
                <TableCell align="center">{usuario.rol}</TableCell>
                <TableCell align="center">{usuario.nombre}</TableCell>
                <TableCell align="center">{usuario.estado}</TableCell>
                <TableCell align="center">
                    <div className="table-container-buttons">
                        <a onClick={() => handlerUpdate(index, usuario)}><RiPencilFill color="#267a31" size="1.2rem" /></a>
                        <a onClick={() => handlerOpenDialog(true)}><RiDeleteBin2Fill color="#943232" size="1.2rem" /></a>
                    </div>
                </TableCell>
            </TableRow>
        </>
    )
}
export default Usuarios