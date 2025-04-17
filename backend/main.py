from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from typing import Optional

app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

@app.get("/")
def read_root():
    return {"message": "Lorem Ipsum dolor sit amet."}

@app.get("/protected")
def read_protected(token: str = Depends(oauth2_scheme)):
    # Placeholder for JWT validation
    if token != "fake-jwt-token":
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")
    return {"message": "Protected Lorem Ipsum content."}
