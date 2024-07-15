import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const Example = () => {
  const [phone, setPhone] = useState('');

  return (
    <div>
      <PhoneInput
        defaultCountry="ua"
        value={phone}
        onChange={(phone) => setPhone(phone)}
      />
    </div>
  );
};
export default Example