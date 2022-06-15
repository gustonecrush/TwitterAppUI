const Users = [
  {
    id: 1,
    name: 'Martha Craig',
    username: '@craig_love',
    verified: false,
    profile: require('../../assets/images/users/6.png'),
    tweets: [
      {
        id: 1,
        content:
          'UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou',
        comment: 28,
        retweet: 5,
        love: 21,
        created: 12,
        is_thread: true,
      },
    ],
  },
  {
    id: 2,
    name: 'Maximmilian',
    username: '@maxjacobson',
    verified: false,
    profile: require('../../assets/images/users/5.png'),
    tweets: [
      {
        id: 1,
        content: 'Y’all ready for this next post?',
        comment: 46,
        retweet: 18,
        love: 363,
        created: 3,
        is_thread: false,
      },
    ],
  },
  {
    id: 3,
    name: 'Tabitha Potter',
    username: '@mis_potter',
    verified: true,
    profile: require('../../assets/images/users/10.png'),
    tweets: [
      {
        id: 1,
        content: `Kobe’s passing is really sticking w/ me in a way I didn’t expect.He was an icon, the kind of person who wouldn’t die this way. My wife compared it to Princess Di’s accident.But the end can happen for anyone at any time, & I can’t help but think of anything else lately.`,
        comment: 7,
        retweet: 1,
        love: 11,
        created: 14,
        is_thread: false,
      },
    ],
  },
  {
    id: 4,
    name: 'karennne',
    username: '@karennne',
    verified: false,
    profile: require('../../assets/images/users/4.png'),
    tweets: [
      {
        id: 1,
        content:
          'Name a show where the lead character is the worst character on the show I’ll get Sabrina Spellman',
        comment: 1906,
        retweet: 1249,
        love: 7461,
        created: 10,
        is_thread: false,
      },
    ],
  },
];

export default Users;
