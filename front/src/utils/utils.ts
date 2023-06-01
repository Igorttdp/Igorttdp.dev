import { KeyboardEvent } from "react";

const getToken = () => {
  const token = localStorage.getItem("@softline_token");

  if (token) return JSON.parse(token);

  return null;
};

const mask = (v: string) => {
  if (!v) return "";

  v = v.replace(/\D/g, "");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  return v;
};

const onKeyPressMaskChange = (e: KeyboardEvent<HTMLInputElement>) => {
  const keys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "Backspace",
    "Enter",
  ];

  if (e.key === "Backspace" || e.key === "Enter") return;

  if (!(e.key in keys)) {
    return e.preventDefault();
  }
};

export { getToken, mask, onKeyPressMaskChange };
