import React from "react";

const Search = ({ items }) => {
  const [searchItem, setSearchItem] = React.useState("");

  const styles = {
    container: {
      margin: "20px",
    },
    input: {
      width: "100%",
      padding: "10px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      marginTop: "10px",
    },
    results: {
      listStyleType: "none",
      padding: "0",
    },
    listItem: {
      margin: "5px 0",
      padding: "10px",
      backgroundColor: "#f9f9f9",
      borderRadius: "5px",
    },
    listItemHover: {
      backgroundColor: "#e0e0e0",
    },
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <div>
        Search Bar
        <input
          style={styles.input}
          type="text"
          placeholder="Search"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </div>
      <ul style={styles.results}>
        {filteredItems.map((item, index) => (
          <li key={index} style={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
