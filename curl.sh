// --- users ---- //
// create a user
curl -X POST http://localhost:3000/users \
-H "Content-Type: application/json" \
-d '{"username": "ariel", "password": "123"}'

// find one user
// just work if the user is you xD
curl http://localhost:3000/users/ariel

// ---- auth ---- //


// ---- movies --- //
// create a movie
curl -X POST 