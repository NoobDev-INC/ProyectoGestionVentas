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
import TextField from '@mui/material/TextField';
import { BsCheckCircleFill, BsXCircleFill, BsPlus } from "react-icons/bs";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import 'styles/Table.css'
import Axios from 'axios'
import { useEffect } from 'react/cjs/react.development';


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
    const [usuarios, setUsuarios] = React.useState([])
    const [idDeleteUser, setIdDeleteUser] = React.useState(0)
    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        try {
            const user = await Axios.get('http://localhost:5000/usuarios')
            setUsuarios(user.data)
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
        setItemEdit({ index: index, estado: item.estado, rol: item.rol })
    }
    const updateItem = (e) => {
        setItemEdit({ ...itemEdit, [e.target.name]: e.target.value })
    }
    const cancelEdit = () => {
        setItemEdit({ index: -1, estado: '', rol: '' })
    }
    const addNewItem = () => {
        setNewItem([{ nombre: '', rol: '', estado: '' }])
    }
    const handlerNewItem = (e) => {
        setNewItem([{ ...newItem[0], [e.target.name]: e.target.value }])
    }
    const handlerOpenDialog = (value, id = 0) => {
        setOpenDialog(value)
        setIdDeleteUser(id)
    }

    const addedUser = async () => {
        try {
            const user = await Axios.post('http://localhost:5000/usuarios', newItem[0])

            if (user.status === 200) {
                setNewItem([])
                getUsers()

            }
        } catch (error) {
            setNewItem([])
        }

    }
    const deleteUser = async () => {
        try {
            const user = await Axios.delete('http://localhost:5000/usuarios/' + idDeleteUser)
            if (user.status === 200) {
                setOpenDialog(false)
                getUsers()
            }
        } catch (error) {
            console.log(error)
        }
    }
    const updateUser = async (id) => {
        try {
            const user = await Axios.patch('http://localhost:5000/usuarios/' + id, {
                rol: itemEdit.rol,
                estado: itemEdit.estado
            })
            if (user.status === 200) {
                getUsers()
                setItemEdit({ index: -1, estado: '', rol: '' })
            }
        } catch (error) {
            console.log(error)
        }
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
                                    <TableCell align="center"><TextField onChange={handlerNewItem} value={newItem[0]._id} name="_id" id="standard-basic" variant="standard" /></TableCell>
                                    <TableCell align="center"><TextField onChange={handlerNewItem} value={newItem[0].rol} name="rol" id="standard-basic" variant="standard" /></TableCell>
                                    <TableCell align="center"><TextField onChange={handlerNewItem} value={newItem[0].nombre} name="nombre" id="standard-basic" variant="standard" /></TableCell>
                                    <TableCell align="center"><TextField onChange={handlerNewItem} value={newItem[0].estado} name="estado" id="standard-basic" variant="standard" /></TableCell>
                                    <TableCell align="center">
                                        <div className="table-container-buttons">
                                            <a ><BsCheckCircleFill onClick={() => { addedUser() }} color="#267a31" size="1.2rem" /></a>
                                            <a onClick={() => { setNewItem([]); }}><BsXCircleFill color="#943232" size="1.2rem" /></a>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            </>}
                            {usuarios.map((usuario, index) => index === itemEdit.index ? rowUpdate(itemEdit, usuario, updateItem, cancelEdit, updateUser) : normalRow(usuario, index, open, handlerOpen, handlerClose, handlerUpdate, handlerOpenDialog))}

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
                    <Button onClick={() => deleteUser()} autoFocus>
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

const rowUpdate = (itemEdit, usuario, updateItem, cancelEdit, updateUser) => {
    return (
        <>
            <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell>

                </TableCell>
                <TableCell align="center" component="th" scope="row">
                    {usuario._id}
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
                        <a ><BsCheckCircleFill onClick={() => { updateUser(usuario._id) }} color="#267a31" size="1.2rem" /></a>
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
                key={usuario._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell></TableCell>
                <TableCell align="center" component="th" scope="row">
                    {usuario._id}
                </TableCell>
                <TableCell align="center">{usuario.rol}</TableCell>
                <TableCell align="center">{usuario.nombre}</TableCell>
                <TableCell align="center">{usuario.estado}</TableCell>
                <TableCell align="center">
                    <div className="table-container-buttons">
                        <a onClick={() => handlerUpdate(index, usuario)}><RiPencilFill color="#267a31" size="1.2rem" /></a>
                        <a onClick={() => handlerOpenDialog(true, usuario._id)}><RiDeleteBin2Fill color="#943232" size="1.2rem" /></a>
                    </div>
                </TableCell>
            </TableRow>
        </>
    )
}
export default Usuarios