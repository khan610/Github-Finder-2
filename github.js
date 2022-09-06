class GitHub {
  constructor() {
    this.client_id = 'd2390423940asdds1293109d';
    this.client_secret = '0923840932sadkj5430953409509324bb90b345f324';
  }

  async getUser(user) {
    const profileResponse = await fetch(`
    https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();

    return {
      profile,
    };
  }
}
