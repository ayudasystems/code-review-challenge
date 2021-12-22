# code-review-challenge
This challenge is about reviewing code.

## Backend

To run the backend:
1. Navigate to the backend folder in your terminal `cd backend` if you're at the root folder. 
2. Build the docker image `docker build . -t code-challenge-backend`
3. Run the container with our newly built image
`docker run -it --init -p 8080:8080 -v $(pwd):/usr/src code-challenge-backend npm run dev`
4. Navigate to `localhost:8080`
5. If you see `Hello World`, the app is running.

To test that everything works, you can change `Hello World` to `Hello World from docker!!`,
reload the page in your browser, and you should see the changes.
