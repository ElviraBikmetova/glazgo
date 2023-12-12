export enum ERoutes {
    Root = "/",

    Registration = "/registration",
    Authorization = "/authorization",
    Zayavka = "zayavka",
    Vacancies = "vacancies",
    Vacancy = "vacancies/:id",
    Candidates = "vacancies/:id/candidates",
    Candidate = "candidates/:id",
    CandidatesAll = "candidates",
    NewCandidate = "new-candidate",
    VacancyClosed = "vacancy-closed/:id",
    Chat = "chat",
}
