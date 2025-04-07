import "../header/style.css";

export function Header() {
  return (
    <>
      <header className="s-header">
        <div className="container">
          <span className="logo">FIND YOUR BLOCK</span>
          <h1>
            Encontre os <span id="title">melhores blocos</span>
            <br />
            de carnaval de 2023
          </h1>

          <form className="barra-pesquisa">
            <input className="element" type="text" placeholder="Pesquise por nome" />
            <select className="element">
              <option>Selecione uma cidade</option>
            </select>
            <button type="submit">buscar agora</button>
          </form>
        </div>
      </header>
    </>
  );
}
