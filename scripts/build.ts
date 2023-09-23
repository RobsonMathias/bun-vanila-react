import Bun from 'bun';
import { copyStaticFiles } from '../config';

export const BuildConfig = {
  entrypoints: ['./src/index.tsx'],
  outdir: './dist',
  plugins: [
    copyStaticFiles
  ],
  minify: true
};

await Bun.build(BuildConfig).catch(console.log)