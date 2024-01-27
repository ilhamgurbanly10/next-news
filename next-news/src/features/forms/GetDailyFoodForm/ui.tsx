import React from "react";
import { Props } from "./type";
import { useTranslation } from "next-i18next";
import Button from "@/shared/ui/Buttons/Button";
import Input from "@/shared/ui/Input";
import useModel from "./model";

export const UI: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation("common");

  const {
    name,
    setName,
    email,
    setEmail,
    disabled,
    loading,
    onFinish,
    nameError,
    emailError,
    setNameWritten,
    setEmailWritten,
    emailInvalidError,
  } = useModel();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onFinish();
      }}
      className={`get-daily-food-form w-full flex lg:justify-end flex flex-col lg:flex-row items-center ${
        className ? className : ""
      }`}
    >
      <Input
        value={name}
        setValue={setName}
        error={nameError}
        errorMes={"required_field"}
        placeholder={t("name")}
        className="lg:mr-2 w-full md:w-72"
        onChange={(val) => {
          setNameWritten(true);
        }}
        inputClassName={"rounded-md py-4"}
      />

      <Input
        value={email}
        setValue={setEmail}
        error={emailError || emailInvalidError}
        errorMes={`${emailInvalidError ? "invalid_email" : "required_field"}`}
        placeholder={t("email")}
        className={`lg:mr-2  md:w-72 ${
          nameError ? "mt-8 lg:mt-0" : "mt-2"
        } lg:mt-0`}
        onChange={(val) => {
          setEmailWritten(true);
        }}
        inputClassName={"rounded-md py-4"}
      />

      <Button
        disabled={disabled || loading}
        text={t("submit_now")}
        buttonType="submit"
        className={`w-full md:w-auto ${
          emailError || emailInvalidError ? "mt-8 lg:mt-0" : "mt-2"
        } lg:mt-0`}
      />
    </form>
  );
};
