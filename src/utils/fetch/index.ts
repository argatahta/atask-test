export async function fetchFromGitHub(
  url: string,
  params: Record<string, unknown> = {}
) {
  const query = new URLSearchParams({
    ...Object.fromEntries(
      Object.entries(params).map(([k, v]) => [k, String(v)])
    ),
  }).toString();

  const response = await fetch(`https://api.github.com${url}?${query}`, {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
      Accept: "application/vnd.github+json",
    },
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  return response.json();
}
