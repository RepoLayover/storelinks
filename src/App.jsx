import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://ctkufybqqpychssqcyzh.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0a3VmeWJxcXB5Y2hzc3FjeXpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4MDA0MDIsImV4cCI6MTk5NDM3NjQwMn0.tF1qRMhHatSQpp1tW0EFCw__YQXn32OC3nYb_ZWpY8c");

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;