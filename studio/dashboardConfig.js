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
                  buildHookId: '602391bef878904bcb4463ed',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-od7bvfz8',
                  apiId: '9c4de42f-9c3e-4916-ba62-bc7096250def'
                },
                {
                  buildHookId: '602391be4f81d354e1b8c070',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-jb49rwz7',
                  apiId: 'd2db3d82-0b71-48c1-9841-ce91cc1939b6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paalfredrik/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-jb49rwz7.netlify.app', category: 'apps'}
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
