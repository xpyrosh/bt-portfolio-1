//Testing using git with SLI instead of VS Code

1. Create directory for files on PC
2. CD to location
3. 'git init'
4. 'git add .'
5. 'git commit -m 'first commit''
6. 'git remote add origin **\***'
7. 'git push -u origin master'

//How to set up Sass Environment

1. npm init (fill out fields)
2. npm install node-sass -D
3. create script in package.json
   - "sass": "node-sass -w scss/ -o dist/css --recursive"
   - above line means node sass is to watch (-w) our scss/ folder and output (-o) to dist/css
4. npm run sass

// VS Code Settings Changes

1. Installed Prettier extension (HATE IT)
2. Set to format on save
