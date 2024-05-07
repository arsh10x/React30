//** PAGINATION COMPONENT

import React from 'react';

const Pagination = ({ items, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const styles = {
        container: {
            margin: '20px',
        },
        heading: {
            fontSize: '20px',
            marginBottom: '10px',
        },
        list: {
            listStyleType: 'none',
            padding: '0',
        },
        item: {
            marginBottom: '5px',
        },
        button: {
            padding: '5px 10px',
            marginRight: '5px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        },
    };

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Pagination</h2>
            <ul style={styles.list}>
                {currentItems.map((item, index) => (
                    <div key={index} style={styles.item}>{item}</div>
                ))}
            </ul>
            {pageNumbers.map(number => (
                <button
                    key={number}
                    style={styles.button}
                    onClick={() => setCurrentPage(number)}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}>
                    {number}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
