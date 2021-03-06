# Bucharest Project

Show and live-update sale data on map

## Server

.Net 5 project, simply returns list of latest sale data

To run the project, go to [./server](./server) folder and run the following command on _Terminal_

```bash
dotnet run
```

_API_ will run on [http://localhost:5000](http://localhost:5000) and [https://localhost:5001](https://localhost:5001)

## Client

[Bing Maps v8 Javascript API](https://docs.microsoft.com/en-us/bingmaps/getting-started/) show map on the screen and sale data in an infobox.

To run the project, go to [./client](./client) folder and run the following command on _Terminal_

```bash
npm run start
```

[http-server](https://www.npmjs.com/package/http-server) will start serving the client app on [http://localhost:8080](http://localhost:8080)
