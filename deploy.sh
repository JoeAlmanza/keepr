dotnet publish -c Release
docker build -t keepr ./bin/Release/netcoreapp3.1/publish
docker tag keepr registry.heroku.com/keepr20/web
docker push registry.heroku.com/keepr20/web
heroku container:release web -a keepr20