export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d0b4c6d45ea0d45d3437f71',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-g8cwzsuh',
                  apiId: '24c35245-52dd-4d04-8ae3-de1d9bd12770'
                },
                {
                  buildHookId: '5d0b4c6def8ba4ce07ee5352',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gnrg7oi6',
                  apiId: 'b1ce2acc-e435-4f64-bd6b-0374a68ea191'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AWolf81/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gnrg7oi6.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
