import { GlobalRegistrator } from "@happy-dom/global-registrator";
GlobalRegistrator.register();

// happy-dom
import { Window } from 'happy-dom';
const window = new Window();
const document = window.document;
global.document = document;
global.window = window;