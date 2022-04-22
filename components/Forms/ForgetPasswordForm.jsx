import { useState, useEffect } from 'react';

// Components
import FormLegend from './FormLegend';
import Input from './Input';
import SecondaryButton from './SecondaryButton';
import SimpleCountdown from '../SimpleCountdown';

// Utilityes
import { checkEmail } from '../../lib/validation';

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [userMessage, setUserMessage] = useState({
    show: false,
    message: '',
    state: 'success',
  });
  const [isSubmited, setIsSubmited] = useState(false);

  const [reSendCountDown, setReSendCountDown] = useState(0);

  useEffect(() => {
    setIsSubmited(localStorage.getItem('send-message') ? true : false);
    setReSendCountDown(localStorage.getItem('send-message') || 0);
  }, []);

  useEffect(() => {
    if (reSendCountDown <= 0) {
      setIsSubmited(false);
      localStorage.removeItem('send-message');
    }
  }, [reSendCountDown]);

  const handleUserMessage = (message, state) => {
    setUserMessage({ show: true, message: message, state });
    setIsSubmited(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmited(true);

    const isEmail = checkEmail(email);

    if (!isEmail) {
      handleUserMessage('Please Add a Valid Email', 'error');
      return;
    }

    setUserMessage({ show: false, message: '', state: 'success' });

    // Should Send Email From Here After Check If User Exist

    const resendAfter = 60; // seconds

    if (localStorage.getItem('send-message')) {
      setReSendCountDown(resendAfter);
    } else {
      localStorage.setItem('send-message', resendAfter);
      setReSendCountDown(resendAfter);
    }
  };

  return (
    <div className='w-s mx-9 max-w-s rounded bg-white py-6 px-2.5 md:mx-0 md:px-5'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <FormLegend txt='Reset Password' />

          {reSendCountDown > 0 && <SimpleCountdown current={reSendCountDown} change={setReSendCountDown} />}

          <div className='flex flex-col gap-3.5 md:gap-2.5'>
            <Input
              type='email'
              label='email'
              placeholder='Email'
              value={email}
              change={setEmail}
              autoComplete='forgetPassword-email'
            />

            <SecondaryButton txt={isSubmited ? 'Working on it...' : 'Send'} disabled={isSubmited} />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ForgetPasswordForm;
