'use client';

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error }: ErrorPageProps) {
  return (
    <div>
      <p>{error.message}</p>
    </div>
  );
}
