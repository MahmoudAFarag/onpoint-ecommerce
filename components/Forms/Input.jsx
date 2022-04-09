const Input = ({ type, label, placeholder, value, change, ...props }) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="mb-2.5 font-medium capitalize text-mystic-dark"
      >
        {label} :
      </label>
      <input
        type={type}
        id={label}
        required
        className="block w-full rounded bg-mystic py-2 px-2 text-mystic-dark outline-none"
        placeholder={placeholder}
        value={value}
        onChange={(e) => change(e.target.value)}
        {...props}
      />
    </div>
  );
};

export default Input;
