import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://lxckenztuorwyfemtkwg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4Y2tlbnp0dW9yd3lmZW10a3dnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkwNTcwMDUsImV4cCI6MTk3NDYzMzAwNX0.YshyYi1KIHszK0oaofQjBDeoaXo0AjWE_KZEizT85JE"
);
