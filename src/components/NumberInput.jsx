const NumberInput = ({ value, setNumber }) => {
  const handleChangeNumber = event => {
    setNumber(event.target.value);
  };
  return (
    <div className="wrapper">
      <label className="label">Number</label>
      <input
        className="input"
        type="tel"
        name="number"
        value={value}
        onChange={handleChangeNumber}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter your number ( +380(67)-000-00-00 ) "
      />
    </div>
  );
};

export default NumberInput;
