import usersData from '@/data/usersData.json'
import productsData from '@/data/productsData.json'

export default function getDatabase(searchParams) {
  const display = searchParams.get('display')
  if (display == 'users') { 
    return usersData
  }
  else if (display == 'products') {
    return productsData
  }
  else { 
    return null 
  }
}