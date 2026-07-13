import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../client";
import { type Creator } from "../components/Card";

function ViewCreator() {
   const { id } = useParams();
   const [creator, setCreator] = useState<Creator | null>(null);

   useEffect(() => {
      const fetchCreator = async () => {
         const { data, error } = await supabase
            .from("creators")
            .select()
            .eq("id", id)
            .single();

         if (error) {
            console.error(error);
         } else {
            setCreator(data);
         }
      };
      fetchCreator();
   }, [id]);

   if (!creator) return <p>Loading...</p>;

   return (
      <div>
         <h1>{creator.name}</h1>
         {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
         <p>{creator.description}</p>
         <a href={creator.url} target="_blank" rel="noreferrer">
            {creator.url}
         </a>
         <div>
            <Link to={`/edit/${creator.id}`}>Edit</Link>
            <Link to="/">Back to all creators</Link>
         </div>
      </div>
   );
}

export default ViewCreator;
