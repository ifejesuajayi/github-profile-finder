class Github {
  constructor() {
    this.clientID = "2f0004ab8d3d1739fcc6";
    this.clientSecret = "1396f76bb8b8350787a75ce1421a93c7365b373b";
    this.reposCount = 5;
    this.reposSort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientID}&client_secret=${this.clientSecret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
}
