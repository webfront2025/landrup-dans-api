import Ejendom from "@/components/ejendom"
import { serverFetch } from "@/lib/server-fetch"

export default async function Ejendomme() {
	const data = await serverFetch("https://dinmaegler.onrender.com/homes")
	//const nogetAndetData = await serverFetch("https://dinmaegler.onrender.com/agents")

	return (
		<>
			<h1>Alle ejendomme</h1>
			<ul>
				{data.map(ejendom => <Ejendom key={ejendom.id} ejendom={ejendom} />)}
			</ul>
		</>
	)
}
