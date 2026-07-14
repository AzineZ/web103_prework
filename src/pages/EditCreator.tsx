import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
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
      if (!window.confirm("Delete this creator? This cannot be undone.")) return;
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
      <div className="form-page">
         <Link to="/" className="back-link">
            ← Back to all creators
         </Link>
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
            <div className="form-actions">
               <button type="submit">Update Creator</button>
               <button
                  type="button"
                  className="secondary"
                  onClick={handleDelete}
               >
                  Delete Creator
               </button>
            </div>
         </form>
      </div>
   );
}

export default EditCreator;
