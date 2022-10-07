export function Clear(props) {
  return (
    <>
      <div className="boton-clear" onClick={props.manejarClear}>
        {props.children}
      </div>
    </>
  );
}
