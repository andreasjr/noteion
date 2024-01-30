import GlobalContext from "../lib/context";
import { useContext } from "react";
import {
	View,
	Text,
	Pressable,
	SafeAreaView,
	FlatList,
	StyleSheet
} from "react-native";
import useNoteList from "../notion/useNoteList";

const styles = StyleSheet.create({
	container: {
	  flex: 1
	},
	item: {
	  backgroundColor: '#f9c2ff',
	  padding: 20,
	  marginVertical: 8,
	  marginHorizontal: 16,
	},
	title: {
	  fontSize: 32,
	  color: "#000000"
	},
  });

const NoteItem = ({
	name,
	id,
	onPress
}) => {

	// console.log('Note item', {name, id, onPress});
	return(<Pressable onPress={onPress}>
	<View style={styles.item}>
		<Text style={styles.title}>{name}</Text>
	</View>
	</Pressable>);
};

export default function NoteList({
	style
}) {

	const { context, setContext } = useContext(GlobalContext);
	
	const { 
		currentNote,
		currentDatabase
	} = context;

	const noteList = useNoteList({
		database: currentDatabase
	});
  
	return(
		<SafeAreaView style={style}>
			{noteList && <FlatList
				data			={ noteList }
				keyExtractor	={ item => item.id }
				renderItem		={ ({item}) => <NoteItem 
					{...item}
					onPress={ () => setContext({
						...context,
						currentNote: item.id
					}) } 
				/>}
			/>}

		</SafeAreaView>
	)
}
