import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../client";

function EditCreator() {
   const { id } = useParams();
   const navigate = useNavigate();
   const [creator, setCreator] = useState({
      name: "",
      url: "",
      description: "",
      imageURL: "",
   });

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

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      setCreator((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };

   const handleDelete = async () => {
      const { error } = await supabase.from("creators").delete().eq("id", id);
      if (error) {
         console.error(error);
      } else {
         navigate("/");
      }
   };

   const handleSubmit = async (e: React.SubmitEvent) => {
      e.preventDefault();
      const { error } = await supabase
         .from("creators")
         .update(creator)
         .eq("id", id);
      if (error) {
         console.error(error);
      } else {
         navigate("/");
      }
   };
   return (
      <div>
         <h1>Edit Creator</h1>
         <form onSubmit={handleSubmit}>
            <label>
               Name
               <input
                  name="name"
                  value={creator.name}
                  onChange={handleChange}
                  required
               />
            </label>
            <label>
               URL
               <input
                  name="url"
                  value={creator.url}
                  onChange={handleChange}
                  required
               />
            </label>
            <label>
               Description
               <textarea
                  name="description"
                  value={creator.description}
                  onChange={handleChange}
                  required
               />
            </label>
            <label>
               Image URL (optional)
               <input
                  name="imageURL"
                  value={creator.imageURL}
                  onChange={handleChange}
               />
            </label>
            <button type="submit">Update Creator</button>
            <button type="button" onClick={handleDelete}>
               Delete Creator
            </button>
         </form>
      </div>
   );
}

export default EditCreator;
