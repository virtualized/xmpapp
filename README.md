#### Requirements

* Node
* npm

#### VS2015 update 3 - handle ES6 and JSX (not 100% sure this works tbh)

to allow vs 2015 update 3 to handle jsx with es6 correctly, go to:

C:\Program Files (x86)\Microsoft Visual Studio 14.0\Web\External\vs-task-server

and edit react-commands.js

replace line:

var transformed = reactTools.transformWithDetails(code, { elementMap: true });

with

var transformed = reactTools.transformWithDetails(code, { elementMap: true, es6module: "--es6module", harmony: "--harmony" });

see following links for more details:

http://stackoverflow.com/questions/34097915/visual-studio-2015-jsx-es2015-syntax-highlighting
http://stackoverflow.com/questions/34097915/visual-studio-2015-jsx-es2015-syntax-highlighting/36321109#36321109