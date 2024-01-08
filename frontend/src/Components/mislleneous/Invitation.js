import axios from 'axios';
import React, { useState } from 'react';

const InviteForm = () => {
  const [recipientEmail, setRecipientEmail] = useState('');

  const handleInvite = async () => {
    console.log();
    try {
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };

        const { data } = await axios.post(
            '/api/invite',
            {recipientEmail} ,
            config
        );

        console.log(JSON.stringify(data));

    } catch (error) {
      console.error('Error sending invitation:', error);
    }
  };

  return (
    <div style={{margin:'10px'}}>
      <input
        type="email"
        placeholder="Enter recipient's email"
        value={recipientEmail}
        onChange={(e) => setRecipientEmail(e.target.value)}
      />
      <button onClick={handleInvite} style={{backgroundColor:'blue', color:'black'}}>Send Invitation</button>
    </div>
  );
};

export default InviteForm;
