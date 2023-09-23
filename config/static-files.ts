import fs from 'fs';
import type { BunPlugin } from 'bun';

export const copyStaticFiles: BunPlugin = {
  name: "Copy Static Files",
  setup: async (build) => {
    const files = fs.readdirSync('./public');
    if (!fs.existsSync(build.config.outdir)) fs.mkdirSync(build.config.outdir);
    for (const file of files) {
      fs.copyFileSync(`public/${file}`, `${build.config.outdir}/${file}`);
    }
  },
};