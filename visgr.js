function getEventsByDate(date) {
  (async () => {
    let url = `https://www.vizgr.org/historical-events/search.php?format=json&limit=10&begin_date=${date}&end_date=${date}`;

    console.log(url);

    const rawResponse = await fetch(url);
    const content = await rawResponse.json();
    console.log(content.result.event.description);
  })();
}
date = "19580420";

getEventsByDate(date);
