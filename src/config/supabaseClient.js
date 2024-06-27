// src/config/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oiqmzbcsrgcbhwtrgbsi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pcW16YmNzcmdjYmh3dHJnYnNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0NDI1NzQsImV4cCI6MjAzNTAxODU3NH0.1L6yhpZF8x6NoCGv0oEWjQA_hiBGjQJ6iIp7UHvI63w';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
