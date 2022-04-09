const SecondaryButton = ({ txt, ...props }) => {
  return (
    <div>
      <button
        type="submit"
        className="w-full rounded bg-supernova py-1 text-shark hover:bg-supernova-dark disabled:bg-mystic disabled:text-shark"
        {...props}
      >
        {txt}
      </button>
    </div>
  );
};

export default SecondaryButton;
