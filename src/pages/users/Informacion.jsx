import React from 'react'

const Informacion = () => {
    return (
        <div className="">
            <table className="table-auto flex flex-col items-center justify-center">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Cédula</th>
                    <th>Rol</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Juan Andres</td>
                    <td>Salazar</td>
                    <td>1002971750</td>
                    <td>Admin</td>
                </tr>
                <tr className="bg-indigo-400">
                    <td>Michelle</td>
                    <td>Tejada</td>
                    <td>1004879652</td>
                    <td>Admin</td>
                </tr>
                <tr>
                    <td>Valentina</td>
                    <td>Osorio</td>
                    <td>1084795632</td>
                    <td>Admin</td>
                </tr>
                <tr className="bg-indigo-400"> 
                    <td>Felipe</td>
                    <td>Perez</td>
                    <td>1002478965</td>
                    <td>Admin</td>
                </tr>
                <tr>
                    <td>Jose David</td>
                    <td>Salazar</td>
                    <td>1011123456</td>
                    <td>Admin</td>
                </tr>
            </tbody>
            </table>
        </div>
        
    )
}

export default Informacion
