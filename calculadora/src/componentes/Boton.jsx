import '../stylesheets/boton.css'

export default function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=');
  };

  return (
      <>
        <div
            className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null} `}>
          {props.children}
        </div>
      </>
  );
}