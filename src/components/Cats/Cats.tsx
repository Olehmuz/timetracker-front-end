import axios from 'axios'
import React from 'react'

interface Cat {
	"tags":[],
	"createdAt":string,
	"updatedAt":string,
	"validated":boolean,
	"owner":string,
	"file":string,
	"mimetype":string,
	"size":number,
	"_id":string,
	"url":string
} 

const Cats = () => {

	const getNewCat = () => {
		axios.get<Cat>('https://cataas.com/cat?json=true').then((res) => {
			setCatData(res.data.url)
		})
	}

	const [catData, setCatData] = React.useState('')
	React.useEffect(() => {
		getNewCat()
	}, [])

  return (
	<div className='flex flex-col items-center mt-[150px] w-full'>
		{catData && (<img width='400px' height='400px' src={`https://cataas.com/${catData}`} alt='cat'/>)}
		<button onClick={getNewCat} className='w-[200px] mt-[50px] mb-3 bg-[#dfe1e6] border px-3 py-1.5 border-[#dfe1e6] hover:bg-[#e4e6ea] rounded-lg'>Pick a cat!</button>
	</div>
  )
}

export default Cats