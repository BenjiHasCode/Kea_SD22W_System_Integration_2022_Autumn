import re
from fastapi import FastAPI, Request

app = FastAPI()

@app.post("/webhook")
async def _(request: Request):
    body = await request.json()
    print(body)
    return {"message": "OK"}


