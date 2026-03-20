import { AlertTriangle } from 'lucide-react';

export default function ErrorCmp({ error }: { error: Error }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          width: '100%',
          background: 'rgba(30, 30, 50, 0.8)',
          border: '2px solid rgba(255, 107, 107, 0.3)',
          borderRadius: '16px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            background: 'rgba(255, 107, 107, 0.2)',
            color: '#ff6b6b',
            textAlign: 'center',
            padding: '1.5rem',
            borderBottom: '2px solid rgba(255, 107, 107, 0.3)',
          }}
        >
          <h3
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              margin: 0,
              fontSize: '1.5rem',
            }}
          >
            <AlertTriangle size={28} />
            An error occurred!
          </h3>
        </div>
        <div
          style={{
            padding: '2rem',
            minHeight: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p
            style={{
              color: '#ff6b6b',
              textAlign: 'center',
              fontSize: '1.125rem',
              margin: 0,
            }}
          >
            <b>Error: </b>
            {error?.message ? error.message : 'unknown error occurred'}
          </p>
        </div>
      </div>
    </div>
  );
}
