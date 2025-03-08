import { db } from "@/db";

export default async function Home() {
  // get data from the database
  const snippets = await db.snippet.findMany();
  console.log(snippets);

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {snippets.map((snippet) => (
          <li key={snippet.id}>
             <h2>{snippet.title}</h2>
            <pre>{snippet.code}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
}
