"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";



export async function registerForOpen(formData) {

    const supabase = createClient();

    const  data = 
        await supabase.from("bg_open_participants")
        .insert(formData);


    return data;
}

 