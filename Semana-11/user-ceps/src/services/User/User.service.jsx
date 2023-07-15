const API_URL = 'http://localhost:3000/users'
const API_CEP = 'viacep.com.br/ws/CEP/json/'

// Method GET
const GetUsers = async () => {
	try {
		const data = await fetch(API_URL).then((res) => res.json())
		return console.log(data)
	} catch (error) {
		console.log(error.message)
	}
}

const ShowUser = async (id) => {
	try {
		const data = await fetch(`${API_URL}/${id}`).then((res) => res.json())
		return console.log(data)
	} catch (error) {
		console.log(error.message)
	}
}

const ShowByEmail = async (email) => {
	try {
		let filter = `${API_URL}/?email=${email}`
		const data = await fetch(filter).then((res) => res.json())
		return console.log(data[0])
	} catch (error) {
		console.log(error.message)
	}
}

// Method POST
const Create = async (data) => {
	try {
		const response = await fetch(API_URL, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then((res) => res.json())

		return console.log(`${data.email} criado com sucesso`)
	} catch (error) {
		console.log(error.message)
	}
}

// API VIA CEP
const GetCep = async (cep) => {
    const api_cep = `http://viacep.com.br/ws/${cep.replace('-','').trim()}/json/`
    const data = await fetch(api_cep).then(res => res.json())

    console.log(data)
}

export const UserService = {
	GetUsers,
	ShowUser,
	ShowByEmail,
    Create,
    GetCep,
}
