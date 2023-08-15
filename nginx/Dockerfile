FROM nginx:latest
LABEL Jeysson Contreras "alyconr@hotmail.com"
COPY nginx/nginx.conf /etc/nginx/conf.d/
COPY nginx/certificates /var/certificates
EXPOSE 80 443
ENTRYPOINT [ "nginx" ] 
CMD ["-g", "daemon off;"]  

