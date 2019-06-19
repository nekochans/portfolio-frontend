import React from 'react';

interface Props {
  message: string;
}

const Button: React.FC<Props> = ({ message }: Props) => (
  <div>
    <button type="button" value={message}>
      {message}
    </button>
  </div>
);

export default Button;
