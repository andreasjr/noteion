import {API_KEY, DATABASES} from '@env';
import { useEffect, useState } from 'react';

export default function useDatabaseList() {
	const [databaseList, setDatabaseList] = useState([ { name: "All", id: null } ]);

	const databases = [
		'c719fabdade44851a4afb4e18448c222',
		'47fd5307d42b46948282a6932cbc962c'
	];
	  
	useEffect(() => {
		// setDatabaseList([ { name: "All", id: null } ]);
		databases.forEach( database => {
			fetch( 'https://api.notion.com/v1/databases/' + database, {
				method: 'GET',
				headers: {
					'Authorization': `Bearer ${API_KEY}`,
					'Notion-Version': '2022-06-28',
					'Content-Type': 'application/json'
				}
			}).then(response =>
				response.json()
			).then(result => {
				console.log('DATABASES', result);
				const name = result?.title?.[0]?.text?.content ?? null;

				const alreadyThere = databaseList.some( list => list.id === result?.id );
	
				// console.log('already there!', alreadyThere);
				if (name && !alreadyThere) setDatabaseList([
					...databaseList,
					{
						name: name,
						id: result?.id
					}
				])
				
			}).catch( error => {
				console.log('whoopsie', error)
			});
		});
	}, [databases])

	return databaseList;
}