cd wwwsrc
npm run build
cd ..
dotnet publish -c Release
docker build -t keepr ./
docker tag keepr registry.heroku.com/keepr20/web
docker push registry.heroku.com/keepr20/web
heroku container:release web -a keepr20
echo press any key
read end