
import './App.css';
import { Form, } from '@formio/react';
const urlForm = 'https://zmtktwdzuugurqj.form.io/crearsolicitud'
const urlResource = 'https://zmtktwdzuugurqj.form.io/solicitudes'

function App() {


  return (
    <div className="App">

      <h1>Crear Solicitud</h1>
      <Form src={urlResource} onSubmitDone={
        //reset form
        (submission) => {
          console.log(submission);
          //alert("Expediente creado con exito");
          //window.location.reload();
        }
      } />




    </div>
  );
}

export default App;
