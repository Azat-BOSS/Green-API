import { FC, useCallback, useEffect, useState } from "react";
import formStyle from "./form.module.css";
import Button from "../../ui/Button/Button";
import { authThunk } from "../../services/Auth/AuthSlice";
import { createSelector } from "@reduxjs/toolkit";
import { RootState, useAppSelector } from "../../services/store";
import { useAppDispatch } from "../../services/store";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../utils/cookies/cookie";
import arrowString from "../../assets/icons/arrow.svg"

const AuthForm: FC = () => {
  const navigate = useNavigate()
  const formSelector = createSelector(
    (state: RootState) => state.AuthSlice.success,
    (success) => ({success})
  )
  const dispatch = useAppDispatch()

  const [idInst, setIdInst] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [isSend, setIsSend] = useState<boolean>(false);
  const {success} = useAppSelector(formSelector);

  const submitData = useCallback((evt: React.FormEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setIsSend(true);
  }, [setIsSend])

  useEffect(() => {
    isSend && dispatch(authThunk({idInst: idInst, apiToken: token}))
    setTimeout(() => {
      setIsSend(false);
    }, 0)
  }, [authThunk, isSend])

  useEffect(() => {
    success && (
      navigate(`/messages/${idInst}`),
      setCookie("idInstance", idInst),
      setCookie("apiToken", token)
    )
  }, [success])

  return (  
    <div className={formStyle.form}>
      <h3 className={formStyle.form__title}>Авторизация</h3>
      <form className={formStyle.form__block} onSubmit={(evt: any) => submitData(evt)}>
        <div className={formStyle.form__inputs}>
          <input 
            type="number" 
            className={formStyle.form__input} 
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setIdInst(evt.target.value)} 
            value={idInst}
            placeholder="IdInstance"/>
          <input 
            type="text" 
            className={formStyle.form__input} 
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setToken(evt.target.value)} 
            value={token}
            placeholder="ApiTokenInstance"/>
          </div>
          <div className={formStyle.form__error__block}>
            {success === false && <p className={formStyle.form__error__msg}>Пользователь неавторизован</p>}
          </div>
          <div className={formStyle.form__btn__container}>
            <Button text="Отправить" icon={arrowString}></Button>
          </div>
      </form>
    </div>
  );
}
 
export default AuthForm;