import React from 'react'
import * as S from './ZayavkaStyles'
import * as C from '../../styles/components'
import Close from '../../images/icons/close.svg'
import { Link, useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IVacancy } from '../../modules/IVacancy'
import vacancyApi from '../../services/VacancyService'
import { REASON, SCHEDULE } from '../../config'

const Zayavka = () => {
    const [createVacancy] = vacancyApi.useCreateVacancyMutation()
    const navigate = useNavigate()

    const {
        register,
        formState: { errors, isValid},
        handleSubmit
    } = useForm<IVacancy>({mode: 'onBlur'})

    const onSubmit: SubmitHandler<IVacancy> = async (data) => {
        await createVacancy(data)
        navigate(-1)
    }

    return (
        <div>
            <S.Title>
                <C.H2>Заявка на подбор</C.H2>
                <Link to="/vacancies">
                    <C.NButton>
                        <C.SvgIconWrapper><Close/></C.SvgIconWrapper>
                    </C.NButton>
                </Link>
            </S.Title>
            {/* <S.Info>
                <S.AutoItem>
                    <p>Заказчик:</p>
                    <p></p>
                </S.AutoItem>
                <S.AutoItem>
                    <p>Рекрутер:</p>
                    <p></p>
                </S.AutoItem>
                <S.AutoItem>
                    <p>Компания:</p>
                    <p></p>
                </S.AutoItem>
            </S.Info> */}
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Вакансия</label>
                <S.Input id="name" {...register('name')}/>

                <label htmlFor="city">Город</label>
                <S.Input id="city" {...register('city')}/>

                <label htmlFor="salary" {...register('salary')}>Зарплата</label>
                <S.Input id="salary" type="number" {...register('salary')}/>

                <label htmlFor="schedule">График</label>
                <S.Select id="schedule" {...register('schedule')}>
                    <option value="0"></option>
                    {Object.keys(SCHEDULE).map((key) => (
                        <option value={key} key={key}>{SCHEDULE[key]}</option>
                    ))}
                </S.Select>

                <label htmlFor="reason">Причина открытия вакансии</label>
                <S.Select id="reason" {...register('reason')}>
                    <option value="0"></option>
                    {Object.keys(REASON).map((key) => (
                        <option value={key} key={key}>{REASON[key]}</option>
                    ))}
                </S.Select>

                <C.FButton>Отправить</C.FButton>
            </S.Form>
        </div>
    )
}

export default Zayavka
