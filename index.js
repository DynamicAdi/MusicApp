import { registerRootComponent } from 'expo';
import { App } from 'expo-router/build/qualified-entry';
import { Provider } from 'react-redux';
import {store} from "./context/store"

const AppStore = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

registerRootComponent(AppStore);