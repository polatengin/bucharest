function initMap() {
  const PRODUCT_COUNT = 10;
  const PRODUCT_SHOW_DURATION = 15 * 1000; // in seconds

  let data = [];
  let currentIndex = 0;

  const fetchData = async () => {
    // fetch latest product sale data from API
    data = await (await fetch("http://localhost:5000")).json();

    // start showing product sales on map from first item
    currentIndex = 0;
    showNextData();
  };

  const showNextData = async () => {
    // get current sale info from fetched data
    const currentData = data[currentIndex];

    // center map to current sale location
    map.setView({
      center: new Microsoft.Maps.Location(currentData.location.latitude, currentData.location.longitude)
    });

    // create information box to show current sale data on map
    const infoBox = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(currentData.location.latitude, currentData.location.longitude), {
      title: `New Sale in ${currentData.location.cityName}`,
      description: `${currentData.quantity} x ${currentData.productName}`
    });
    // show information box on map
    infoBox.setMap(map);

    // iterate to next sale data
    currentIndex++;
    if (currentIndex >= data.length) {
      currentIndex = 0;
    }
  };

  const map = new Microsoft.Maps.Map(document.getElementById("map"), { navigationBarMode: Microsoft.Maps.NavigationBarMode.compact, zoom: 10 });

  // fetch new data from API in each 150 seconds (15 seconds per sale, 10 sale)
  setInterval(fetchData, PRODUCT_COUNT * PRODUCT_SHOW_DURATION);
  // fetch first batch of sale immediately
  fetchData();
  // iterate to next sale on fetched data in each 15 seconds
  setInterval(showNextData, PRODUCT_SHOW_DURATION);
}
