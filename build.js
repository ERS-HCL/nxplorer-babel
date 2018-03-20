const s = require('shelljs')

s.rm('-rf', 'build')
s.rm('-rf', 'reports')
s.rm('-rf', 'coverage')
s.mkdir('build')
s.mkdir('reports')
s.cp(`.${s.env.NODE_ENV}.env`, `build/.${s.env.NODE_ENV}.env`)
