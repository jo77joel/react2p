import React, { useState, useEffect } from 'react';

function Comp2() {

  const [cards, setCards] = useState([]);


  useEffect(() => {
  
    const fetchedData = [
      { id: 1, title: "Título Tarjeta 1", description: "Descripción breve de la tarjeta 1", imgSrc: "https://i.pinimg.com/originals/66/4d/2a/664d2a0d4145a08503a0acfd5dd8366e.gif" },
      { id: 2, title: "Título Tarjeta 2", description: "Descripción breve de la tarjeta 2", imgSrc: "https://i.pinimg.com/originals/a7/41/7c/a7417c9e3f77d0a2fb411b88d6fa989c.gif" },
      { id: 3, title: "Título Tarjeta 3", description: "Descripción breve de la tarjeta 3", imgSrc: "https://i.pinimg.com/originals/e4/e8/0a/e4e80a9230a140dd4e666b264432d28f.gif" },
    ];

    // Actualizamos el estado con los datos cargados
    setCards(fetchedData);
  }, []); // El array vacío [] asegura que solo se ejecute una vez al montar el componente

  return (
    <div className="container mt-4">
      <div className="row">
        {cards.map(card => (
          <div key={card.id} className="col-md-4 mb-4">
            <div className="card">
              <img 
                src={card.imgSrc} 
                className="card-img-top" 
                alt="Imagen"
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
                <div className="text-center mt-auto">
                  <a href="#" className="btn btn-primary">Ir</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comp2;
