import { API_KEY } from '@env';
import { useEffect, useState } from 'react';

export default function useNoteList({
	noteId
}) {
	const [blockList, setBlockList] = useState('');

	useEffect(() => {

		console.log('AHHH')
		
		if (!noteId) {
			setBlockList('');
			return;
		}
		const fetchURL = 'https://api.notion.com/v1/blocks/' + noteId + '/children';

		fetch(fetchURL, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${API_KEY}`,
				'Notion-Version': '2022-06-28',
				'Content-Type': 'application/json'
			}
		}).then(response =>
			response.json()
		).then(response => {
			const tempBlockList = [];
			setBlockList(JSON.stringify(response));
		}).catch(error => {
			console.log('data', error);
		});
	}, [noteId]);

	return blockList;
}