import { notFound } from 'next/navigation';
import { db } from '@/db';
import Link from 'next/link';

interface SnippetShowPageProps {
  params: Promise<{ id: string }>;
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  const { id } = await props.params;
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(id) }
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>

        <div className="flex gap-4">
          <Link href={`/snippets/${id}/edit`} className="border p-2 rounded">
            Edit
          </Link>
          <button className="border p-2 rounded">Delete</button>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
