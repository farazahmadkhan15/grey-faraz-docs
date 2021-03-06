module.exports = {
  prompts() {
    return [
      {
        name: 'name',
        message: 'Project name:',
        default: this.outFolder,
        filter: (val) => val.toLowerCase(),
      },
      {
        name: 'title',
        message: 'Project title:',
        default: 'Documentation Website',
      },
    ]
  },
  templateData() {
    const pm = this.answers.pm === 'yarn' ? 'yarn' : 'npm'
    const pmRun = this.answers.pm === 'yarn' ? 'yarn' : 'npm run'

    return {
      pm,
      pmRun,
    }
  },
  actions: [
    {
      type: 'add',
      files: '**',
      templateDir: '../template',
    },
    {
      type: 'move',
      patterns: {
        gitignore: '.gitignore',
        '_package.json': 'package.json',
      },
    },
  ],
  async completed() {
    this.gitInit()
    await this.npmInstall()
    this.showProjectTips()
  },
}
