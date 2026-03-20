'use client';

import ErrorCmp from '@/components/ErrorCmp';

export default function Error({
  error,
  reset,
}: {
  error: Error & { code?: string; errno?: number };
  reset: () => void;
}) {
  return <ErrorCmp error={error} reset={reset} />;
}
