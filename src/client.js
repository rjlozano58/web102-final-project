import { createClient } from '@supabase/supabase-js'

const URL = 'https://tqtyaapapytfvzngidws.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxdHlhYXBhcHl0ZnZ6bmdpZHdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0MjQ0OTUsImV4cCI6MjAyODAwMDQ5NX0.H7APHfvNyh81IdOptAHELc1-z9CP2hty4P4aMGXXu5o';

export const supabase = createClient(URL, API_KEY);
