
export const VACANCY_STATUS: Record<string, string> = {
  open: "Открыта",
  suspend: "Закрыта",
  close: "Приостановлена"
}

export const CANDIDATE_STATUS: Record<number, string> = {
  1: "Новый",
  2: "Созвон",
  3: "3-й недозвон",
  4: "Резюме",
  5: "Стажировка",
  6: "Оформление",
  7: "Отказ",
  8: "Кадровый резерв"
}

export const SCHEDULE: Record<string, string> = {
  '5/2': "5/2",
  '3/2': "3/2",
  '2/2': "2/2"
}

export const REASON: Record<string, string> = {
  expansion: "Расширение штата",
  dismissal: "Увольнение сотрудника",
  promotion: "Повышение сотрудника"
}