
interface ValidUser {
    user_id: number,
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    token: string
  }

  interface Collectible {
    book_title: string,
    author: string,
    language: string,
    type: string,
    description: string
  }

  interface Postable {
    body: string
    timestamp: string | Date
  }

  