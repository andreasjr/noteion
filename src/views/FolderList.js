import GlobalContext from "../lib/context";
import { useContext } from "react";
import {
	View,
	Text,
	Pressable
} from "react-native";
import useDatabaseList from "../notion/useDatabaseList";

export default function FolderList({
	style
}) {

	const databaseList = useDatabaseList();
	const { context, setContext } = useContext(GlobalContext);

	const { currentDatabase } = context;
  
	return(<View style={style}>
		{databaseList && databaseList?.map( note => 
			<Pressable onPress={() => setContext({
				...context,
				currentDatabase: note.id
			})} key={note.id}>
				<View>
					<Text>{note.name}</Text>
				</View>
			</Pressable>
		)}

	</View>);
}