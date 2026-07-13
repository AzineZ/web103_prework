import { useState, useEffect } from "react";
import { supabase } from "../client";
import Card, { type Creator } from "../components/Card";
import { Link } from "react-router-dom";

function ShowCreators() {
   const [creators, setCreators] = useState<Creator[]>([]);
   useEffect(() => {
      const fetchCreators = async () => {
         const { data, error } = await supabase.from("creators").select();
         if (error) {
            console.error(error);
         } else {
            setCreators(data);
         }
      };
      fetchCreators();
   }, []);

   return (
      <div>
         <h1>Creatorverse</h1>
         <Link to="/new">Add Creator</Link>
         {creators.length > 0 ? (
            creators.map((creator) => (
               <Card key={creator.id} creator={creator} />
            ))
         ) : (
            <p>No creators yet. Add one to begin!</p>
         )}
      </div>
   );
}

export default ShowCreators;
