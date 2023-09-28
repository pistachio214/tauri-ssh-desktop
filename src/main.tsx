import ReactDOM from "react-dom/client";
import { TerminalContextProvider } from 'react-terminal';
import App from "./App";
import './styles.css'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <TerminalContextProvider>
        <App />
    </TerminalContextProvider>
);
