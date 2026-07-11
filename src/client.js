import { createClient } from "@supabase/supabase-js";
const URL = "https://mckfayuyafblyatvndrp.supabase.co/rest/v1/";
const API_KEY = "sb_publishable_jj55MsuDP3ywrNUSTEFksg_DRqU_f0z";
export const supabase = createClient(URL, API_KEY);
