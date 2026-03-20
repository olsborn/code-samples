export default function ChatContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="container py-5" style={{ maxWidth: 1100 }}>
      <div className="card shadow">{children}</div>
    </div>
  );
}
