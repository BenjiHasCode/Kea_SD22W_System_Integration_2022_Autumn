from fastapi import FastAPI, Query

app = FastAPI()

@app.get("/")
def _():
    return { "Hello": "World" }

@app.get("/items")
def _(page: int = Query(default=1, gt=0)):
    return { "page": page }

@app.get("/items/{item_id}")
def _(item_id: int):
    return { "item_id": item_id }

