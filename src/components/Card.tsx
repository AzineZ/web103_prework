import { Link } from "react-router-dom";

export type Creator = {
   id: number;
   name: string;
   url: string;
   description: string;
   imageURL?: string | null;
};

type CardProps = {
   creator: Creator;
};

function Card({ creator }: CardProps) {
   return (
      <article>
         {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
         <h2>
            <Link to={`/creator/${creator.id}`}>{creator.name}</Link>
         </h2>
         <p>{creator.description}</p>
         <a href={creator.url} target="_blank" rel="noreferrer">
            Visit channel
         </a>
         <Link to={`/edit/${creator.id}`}>Edit</Link>
      </article>
   );
}

export default Card;
