import { FC, MouseEvent, useEffect } from "react";
import { EmailContactBtnTypes } from "./Types";
import { Tooltip } from "bootstrap";

const EmailContactBtn: FC<EmailContactBtnTypes> = ({ btnType }) => {
  const capitalizeType = (btnType: string) => {
    const capitalized = btnType[0].toUpperCase();
    const textCapitalized = btnType.replace(btnType[0], capitalized);
    return textCapitalized;
  };

  useEffect(() => {
    const tooltipSendBtn = document.getElementById("btn_email_send_tooltip");
    const tooltipCopyBtn = document.getElementById("btn_email_copy_tooltip");
    new Tooltip(tooltipSendBtn ? tooltipSendBtn : "");
    new Tooltip(tooltipCopyBtn ? tooltipCopyBtn : "");
  }, []);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    switch (btnType) {
      case "copy":
        const email = document.querySelector(".email-contact-email");
        if (email?.textContent) {
          navigator.clipboard.writeText(email.textContent).then((res) => {
            console.log(res);
          });
        }
        break;
      case "send":
        window.open("https://www.github.com", "_blank");
        break;
      default:
        return;
    }
  };

  return (
    <button
      id={`btn_email_${btnType}_tooltip`}
      type="button"
      className="email-contact-btn"
      data-bs-toggle="tooltip"
      data-bs-title={`${capitalizeType(btnType)} Email !`}
      onClick={handleClick}
    >
      <i className={`bi bi-${btnType}`}></i>
    </button>
  );
};

export default EmailContactBtn;
