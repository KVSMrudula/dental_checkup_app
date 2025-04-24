import React from 'react';

const CheckupResults = () => {
  return (
    <div className="checkup-results-container">
      <h2>Checkup Results</h2>

      {/* Dental Health Result */}
      <div className="result-card">
        <h3>Dental Health</h3>
        <p>Your dental health is in great condition. No major issues detected during the checkup.</p>
        <div className="result-summary success">Healthy Smile!</div>
      </div>

      {/* Orthodontic Evaluation */}
      <div className="result-card">
        <h3>Orthodontic Evaluation</h3>
        <p>Some minor misalignments were detected. We recommend a follow-up appointment with an orthodontist.</p>
        <div className="result-summary warning">Monitor Progress</div>
      </div>

      {/* Teeth Whitening */}
      <div className="result-card">
        <h3>Teeth Whitening</h3>
        <p>Your teeth whitening treatment is going well. No additional treatments needed for now.</p>
        <div className="result-summary success">Good to Go!</div>
      </div>

      {/* Download PDF Button */}
      <button className="action-btn">Download PDF</button>
    </div>
  );
};

export default CheckupResults;
