import React from 'react';
import * as emailjs from 'emailjs-com';
import argentina from './argentina.png';
import croatia from './croatia.png';
import france from './france.png';
import morocco from './morocco.png';
//import tbd from './tbd.png';

//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';

export default function EmbeddedEmail() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_ki2l8h4', 'template_s8ychqn',   
        e.target, 'GNt29prkT_qI5PtpD')
            .then((result) => {
                alert('La planilla ha sido enviada exitosamente');
            }, (error) => {
                alert('Error enviando plantilla. Volver a intentarlo.');
            });
            //clears the form after sending the email
            e.target.reset();
        }

    return (
        <form onSubmit={sendEmail}>

<table>
        <input type='hidden' name='contact_number'/>
        <tr>
        <th colspan="7" align='center' vertical-align="middle"><label for='name'>Nombre</label></th>
        </tr>
        <tr>
        <td colspan="7" align='center' vertical-align="middle"><input id='name' type='text' name='from_name' placeholder='Insertar nombre de jugador' required/></td>
        </tr>       
        
        <tr>
            <p> </p>
        </tr>
        
        <tr className="Subtitulo">
            <td colspan="7">TERCER PUESTO</td>
        </tr>

        <tr>
            <td align='right'><img src={croatia} alt="croatia" width="32px" height="32px"/></td>
            <td align='right'><label for='L1'>Croacia</label></td>
            <td><input id='L1' type='number' name='l1' required className="input"/></td>
            <td><label> - </label></td>
            <td><input id='V1' type='number' name='v1' required className="input"/></td>
            <td align='left'><label for='V1'>Marruecos</label></td>
            <td align='left'><img src={morocco} alt="morocco" width="32px" height="32px"/></td>
        </tr>
        
        <tr>
            <p> </p>
        </tr>
        <tr className="Subtitulo">
            <td colspan="7">FINAL</td>
        </tr>
        <tr>
            <td align='right'><img align='center' src={argentina} alt="argentina" width="32px" height="32px"/></td>
            <td align='right'><label for='L2'>Argentina</label></td>
            <td><input id='L2' type='number' name='l2' required className="input"/></td>
            <td align='center'><label> - </label></td>
            <td><input id='V2' type='number' name='v2' required className="input"/></td>
            <td align='left'><label for='V2'>Francia</label></td>
            <td><img align='left' src={france} alt="france" width="32px" height="32px"/></td>
        </tr>
        
        <tr>
            <p> </p>
        </tr>
        
        <tr>
            <td colspan="7" align='center'><button type='submit'>Enviar pronósticos</button></td>
        </tr>
</table>    
        </form>
        
    );
}
