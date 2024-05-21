/* eslint-disable react/prop-types */
const ProgressBar = ({ value = 0 }) => {
  return (
    <div className="progressBar" style={{ "--value": `${value}%` }}>
      <span>{value}%</span>
      <div></div>
    </div>
  );
};

export default ProgressBar;
