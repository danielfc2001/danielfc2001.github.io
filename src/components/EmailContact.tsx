import { FC } from "react";
import "./aboutUs.css";
import EmailContactBtn from "./EmailContactBtn";
import { EmailContactTypes } from "./Types";

const EmailContact: FC<EmailContactTypes> = ({ email, copyBtn, linkBtn }) => {
  return (
    <section className="email-contact">
      <div className="email-contact-group">
        <i className="email-contact-icon bi bi-envelope-at-fill" />
        <span className="email-contact-email">{email}</span>
      </div>
      <div className="d-flex justify-content-between">
        {copyBtn && <EmailContactBtn btnType="copy" />}
        {linkBtn && <EmailContactBtn btnType="send" />}
      </div>
    </section>
  );
};

export default EmailContact;
