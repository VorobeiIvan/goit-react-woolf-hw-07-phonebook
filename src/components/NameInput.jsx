const NameInput = ({ value, setName }) => {
  const handleChangeName = event => {
    setName(event.target.value);
  };
  return (
    <div className="wrapper">
      <label className="label">Name</label>
      <input
        className="input"
        type="text"
        name="name"
        value={value}
        onChange={handleChangeName}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter your name (Alex)"
      />
    </div>
  );
};

export default NameInput;
