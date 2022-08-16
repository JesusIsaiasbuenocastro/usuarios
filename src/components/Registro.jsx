import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ImagenEmpresa from '../img/Logo.png'

const Registro = () => {
    const [value, setValue] = React.useState(new Date());
    const handleChange = (newValue) => {
        setValue(newValue);
      };


    const validarInput = (e) => {
        let regex = new RegExp("^[a-zA-Z ]+$");
        console.log(e.target.value);
        if (regex.test(e.target.value)) {
            
        } else {
            return false;
        }
    }
    return ( 
        
        <div className="App-panel-registro">
            <img src={ImagenEmpresa} alt="" />
                <div className='form'>
                    <div className='form-group'>
                        <div className="App-formato-texto">
                            <label >Nombre</label>
                            <input  
                                className="form-control" 
                                id="nombre" 
                                placeholder="Ingrese sus nombres" 
                                onChange={validarInput}
                                onKeyDown={validarInput}
                                />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className="App-formato-texto">
                            <label >Apellido</label>
                            <input  className="form-control" id="nombre" placeholder="Ingrese su apellido completo" />
                        </div>
                    </div>
                    <div className="App-formato-texto">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Fecha nacimiento"
                                inputFormat="MM/dd/yyyy"
                                value={value}
                                onChange={handleChange}
                                maxDate={new Date()}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className='form-group'>
                        <div className="App-formato-texto">
                            <label className="App-formato-texto">Correo electronico</label>
                            <input className="form-control" type="email" id="nombre" placeholder="Correo electronico" />
                            <small className='form-text text-muted App-small-font '>No compartiremos tu email</small>
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className="App-formato-texto">
                            <label className="App-formato-texto">Password</label>
                            <input className="form-control" type="password" id="nombre" placeholder="Correo electronico" />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className="App-formato-texto">
                            <label className="App-formato-texto">Confirmar password</label>
                            <input className="form-control" type="password" id="nombre" placeholder="Correo electronico" />
                        </div>
                    </div>
                    <div className="App-small-font">
                        <div class="alert alert-danger" role="alert">
                        ¡Ocurrió un error!
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
        </div>
     );
}
 
export default Registro;