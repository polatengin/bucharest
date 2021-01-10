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
  };
}
