Step 1 — Get the Server up and running:

  clone the server repo.
  Assuming you have python 3.6+ working on your computer, run pip install -r requirements.txt from the root directory of the repo.
  Then run python -m flask run to get the server hosted on port 5000 of localhost

Step 2 (in another terminal) — Get the UI up and running:

  clone the Frontend repo.
  Assuming you have a fairly up-to-date version of node installed properly, run npm install to get all the JS/ React dependencies
  Run npm start to start the dev server on localhost:3000

If both server and frontend are running at the same time, you should see be able to click around on the App to get a random abstract, send it off, and get a returned highlighted abstract back from your localhost server
