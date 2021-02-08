import { useState, useEffect } from "react";

const Card = (props) => {
  const [pokemon, setPokemon] = useState();

  const styles = {
    card: {
      minWidth: "100px",
      maxWidth: "250px",
    },
    img: {
      margin: "auto",
      marginTop: "20px",
      maxWidth: "100px",
      maxHeight: "100px",
    },
  };

  const fetchPokemon = () => {
    fetch(props.url)
      .then((res) => res.json())
      .then((json) => setPokemon(json));
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="card" style={styles.card}>
      <img
        src={pokemon?.sprites.front_default}
        className="img-thumbnail"
        style={styles.img}
        alt="..."
      />
      <div className="card-body text-center">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">Type - {pokemon?.types[0].type.name}</p>
        <a href="#" className="btn btn-primary">
          Abilities
        </a>
      </div>
    </div>
  );
};

export default Card;
