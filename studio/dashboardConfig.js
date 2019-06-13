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
                  buildHookId: '5d0256808cdebc3cd6f75792',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-omrkioy5',
                  apiId: 'a8495aa1-5a84-4c44-bc1e-21d6dada52ba'
                },
                {
                  buildHookId: '5d025681311178f6f905e170',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-q51wwjez',
                  apiId: '51635828-8b92-40be-a947-7fe9f487bf4c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cstrnt/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-q51wwjez.netlify.com', category: 'apps'}
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
