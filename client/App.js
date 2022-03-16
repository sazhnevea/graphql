import React, { useState } from "react"
import AllBooks from "./AllBooks"
import Book from "./Book"

function App() {
  const [selectedBookId, setSelectedBookId] = useState()
  return (
    <>
      <div>
        <AllBooks onSelect={(book) => setSelectedBookId(book.id)} />
      </div>

      <div>
        {selectedBookId && (
          <div>
            <Book id={selectedBookId} />
          </div>
        )}
      </div>
    </>
  )
}

export default App
