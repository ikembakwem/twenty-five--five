export const Break = () => {
  const typeStyle = "text-2xl font-medium text-center";
  return (
    <div id="break-label">
      <h3 className={typeStyle}>Break Length</h3>
      <p id="break-length" className={typeStyle}>
        5
      </p>
      <div className="inline-flex gap-3 items-center justify-center">
        <button id="break-increment">Increase</button>
        <button id="break-decrement">Decrease</button>
      </div>
    </div>
  );
};
