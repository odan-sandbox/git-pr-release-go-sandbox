import * as github from "@actions/github";

const client = github.getOctokit(process.env.GITHUB_TOKEN);
const resp = await client.rest.repos.getReleaseByTag({
  owner: "odanado",
  repo: "git-pr-release-go",
  tag: "v0.0.3",
  platform: "Linux",
});
console.log(resp.data);
