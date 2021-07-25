const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://docs.cryptex.finance',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://cryptex.finance/logo.svg',
    logoLink: 'https://docs.cryptex.finance',
    title:
      "<a href='https://docs.cryptex.finance'><img class='img-responsive' src='https://cryptex.finance/logo.svg' alt='Learn logo' /></a>",
    githubUrl: 'https://github.com/cryptexfinance/community-coordination',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/cryptexfinance" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discord.gg/N5zEq6b" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/FAQs', // add trailing slash if enabled above
      '/TCAP',
      '/CTX',
      '/Vaults',
      '/Farming',
      '/Liquidity Pools',
    ],

    links: [{ text: 'CRYPTEX', link: 'https://docs.crypex.finance' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://docs.cryptex.finance'><img class='img-responsive' src='https://cryptex.finance/logo.svg' alt='Learn logo' /></a>",
  },
  siteMetadata: {
    title: 'Cryptex Finance Docs',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    docsLocation: 'https://github.com/lenhartjames/community-coordination/tree/main/docs/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Cryptex Finance Docs',
      short_name: 'Cryptexdocs',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
