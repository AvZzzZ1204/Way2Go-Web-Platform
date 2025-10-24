FROM python:3.12-slim

WORKDIR /code

ENV PYTHONUNBUFFERED=1

# Instalar dependencias del sistema necesarias para psycopg2
RUN apt-get update && apt-get install -y gcc libpq-dev && apt-get clean

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

ENV LANG=C.UTF-8