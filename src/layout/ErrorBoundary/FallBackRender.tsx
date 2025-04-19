import React from 'react';

interface FallbackRenderProps {
  error: Error;
  resetErrorBoundary: VoidFunction;
}

const FallBackRender: React.FC<FallbackRenderProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div className=''>
      <main className=''>
        <section className=''>
          <div className=''>
            <div className=''>
              <h1>Something went wrong</h1>
              <p>Error: {error.message}</p>
              {/* <Button variant='primary' size='md' onClick={resetErrorBoundary}>
                Try again
              </Button> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FallBackRender;
