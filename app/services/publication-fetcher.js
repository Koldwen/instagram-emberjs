import Service from '@ember/service';

export default class PublicationFetcherService extends Service {
  usernames = [
    'CrocodileHunter',
    'MonkeyFanclub',
    'LasagnaLover',
    'PizzaEater',
    'WallStreetBets',
    'Fake.guru',
  ];
  description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dictum mauris. Praesent diam odio, volutpat pharetra ligula ut, lobortis blandit velit. Sed vel vestibulum quam, sed tincidunt erat.';

  // This should be a fetch to the backend
  async fetchPublication() {
    return {
      username:
        this.usernames[this.getRandomIntBetween(0, this.usernames.length - 1)],
      publicationDate: `${this.getRandomIntBetween(1, 28)}/${this.getRandomIntBetween(1, 12)}/${this.getRandomIntBetween(2020, 2023)}`,
      likes: this.getRandomIntBetween(1, 10000),
      media: `https://source.unsplash.com/random/470x470?sig=${this.getRandomIntBetween(1, 10000)}`,
      profilePicture: `https://source.unsplash.com/random/32x32?sig=${this.getRandomIntBetween(1, 10000)}`,
      description: this.description,
    };
  }

  getRandomIntBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
