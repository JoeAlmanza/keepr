FROM mcr.microsoft.com/dotnet/core/sdk:3.1

WORKDIR /app

COPY bin/Release/netcoreapp3.1/publish/ App/

CMD ASPNETCORE_URLS=http://*:$PORT dotnet Keepr.dll