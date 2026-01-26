export default function Button({ children, onClick, settings }) {
  return (
    <button className={`${settings}`} onClick={onClick}>
      {children}
    </button>
  );
}
