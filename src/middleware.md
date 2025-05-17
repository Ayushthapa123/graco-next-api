# Next.js Middleware Documentation

## Overview
This middleware file (`middleware.ts`) implements security and authentication features for our API endpoints. Think of it as a security guard that checks every request coming to our API routes before allowing access to the actual functionality.

## Key Concepts

### What is Middleware?
In web development, middleware is like a security checkpoint that sits between the client (browser/mobile app) and our server. It can:
- Check if users are authorized to access certain resources
- Add security headers to responses
- Handle cross-origin requests (CORS)
- Modify requests or responses

For Java developers: This is similar to Spring Security interceptors or servlet filters in Java applications.

## Authentication System

### Basic Authentication
The middleware implements Basic Authentication, which is a simple username/password security mechanism:

1. **Credentials Storage**:
   - Username and password are stored in environment variables
   - Default values are provided if environment variables are not set
   - For Java developers: Similar to Spring Security's `application.properties` configuration

2. **How Authentication Works**:
   - When a request comes in, it must include an `Authorization` header
   - The header should be in the format: `Basic <base64-encoded-credentials>`
   - The middleware decodes and validates these credentials
   - If valid, the request proceeds; if not, it returns a 401 Unauthorized response

## Security Features

### 1. Route Protection
- Only applies to routes starting with `/api`
- Protects GET and OPTIONS requests
- Other HTTP methods (POST, PUT, etc.) bypass authentication

### 2. Security Headers
The middleware adds several security headers to all responses:
- `X-Content-Type-Options: nosniff` - Prevents MIME type sniffing
- `X-Frame-Options: DENY` - Prevents clickjacking attacks
- `X-XSS-Protection: 1; mode=block` - Enables browser's XSS protection
- `Strict-Transport-Security` - Enforces HTTPS connections

### 3. CORS (Cross-Origin Resource Sharing)
- Handles cross-origin requests
- Allows requests from any origin (`*`)
- Supports GET, POST, and OPTIONS methods
- Allows Content-Type and Authorization headers

## Technical Implementation

### For Java Developers
This middleware is similar to:
- Spring Security's `WebSecurityConfigurerAdapter`
- Servlet Filters
- JAX-RS ContainerRequestFilter

Key differences from Java:
1. Uses TypeScript/JavaScript instead of Java
2. Runs at the edge (similar to AWS Lambda@Edge)
3. More lightweight than traditional Java middleware

### Code Structure
```typescript
// Main middleware function
export function middleware(request: NextRequest) {
  // 1. Route filtering
  // 2. Authentication check
  // 3. Security headers
  // 4. CORS handling
}

// Route configuration
export const config = {
  matcher: '/api/:path*'  // Applies to all API routes
}
```

## Common Scenarios

### 1. Making an Authenticated Request
```bash
# Example using curl
curl -X GET \
  -H "Authorization: Basic dXNlcjpwYXNzd29yZEAxMjM=" \
  http://your-api.com/api/endpoint
```

### 2. Handling Authentication Errors
If authentication fails, you'll receive:
- Status code: 401 (Unauthorized)
- Headers: WWW-Authenticate with "Basic realm" challenge
- Message: "Authentication required"


## Additional Resources
- [Next.js Middleware Documentation](https://nextjs.org/docs/middleware)
- [Basic Authentication RFC](https://tools.ietf.org/html/rfc7617)