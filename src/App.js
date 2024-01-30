/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {
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

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import GlobalContext from './lib/context';
import FolderList from './views/FolderList';
import NoteList from './views/NoteList';

import AppView from './views/AppView';

function App() {

    const [context, setContext] = useState({
        databases: DATABASES,
        currentBlock: null,
        currentNote: null,
        currentDatabase: null
    })

    return (<GlobalContext.Provider value={{
        context,
        setContext
    }}>
        <AppView />
    </GlobalContext.Provider>);
}

export default App;
