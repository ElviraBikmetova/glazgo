export const formatDate = (stringDate: string) => {
	const date = new Date(stringDate)
	return date.toLocaleDateString('ru-RU')
}

