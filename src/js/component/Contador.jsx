import React from "react";

export const Contador = () => {
    const timer = {
        horas: 0,
        minutos: 0,
        segundos: 0
    };

    setInterval(() => {
        document.getElementById("idHoras").innerHTML = `${timer.horas.toString().padStart(2,"0")}`;
        document.getElementById("idMinutos").innerHTML = `${timer.minutos.toString().padStart(2,"0")}`;
        document.getElementById("idSegundos").innerHTML = `${timer.segundos.toString().padStart(2,"0")}`;
        timer.segundos += 1;
        
        if (timer.segundos >= 60) {
            timer.segundos = 0;
            timer.minutos += 1;
        }

      if (timer.minutos >= 60) {
        timer.minutos = 0;
        timer.horas += 1;
      }

    }, 1000);

    return (
        <div className="bg-black text-white p-5 rounded">
            <h1>
                <span className="bg-secondary text-light px-2 py-1 rounded mx-1"><i class="fa-solid fa-clock"></i></span>
                <span id="idHoras" className="bg-secondary text-light px-2 py-1 rounded mx-1"></span>
                <span id="idMinutos" className="bg-secondary text-light px-2 py-1 rounded mx-1"></span>
                <span id="idSegundos" className="bg-secondary text-light px-2 py-1 rounded mx-1"></span>
            </h1>
        </div>
    );
}