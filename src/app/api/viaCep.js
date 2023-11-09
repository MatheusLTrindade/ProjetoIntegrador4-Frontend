export default async function ViaCep(cep) {
	try {
    const resp = await fetch(`https://viacep.com.br/ws/${cep}/json`)
    if (resp.ok) {
      const data = await resp.json()
      return { street: data.logradouro, district: data.bairro }
    } else {
      return { street: '', district: '' }
    }
  } catch (error) {
    return { street: '', district: '' }
  }
}
