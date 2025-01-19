import * as React from 'react';

interface EmailTemplateProps {
  userName: string;
  email: string;
  content: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  userName,
  email,
  content,
}) => (
  <div>
    <h1>こんにちは、{userName}です。</h1>
    <p>{email}から届きました。</p>
    <p>{content}</p>
  </div>
);
