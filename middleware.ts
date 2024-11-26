import { withAuth } from "next-auth/middleware"

// middleware is applied to all routes, use conditionals to select

export default withAuth(
  function middleware (req) {
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        const pathSegments = req.nextUrl.pathname.split('/');
        const containsU = pathSegments.some(segment => segment === 'u');
        if (containsU && token === null) {
          return false;
        }
        return true;
      }
    }
  }
)