import React from "react"
import { useQuery } from "@apollo/react-hooks"
import * as GetBook from "./GetBook.graphql"

const Book = ({ id }) => {
  const { data, loading } = useQuery(GetBook, {
    variables: {
      id: id,
    },
  })
  const book = data ? data.getBook : null
  return book ? (
    <>
      <h2>Book title is {book.title}</h2>
    </>
  ) : (
    <>Loading...</>
  )
}

export default Book
