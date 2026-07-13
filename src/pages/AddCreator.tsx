import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";

function AddCreator() {
   const [creator, setCreator] = useState({
      name: "",
      url: "",
      description: "",
      imageURL: "",
   });
   const navigate = useNavigate();

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      setCreator((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };

   const handleSubmit = async (e: React.SubmitEvent) => {
      e.preventDefault();
      const { error } = await supabase.from("creators").insert(creator);
      if (error) {
         console.error(error);
      } else {
         navigate("/");
      }
   };
   return (
      <div>
         <h1>Add a Creator</h1>
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
            <button type="submit">Add Creator</button>
         </form>
      </div>
   );
}

export default AddCreator;
