import React from "react";
import './App.css';

function App() {
  return (
    <div className="home">
      <header className="header">
        <h1 className="logo">AgriConnect</h1>
        <nav className="nav">
          <a href="#">Tableau de bord</a>
          <a href="#">Conseil Agricole</a>
          <a href="#">Marché Numérique</a>
          <a href="#">Suivi de Parcelles</a>
          <a href="#">Finance Agricole</a>
        </nav>
      </header>

      <main className="main">
        <section className="welcome">
          <h2>Bienvenue, Agriculteur</h2>
          <p>Aperçu de votre exploitation agricole aujourd'hui.</p>
        </section>

        <section className="cards">
          <div className="card meteo">
            <h3>Météo Actuelle</h3>
            <p>24°C - Ensoleillé</p>
          </div>

          <div className="card parcelles">
            <h3>Parcelles Actives</h3>
            <p>4 sur 5</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
