import React, {
    useContext,
    useState
} from 'react';
import { API_KEY, DATABASES } from '@env';
import { PropsWithChildren } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import FolderList from './FolderList';
import NoteList from './NoteList';
import GlobalContext from '../lib/context';
import NoteView from './NoteView';

export default function AppView() {
    console.log('rerender');

    return (<View style={{
            flexDirection: 'row',
            height: '100%',
            padding: 20,
          }}>
            <FolderList style={{
                flexBasis: '20%'
            }} />
            <NoteList style={{
                flexBasis: '35%'
            }} />
            <NoteView style={{
                flexBasis: "45%"
            }} />
    </View>)
}


const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});