import Bun from 'bun';
import { liveReload } from '../config';
import { BuildConfig } from './build';

Bun.serve(liveReload({
  port: 9000,
  fetch: async (request) => {
    const url = new URL(request.url);
    const dir = import.meta.dir;
    const outFolder = `${dir}/../dist`;
    const file = Bun.file(`${outFolder}${url.pathname}`);
    const exists = await file.exists();
    return exists ? new Response(file) : new Response(Bun.file(`${outFolder}/index.html`))
  },
}, {
  watchPath: `${import.meta.dir}/../src`,
  buildConfig: BuildConfig
}))
