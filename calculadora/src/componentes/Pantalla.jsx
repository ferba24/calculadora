import "../stylesheets/pantalla.css";

export function Pantalla({ input }) {
  return (
    <>
      <div className="input">{input}</div>
    </>
  );
}

//o podemos definirla como funcion flecha en vez de un return const Pantalla = ({ input }) => <div className="input">{input}</div>;
