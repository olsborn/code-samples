'use client';

export default function Wrapper({ children }) {
  return (
    <div
      id="wrapper"
      onClick={() => {
        if (document.body.classList.contains('is-menu-visible')) {
          document.body.classList.remove('is-menu-visible');
        }
      }}
    >
      {children}
    </div>
  );
}
