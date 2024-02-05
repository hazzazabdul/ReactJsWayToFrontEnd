/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import JobPosting from "./components/JobPosting";

const ITEMS_PER_PAGE = 6;
const API_ENDPOINT = "https://hacker-news.firebaseio.com/v0";

const App = () => {
  const [items, setItems] = useState([]);
  const [itemIds, SetItemIds] = useState(null);
  const [fetchingDetails, setFetchingDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchItems = async (currPage) => {
    setCurrentPage(currPage);
    setFetchingDetails(true);

    let listItems = itemIds;
    if (listItems === null) {
      const response = await fetch(`${API_ENDPOINT}/jobstories.json`);
      listItems = await response.json();
      SetItemIds(listItems);
    }

    const itemsIdForPage = listItems.slice(
      currPage * ITEMS_PER_PAGE,
      currPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );

    const itemsForPage = await Promise.all(
      itemsIdForPage.map((itemId) =>
        fetch(`${API_ENDPOINT}/item/${itemId}.json`).then((res) => res.json())
      )
    );
    setItems([...items, ...itemsForPage]);
    setFetchingDetails(false);
  };

  useEffect(() => {
    if (currentPage === 0) fetchItems(currentPage);
  }, []);

  return (
    <div className="wrapper">
      <h1 className="title">Job Board</h1>
      {itemIds === null || items.length < 1 ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="listing">
          <div className="items" role="list">
            {items.map((item) => (
              <JobPosting key={item.id} {...item} />
            ))}
          </div>
          <button
            disabled={fetchingDetails}
            onClick={() => fetchItems(currentPage + 1)}
            className="loadmore__btn"
          >
            {fetchingDetails ? "Loading..." : "Load More Jobs"}
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
