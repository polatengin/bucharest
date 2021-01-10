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
  };

  const map = new Microsoft.Maps.Map(document.getElementById("map"), { navigationBarMode: Microsoft.Maps.NavigationBarMode.compact, zoom: 10 });

  // fetch new data from API in each 150 seconds (15 seconds per sale, 10 sale)
  setInterval(fetchData, PRODUCT_COUNT * PRODUCT_SHOW_DURATION);
  // fetch first batch of sale immediately
  fetchData();
}
