import React from 'react'
import '@css'
import ChartView from '@/screens/ChartView'

function App() {
	return (
		<div className="App">
			<nav className="flex text-4xl bg-slate-600 p-5 m-auto">
				<div className="mx-10 cursor-pointer hover: text-blue-300">sample 1</div>
				<div className="  mx-10">sample 2</div>
				<div className="  mx-10">sample 3</div>
			</nav>
			<h1 className="text-3xl font-bold underline"> Hello world! </h1>
			{/* <ChdivrtView className='ml-5'/> */}
		</div>
	)
}

export default App
