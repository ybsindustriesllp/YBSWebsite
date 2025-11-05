
'use client';

export default function NotFound() {
  return (
    <div className="not-found-page">
        <h1 id="heading" className="center-text">404 NOT FOUND</h1>
      <div id="eye-container">
        <div className="eyes" id="left-eye">
          <div className="pupils" id="left-pupil"></div>
        </div>
        <div className="eyes" id="right-eye">
          <div className="pupils" id="right-pupil"></div>
        </div>
      </div>
      <div id="error-container" className="center-text">
        <h2 id="error" >WHO TURNED OFF THE LIGHT?</h2>
        <p>Whatever you're looking for you're not gonna find it here.</p>
      </div>
    </div>
  );
}
