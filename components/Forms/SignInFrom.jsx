import { useState } from "react";
import Link from "next/link";

// Components
import checkEmail from "../../utility/checkEmail";
import checkPassword from "../../utility/checkPassword";
import FormLegend from "./FormLegend";

// Utilityes
import Input from "./Input";
import SecondaryButton from "./SecondaryButton";

const SignInFrom = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    const isEmail = checkEmail(email);
    const isPassword = checkPassword(password);

    if (!isEmail) {
      handleError("Please Add a Valid Email");
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
          <FormLegend txt="Sign In" />

          {error && (
            <div className="w-full bg-error p-1 text-center font-serif text-sm text-white">
              {errorMessage}
            </div>
          )}

          <div className="flex flex-col gap-3.5 md:gap-2.5">
            <Input
              type="email"
              label="email"
              placeholder="Email"
              value={email}
              change={setEmail}
              autoComplete="signin-email"
            />

            <Input
              type="password"
              label="password"
              placeholder="Password"
              value={password}
              change={setPassword}
              autoComplete="signin-password"
            />

            <Link href="/forgot-password">
              <a className="text-sm text-shark hover:text-mystic-dark">
                Forgot Password?
              </a>
            </Link>

            <SecondaryButton txt="Sign In" disabled={isSubmited} />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default SignInFrom;
