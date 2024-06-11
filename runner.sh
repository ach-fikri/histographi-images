#!/bin/bash
cd api

python -m venv .venv

source .venv/Scripts/activate
pip install -r requirements.txt

cd ..

npm run dev &

python ./api/main.py

wait