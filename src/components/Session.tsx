export const Session = () => {
  const typeStyle = "text-2xl font-medium text-center";

  return (
    <div id="session-label">
      <h3 className={typeStyle}>Session Length</h3>
      <p id="session-length" className={typeStyle}>
        25
      </p>
      <div className="flex gap-3 items-center justify-center">
        <button id="session-increment">Increase</button>
        <button id="session-decrement">Decrease</button>
      </div>
    </div>
  );
};
