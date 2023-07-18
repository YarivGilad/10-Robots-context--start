import ReactDOMClient from 'react-dom/client'
import { App } from './view/App.tsx'
import { GlobalStyle as ResetCSS } from './styles/reset.styles.ts';
import { StyleSheetManager } from 'styled-components';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);
root.render(
    <StyleSheetManager shouldForwardProp={(name) => !name.startsWith('$')}>
        <ResetCSS />
        <App />
    </StyleSheetManager>)