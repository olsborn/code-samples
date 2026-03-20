import ChatContainer from './ChatContainer';
export default function ErrorCmp({ error }: { error: Error }) {
  return (
    <ChatContainer>
      <div className="card-header bg-danger text-white text-center">
        <h3 className="text-white">An error occurred!</h3>
      </div>
      <div className="card-body p-4" style={{ minHeight: 350 }}>
        <p className="text-danger text-center">
          <b>Error: </b>
          {error?.message ? error.message : 'unknown error occurred'}
        </p>
      </div>
    </ChatContainer>
  );
}
