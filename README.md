# nepi
A Boilerplate for Next.js + Strapi

## Starting the development environment
```
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up 
```

## Starting the production environment
```
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```
The production containers are configured to work with the reverse proxy "Traefik". If another reverse proxy is used, docker-compose.prod.yml must be rewritten.
