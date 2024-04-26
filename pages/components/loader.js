import { PulseLoader } from "react-spinners";

function Spinner({ loading }) {
  return (
    <div>
      {loading && (
        <div className="overlay">
            <div className="spinner-wrapper">
            <PulseLoader color="#007bff" loading={true} size={15} />
            </div>
        </div>
      )}
    </div>
  );    
}

export default Spinner;