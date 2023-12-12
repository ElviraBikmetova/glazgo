import React from 'react'
import * as S from './ZayavkaStyles'
import * as C from '../../styles/components'
import Close from '../../images/icons/close.svg'
import { Link } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IVacancyChangeQueryData } from '../../modules/IVacancy'
import vacancyApi from '../../services/VacancyService'
import { REASON, REGION, SCHEDULE } from '../../config'

const Zayavka = () => {
    const [createVacancy] = vacancyApi.useCreateVacancyMutation()
    const {
        register,
        formState: { errors, isValid},
        handleSubmit
    } = useForm<IVacancyChangeQueryData>({mode: 'onBlur'})

    const onSubmit: SubmitHandler<IVacancyChangeQueryData> = async (data) => {
    await createVacancy(data)
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
                    <label htmlFor="project">Проект</label>
                    <S.Select id="project" {...register('project')}>
                        <option value="0"></option>
                        <option value="1">Проект 1</option>
                        <option value="2">Проект 2</option>
                        <option value="3">Проект 3</option>
                    </S.Select>
                    <label htmlFor="">Вакансия</label>
                    <S.Input />
                    <label htmlFor="region">Город</label>
                    <S.Select id="region" {...register('region')}>
                        <option value="0"></option>
                        {Object.keys(REGION).map((key) => (
                            <option value={key} key={key}>{REGION[parseInt(key)]}</option>
                        ))}
                    </S.Select>
                    <label htmlFor="salary" {...register('salary')}>Зарплата</label>
                    <S.Input id="salary" type="number" {...register('salary')}/>
                    <label htmlFor="schedule">График</label>
                    <S.Select id="schedule" {...register('schedule')}>
                        <option value="0"></option>
                        {Object.keys(SCHEDULE).map((key) => (
                            <option value={key} key={key}>{SCHEDULE[parseInt(key)]}</option>
                        ))}
                    </S.Select>
                    <label htmlFor="reason">Причина открытия вакансии</label>
                    <S.Select id="reason" {...register('reason')}>
                        <option value="0"></option>
                        {Object.keys(REASON).map((key) => (
                            <option value={key} key={key}>{REASON[parseInt(key)]}</option>
                        ))}
                    </S.Select>
                    <label htmlFor="link">Ссылка на вакансию</label>
                    <S.Input id="link" {...register('link')}/>

                    <C.FButton>Отправить</C.FButton>
                </S.Form>
        </div>
    )
}

export default Zayavka
