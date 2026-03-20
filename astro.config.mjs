import { defineConfig } from 'astro/config';

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGithubActions ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io` : 'http://localhost:4321',
  base: isGithubActions && repo ? `/${repo}/` : '/',
  output: 'static'
});
