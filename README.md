# Steps to run rediscode (written in node js on ubuntu machine)
1. Right click on your desired folder and choose open in terminal option
2. On terminal type command>git clone https://github.com/deepeshkhatri1987/redisAPI19Apr.git and hit enter
3. Now Right click on folder with name: redisAPI19Apr and choose open in terminal option
4. Type command>node redisCode.js and hit enter
5. Verify our output is same as mentiopned in Test document

# Steps to run rediscode.js file directly on docker 
1. If not alreaady installed, install docker on ubuntu terminal through this command> sudo snap install docker
2. If not alreaady installed, install redis on ubuntu terminal through this command> docker pull redis
3. If node is not alreaady installed, pull node image on docker through this command: docker pull node
4. Ensure version of node js is v16 or above by typing this command in terminal window: node -v
5. If version of node js is old you can update node by typing this command in terminal: nvm install 20
6. Once version of node is confirmed as v16 or above, type this command to run node js code> node /home/user/Code/redisAPI/redisCode.js
7. Here '/home/user/Code/redisAPI/redisCode.js' is my folder path your folder path could be different. Pls paste your folder path where git clone was taken

# Steps to run Reids like miniserver.js file directly on docker 
1. If redis is instlled on your machine stop its service and port 6379 through this command: sudo systemctl stop redis.service
2. Now Right click on local folder with name: redisAPI19Apr and choose open in terminal option
3. Type command>node miniserver.js and hit enter
4. Now our reids like server is listening on port 6379
5. I was not sure if writing API to listen to this mini server is in scope so for now I have not written API code


