// Components

import ForgetPasswordForm from "../components/Forms/ForgetPasswordForm";

const ForgotPassword = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-auto items-center justify-center">
        <ForgetPasswordForm />
      </div>
    </div>
  );
};

// Route Protection For Users Not Logged In
export default ForgotPassword;
