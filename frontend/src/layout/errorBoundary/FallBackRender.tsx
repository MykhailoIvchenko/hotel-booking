import React from 'react';

interface FallbackRenderProps {
  error: Error;
  resetErrorBoundary?: VoidFunction;
}

const FallBackRender: React.FC<FallbackRenderProps> = ({ error }) => {
  return (
    <div className=''>
      <main>
        <section>
          <div
            style={{
              width: '100vw',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div>
              <h1>Something went wrong</h1>
              <p>Error: {error.message}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FallBackRender;
