import { Suspense } from "react";
import { useParams } from "react-router-dom";
import getPokemon from "../../getPokemon";

function DetailsParent() {
  const { id } = useParams();
  const resource = getPokemon(id);

  return (
    <Suspense fallback={<h2>loading...</h2>}>
      <Details resource={resource} />
    </Suspense>
  );
}

const Details = ({ resource }) => {
  const pokemon = resource.readData();

  return <h2>Details: {pokemon.name}</h2>;
};

export default DetailsParent;
