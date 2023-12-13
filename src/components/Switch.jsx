function Switch({ options, value, setValue }) {
  return (
    <div className="switch" onClick={() => setValue(!value)}>
      <span className={value && "active"}>{options.at(0)}</span>
      <span className={!value && "active"}>{options.at(1)}</span>
    </div>
  );
}

export default Switch;
