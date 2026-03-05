export default function App() {

  const handleRun = () => {
    console.log("Running AI model...");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Zentinium</h1>

      <button onClick={handleRun}>
        Run Model
      </button>

      <div>
        Neural network visualization will appear here.
      </div>

    </div>
  );
}