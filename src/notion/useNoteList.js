import { API_KEY, DATABASES } from '@env';
import { useEffect, useState } from 'react';

export default function useNoteList({
	database
}) {
	const [pageList, setPageList] = useState([]);
	// console.log('current db: ', database);

	useEffect(() => {
		let newPageList = [];
		const fetchURL = 'https://api.notion.com/v1/databases/' + database + '/query';

		if (!database) {
			setPageList(newPageList);
			return;
		}

		fetch(fetchURL, {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${API_KEY}`,
				'Notion-Version': '2022-06-28',
				'Content-Type': 'application/json'
			}
		}).then(response =>
			response.json()
		).then(response => {
			// console.log('NOTES', response);
			const tempPageList = [];
			response.results.forEach(result => {
				const name = result?.properties?.Name?.title?.[0]?.text?.content ?? null;

				const alreadyThere = pageList.some(list => list.id === result?.id);

				if (name && !alreadyThere) tempPageList.push(
					{
						name: name,
						id: result?.id
					}
				);
			});
			newPageList = tempPageList;
			setPageList(newPageList);
		}).catch(error => {
			console.log('notelist', error);
		});
	}, [database]);

	return pageList;
}