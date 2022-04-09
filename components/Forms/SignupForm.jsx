import { useState } from "react";

// Utilityes
import checkName from "../../utility/checkName";
import checkEmail from "../../utility/checkEmail";
import checkPassword from "../../utility/checkPassword";

// Components
import FormLegend from "./FormLegend";
import Input from "./Input";
import SecondaryButton from "./SecondaryButton";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);

  const handleError = (message) => {
    setError(true);
    setErrorMessage(message);
    setIsSubmited(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmited(true);

    if (!name || !email || !password || !repassword) {
      handleError("Please fill all the fields");
      return;
    }

    const isName = checkName(name);
    const isEmail = checkEmail(email);
    const isPassword = checkPassword(password);

    if (!isName) {
      handleError(
        "Please Make Sure Your Name is larger than 4 characters and less than 20 characters"
      );
      return;
    }

    if (!isEmail) {
      handleError("Please Add a Valid Email");
      return;
    }

    if (password !== repassword) {
      handleError("Please Make Sure Your Password is the same");
      return;
    }

    if (!isPassword) {
      handleError("Please Add a Valid Password");
      return;
    }

    setError(false);
    setErrorMessage("");
    console.log("Email and Password are valid");
  };
  return (
    <div className="mx-9 max-w-s rounded bg-white py-6 px-2.5 md:mx-0 md:px-5">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <FormLegend txt="Sign Up" />

          {error && (
            <div className="w-full bg-error p-1 text-center font-serif text-sm text-white">
              {errorMessage}
            </div>
          )}

          <div className="flex flex-col gap-3.5 md:gap-2.5">
            <Input
              type="text"
              label="name"
              placeholder="Name"
              value={name}
              change={setName}
              autoComplete="signup-fullname"
            />

            <Input
              type="email"
              label="email"
              placeholder="Email"
              value={email}
              change={setEmail}
              autoComplete="signup-email"
            />

            <Input
              type="password"
              label="password"
              placeholder="Password"
              value={password}
              change={setPassword}
              autoComplete="signup-password"
            />

            <Input
              type="password"
              label="re-enter password"
              placeholder="re-enter Password"
              value={repassword}
              change={setRepassword}
              autoComplete="signup-reenter-password"
            />

            <SecondaryButton txt="Sign Up" disabled={isSubmited} />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default SignupForm;
