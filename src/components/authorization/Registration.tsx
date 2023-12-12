import React, { FC, useEffect } from 'react'
import * as C from '../../styles/components'
import * as S from './RegistrationStyles'
import { SubmitHandler, useForm } from 'react-hook-form'
import userApi from '../../services/AuthService'
import { useNavigate } from 'react-router-dom'
import { IRegQueryData } from '../../modules/IReg'
import Logo from '../../images/icons/logo.svg'
import { useAppDispatch } from '../../hooks/redux'
import { setAuth } from '../../store/redusers/authSlice'

const Registration:FC = () => {

  const [registration, {data, error, isSuccess}] = userApi.useRegistrationMutation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (data) {
      localStorage.setItem('accessToken', data.access)
      localStorage.setItem('refreshToken', data.access)
      localStorage.setItem('role', data.user.role.toString())
      dispatch(setAuth(true))
    }
  }, [data])

  const navigate = useNavigate()

  const handleGoToAuth = () => navigate('/authorization')

  useEffect(() => {
    if (isSuccess) navigate('/vacancies')
  }, [isSuccess, navigate])

  const {
    register,
    formState: { errors, isValid},
    handleSubmit
  } = useForm<IRegQueryData>({mode: 'onBlur'})

  const onSubmit: SubmitHandler<IRegQueryData> = async (data) => {
    await registration(data)
  }

  return (
    <div>
      <S.LogoWrapper>
        <Logo/>
      </S.LogoWrapper>
      <S.Title>
            <C.H2>Зарегистрироваться</C.H2>
            <div onClick={handleGoToAuth}>Войти</div>
      </S.Title>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Label htmlFor="firstName">Имя</S.Label>
        <S.Input id='firstName' {...register('firstName', {required: 'Поле обязательно к заполнению'})}/>
        {errors?.firstName && <p>{errors?.firstName?.message}</p>}

        <S.Label htmlFor="nalastNameme">Фамилия</S.Label>
        <S.Input id='lastName' {...register('lastName', {required: 'Поле обязательно к заполнению'})}/>
        {errors?.lastName && <p>{errors?.lastName?.message}</p>}

        <S.Label htmlFor="email">Email</S.Label>
        <S.Input id='email' {...register('email', {required: 'Поле обязательно к заполнению'})}/>
        {errors?.email && <p>{errors?.email?.message}</p>}

        <S.Label htmlFor="phone">Телефон</S.Label>
        <S.Input id='phone' {...register('phone', {required: 'Поле обязательно к заполнению'})}/>
        {errors?.phone && <p>{errors?.phone?.message}</p>}

        <S.Label htmlFor="role">Выберите свою роль</S.Label>
        <S.Select id='role' {...register('role', {required: 'Поле обязательно к заполнению'})}>
          <option value="1">Рекрутер</option>
          <option value="2">Рекрутер-администратор</option>
          <option value="3">Заказчик</option>
          <option value="4">Заказчик-руководитель</option>
        </S.Select>
        {errors?.role && <p>{errors?.role?.message}</p>}

        <S.Label htmlFor="username">Придумайте логин</S.Label>
        <S.Input id='username' {...register('username', {required: 'Поле обязательно к заполнению'})}/>
        {errors?.username && <p>{errors?.username?.message}</p>}

        <S.Label htmlFor="password1">Придумайте пароль</S.Label>
        <S.Input id='password1' type="password" {...register('password1', {required: 'Поле обязательно к заполнению'})} />
        {(errors?.password1 || error) && <p>{errors?.password1?.message || 'Ошибка от апи'}</p>}

        <S.Label htmlFor="password2">Повторите пароль</S.Label>
        <S.Input id='password2' type="password" {...register('password2', {required: 'Поле обязательно к заполнению'})} />
        {(errors?.password2 || error) && <p>{errors?.password2?.message || 'Ошибка от апи'}</p>}

        <S.Label htmlFor="referralToken">Реферальная ссылка</S.Label>
        <S.Input id='referralToken' {...register('referralToken', {required: 'Поле обязательно к заполнению'})} />
        {(errors?.referralToken || error) && <p>{errors?.referralToken?.message || 'Ошибка от апи'}</p>}
        <C.FButton disabled={!isValid}>Продолжить</C.FButton>
      </S.Form>
    </div>
  )
}

export default Registration

