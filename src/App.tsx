import Authorization from "./components/authorization/Authorization";
import { Route, Routes } from "react-router-dom";
import Vacancies from "./components/vacancies/Vacancies";
import NotFound from "./components/NotFound";
import Zayavka from "./components/zayavka/Zayavka";
import Vacancy from "./components/vacancy/Vacancy";
import Candidates from "./components/candidates/Candidates";
import Candidate from "./components/candidate/Candidate";
import NewCandidate from "./components/candidate/NewCandidate";
import VacancyClosed from "./components/VacancyClosed";
import Registration from "./components/authorization/Registration";
import Home from "./components/Home";
import Layout from "./components/Layout";
import authApi from "./services/AuthService";
import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { setAuth } from "./store/redusers/authSlice";
import { ERoutes } from "./enums/routes";
import { PrivateRoutes } from "./components/PrivateRoutes";
import CandidatesAll from "./components/candidates/CandidatesAll";
import { skipToken } from "@reduxjs/toolkit/dist/query/react";

const App: FC = () => {
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector(state => state.auth.isAuth)
  const [skip, setSkip] = useState(true)
  authApi.useRefreshQuery(null, {skip})

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      dispatch(setAuth(true))
      setSkip(false)
    }
  }, [])

  return (
    <Routes>
      <Route path={ERoutes.Root} element={<Layout/>}>
        <Route path={ERoutes.Registration} element={<Registration/>}/>
        <Route path={ERoutes.Authorization} element={<Authorization/>}/>
        <Route element={<PrivateRoutes isAuthenticated={isAuth} redirectPath={ERoutes.Authorization} />}>
          <Route index element={<Home/>}/>
          <Route path={ERoutes.Vacancies} element={<Vacancies/>}/>
          <Route path={ERoutes.Vacancy} element={<Vacancy/>}/>
          <Route path={ERoutes.Zayavka} element={<Zayavka/>}/>
          <Route path={ERoutes.CandidatesAll} element={<CandidatesAll/>}/>
          <Route path={ERoutes.Candidates} element={<Candidates/>}/>
          <Route path={ERoutes.Candidate} element={<Candidate/>}/>
          <Route path={ERoutes.NewCandidate} element={<NewCandidate/>}/>
          <Route path={ERoutes.VacancyClosed} element={<VacancyClosed/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;


