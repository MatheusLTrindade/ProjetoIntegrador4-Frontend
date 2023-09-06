export default async function ViaCep(req, res) {
	if (req.method === 'GET') {
		const { cep } = req.query;
		try {
			const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
			const data = await response.json();
			res.json(data);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal Server Error' });
		}
	}
}
