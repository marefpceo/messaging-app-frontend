export default function Button({
  children,
  type,
  onClick,
  settings,
  disabled,
}) {
  return (
    <button
      type={type}
      className={`${settings}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
