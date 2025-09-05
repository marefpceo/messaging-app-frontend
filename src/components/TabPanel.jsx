function TabPanel({ children, value, index }) {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`contact-tab-panel-${index}`}
      aria-labelledby={`contact-tab-${index}`}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

export default TabPanel;
