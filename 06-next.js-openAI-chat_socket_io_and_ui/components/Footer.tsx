import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-body-tertiary border-top py-3 w-100">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-sm-6 text-start">
            &copy; {new Date().getFullYear()} {` `}
            <Link href="https://chatgpt.com/" target="_blank" className="text-decoration-none">
              Open AI
            </Link>
          </div>
          <div className="col-sm-6 text-end">
            <span className="d-none d-sm-inline">AT :: Open AI Chat</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
