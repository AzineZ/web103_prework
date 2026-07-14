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
      <article className="creator-card">
         {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
         <h2>
            <Link to={`/creator/${creator.id}`}>{creator.name}</Link>
         </h2>
         <p>{creator.description}</p>
         <div className="card-actions">
            <a
               href={creator.url}
               target="_blank"
               rel="noreferrer"
               role="button"
               className="outline"
            >
               Visit channel
            </a>
            <Link to={`/edit/${creator.id}`} role="button" className="secondary">
               Edit
            </Link>
         </div>
      </article>
   );
}

export default Card;
