import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from 'redux/configureStore'
import App from 'components/App';
import I18n from 'redux-i18n'
import { translations } from 'translations'

ReactDOM.render(
    <Provider store={store}>
        <I18n translations={translations} initialLang='kr' fallbackLang='kr'>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </I18n>
    </Provider>
, document.getElementById('root'));

