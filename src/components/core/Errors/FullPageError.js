import React from 'react';
2;
export const FullPageError = ({ errorCode }) => {
  return (
    <div>
      <h1>Error</h1>
      <p>{errorCode}</p>
    </div>
  );
};

export const FullPageError403 = () => <FullPageError errorCode={403} />;
export const FullPageError404 = () => <FullPageError errorCode={404} />;
export const FullPageError500 = () => <FullPageError errorCode={500} />;
