// components/InputComparisonForm.js

export default function InputComparisonForm({ userInput, setUserInput, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter a Value to Compare:</label>
      <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} required />
      <button type="submit">Compare Value</button>
    </form>
  );
}
