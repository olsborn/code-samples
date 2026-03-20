import classes from './chat.module.css';
export default function ChatContainer({ children }: { children: React.ReactNode }) {
  return <div className={`card shadow ${classes.opacity}`}>{children}</div>;
}
