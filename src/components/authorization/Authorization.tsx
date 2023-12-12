import { FC, useEffect } from 'react'
import * as C from '../../styles/components'
import * as S from './AuthorizationStyles'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthData } from '../../modules/IAuth'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setAuth } from '../../store/redusers/authSlice'
import authApi from '../../services/AuthService'
import Logo from '../../images/icons/logo.svg'

const Authorization:FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [login, { data, error, isSuccess }] = authApi.useLoginMutation()
  const isAuth = useAppSelector(state => state.auth.isAuth)

  const onSubmit: SubmitHandler<IAuthData> = async (data) => {
    await login(data)
    reset()
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(setAuth(true))
      if (data) {
        localStorage.setItem('accessToken', data.access)
        localStorage.setItem('refreshToken', data.refresh)
        localStorage.setItem('role', data.user.role.toString())
      }
      navigate('/')
    }
    if (isAuth) navigate(-1)
  }, [data, dispatch, isAuth, isSuccess, navigate])

  const handleGoToReg = () => navigate('/registration')

  const {
    register,
    formState: { errors, isValid},
    handleSubmit,
    reset
  } = useForm<IAuthData>({mode: 'onBlur'})

  return (
    <div>
      <S.LogoWrapper>
        <Logo/>
      </S.LogoWrapper>
      <S.Title>
        <C.H2>Войти</C.H2>
        <div onClick={handleGoToReg}>Зарегистрироваться</div>
      </S.Title>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Label htmlFor="username">Логин</S.Label>
        <S.Input id='username' {...register('username', {required: 'Поле обязательно к заполнению'})}/>
        {errors?.username && <S.Error>{errors?.username?.message}</S.Error>}
        <S.Label htmlFor="username">Email</S.Label>
        <S.Input id='email' {...register('email', {required: 'Поле обязательно к заполнению'})}/>
        {errors?.email && <S.Error>{errors?.email?.message}</S.Error>}
        <S.Label htmlFor="password">Пароль</S.Label>
        <S.Input id='password' type="password" {...register('password', {required: 'Поле обязательно к заполнению'})} />
        {(errors?.password || error) && <S.Error>{errors?.password?.message || 'Неверные данные'}</S.Error>}
        <S.CFButton disabled={!isValid}>Продолжить</S.CFButton>
      </S.Form>
    </div>
  )
}

export default Authorization
