'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { code?: string; errno?: number };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{`${error.code ? '<b>' + error.code + '</b>' : ''} ${
        error.errno ? '<b>' + error.errno + '</b>' : ''
      } ${error?.message}`}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
