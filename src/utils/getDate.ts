export function calculateAge(dateString: string): string {
	// Divida a data em dia, mês e ano usando o formato "DD/MM/AAAA"
	const parts = dateString.split("/")
	const day = parseInt(parts[0], 10)
	const month = parseInt(parts[1], 10)
	const year = parseInt(parts[2], 10)

	const now: Date = new Date()
	const today: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate())

	const yearNow: number = now.getFullYear()
	const monthNow: number = now.getMonth()
	const dateNow: number = now.getDate()

	const dob: Date = new Date(year, month - 1, day) // Mês é 0-indexado

	const yearDob: number = dob.getFullYear()
	const monthDob: number = dob.getMonth()
	const dateDob: number = dob.getDate()

	let yearAge: number
	let monthAge: number
	let dateAge: number

	yearAge = yearNow - yearDob

	if (monthNow >= monthDob) {
		monthAge = monthNow - monthDob
	} else {
		yearAge--
		monthAge = 12 + monthNow - monthDob
	}

	if (dateNow >= dateDob) {
		dateAge = dateNow - dateDob
	} else {
		monthAge--
		dateAge = 31 + dateNow - dateDob

		if (monthAge < 0) {
			monthAge = 11
			yearAge--
		}
	}

	const age = {
		years: yearAge,
		months: monthAge,
		days: dateAge,
	}

	let ageString: string = ""
	let yearString: string = ""
	let monthString: string = ""
	let dayString: string = ""

	yearString = age.years !== 1 ? " anos" : " ano"
	monthString = age.months !== 1 ? " meses" : " mês"
	dayString = age.days !== 1 ? " dias" : " dia"

	if (age.years > 0 && age.months > 0 && age.days > 0) {
		ageString = `${age.years}${yearString} e ${age.months}${monthString}`
	} else if (age.years === 0 && age.months === 0 && age.days > 0) {
		ageString = `Apenas ${age.days}${dayString}!`
	} else if (age.years > 0 && age.months === 0 && age.days === 0) {
		ageString = `${age.years}${yearString}`
	} else if (age.years > 0 && age.months > 0 && age.days === 0) {
		ageString = `${age.years}${yearString} e ${age.months}${monthString}`
	} else if (age.years === 0 && age.months > 0 && age.days > 0) {
		ageString = `${age.months}${monthString} e ${age.days}${dayString}`
	} else if (age.years > 0 && age.months === 0 && age.days > 0) {
		ageString = `${age.years}${yearString} e ${age.days}${dayString}`
	} else if (age.years === 0 && age.months > 0 && age.days === 0) {
		ageString = `${age.months}${monthString}`
	} else {
		ageString = "Oops! Não foi possível calcular a idade!"
	}

	return ageString
}

export function isBirthdayToday(dateString: string): boolean {
	// Divida a data em dia, mês e ano usando o formato "DD/MM/AAAA"
	const parts = dateString.split("/")
	const day = parseInt(parts[0], 10)
	const month = parseInt(parts[1], 10)
	const year = parseInt(parts[2], 10)

	const today: Date = new Date()
	const currentDay: number = today.getDate()
	const currentMonth: number = today.getMonth() + 1 // Mês é 0-indexado

	// Verifique se o dia e o mês de aniversário correspondem ao dia e mês atual
	return day === currentDay && month === currentMonth
}
