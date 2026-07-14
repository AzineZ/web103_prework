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
         <header className="page-header">
            <hgroup>
               <h1>Creatorverse</h1>
               <p>A collection of content creators worth following.</p>
            </hgroup>
            <Link to="/new" role="button">
               + Add Creator
            </Link>
         </header>
         {creators.length > 0 ? (
            <div className="creator-grid">
               {creators.map((creator) => (
                  <Card key={creator.id} creator={creator} />
               ))}
            </div>
         ) : (
            <p>No creators yet. Add one to begin!</p>
         )}
      </div>
   );
}

export default ShowCreators;
