import React from "react"
import { useQuery } from "@apollo/react-hooks"
import * as getAllBooks from "./GetAllBooks.graphql"

const AllBooks = ({ onSelect }) => {
  const { data, loading } = useQuery(getAllBooks)

  return (
    <>
      <h1>All books</h1>

      {loading && <>loading</>}

      {!loading && data.getAllBooks && (
        <ul>
          {data.getAllBooks.map((book) => (
            <li key={book.title}>
              {book.id}: {book.title} ({book.author.firstName}{" "}
              {book.author.lastName}){" "}
              <button onClick={() => onSelect(book)}>select</button>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default AllBooks
