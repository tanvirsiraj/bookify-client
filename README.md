# Bookify

## Projects Features

- This website focuses on Library Management, allowing users to borrow and return books across
  different categories. Add, update, delete will be handled by librarian.

- There are Home, Add Book, All Books, Borrowed
  Books, and Login in the navbar. In Home page there are a banner section and a 6 cards of category section. On clicking a category name, the user will be redirected to the books related to specific category.

  On clicking the Details Button will take the user will be redirected to the bookDetails route

- In bookDetails route there's two button read and borrow button.
- Clicking the `Borrow` button, a modal will pop up. The modal will have a form requiring a
  return date, borrow date and a Submit button. Email and Name fields will be filled by the currently logged-in
  user’s email and displayName. By clicking the Submit button, the quantity of that specific book
  will be reduced by 1. Also, the book will be added to the `Borrowed Books`. If the quantity
  reduces to 0, the `Borrow` button will be disabled.

- On the `Borrowed Books` page a user will only see the books that he/she has borrowed.
- Clicking the "Return button" will increase that specific book quantity by 1, and will remove the book
  card from the "Borrowed Books" page.
- Clicking on the “Read” button will take the user to a different page where the user can read
  some content of that book.
- In All Books page librarian will see all categorised books. Each book will have an Update Button. Clicking on the `Update button` will redirect the librarian
  to a form page where user can update a book.
- In Add Book page only librarian
  add a book in the database.
- The website have a authentication system. There's Registration and Login Page.
- This website is responsive in all devices.
