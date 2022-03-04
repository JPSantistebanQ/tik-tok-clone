import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bmpujepaekbusnhmkomn.supabase.co';
const supabaseKey: string = import.meta.env.VITE_SUPABASE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
