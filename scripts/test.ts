import { GlobalRegistrator } from "@happy-dom/global-registrator";
import { Window } from 'happy-dom';

GlobalRegistrator.register();
const window = new Window();
const document = window.document;
global.document = document;
global.window = window;