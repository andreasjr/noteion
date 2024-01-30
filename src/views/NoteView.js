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
import useNoteData from "../notion/useNoteData";

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

export default function NoteView({
	style
}) {

	const { context, setContext } = useContext(GlobalContext);

	const {
		currentNote,
	} = context;

	const noteList = useNoteData({
		noteId: currentNote
	});

	return (<View style={style}>
		<Text>{noteList}</Text>
	</View>)
}
