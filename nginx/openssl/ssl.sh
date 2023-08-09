#!/bin/bash

if [ "$#" -ne 1 ]; then
  echo "Error: No domain name argument provided"
  echo "Usage: Provide a domain name as an argument"
  exit 1
fi

DOMAIN=$1

# Create root CA & Private key
echo "Creating rootCA.crt and rootCA.key..."
openssl req -x509 \
            -sha256 -days 356 \
            -nodes \
            -newkey rsa:2048 \
            -subj "//CN=${DOMAIN}//C=US//L=San Francisco" \
            -keyout rootCA.key -out rootCA.crt 

# Generate Private key 
echo "Generating private key for ${DOMAIN}..."
openssl genrsa -out ${DOMAIN}.key 2048

# Create csr.conf
cat > csr.conf <<EOF
[ req ]
default_bits = 2048
prompt = no
default_md = sha256
req_extensions = req_ext
distinguished_name = dn

[ dn ]
C = US
ST = California
L = San Francisco
O = MLopsHub
OU = MlopsHub Dev
CN = ${DOMAIN}

[ req_ext ]
subjectAltName = @alt_names

[ alt_names ]
DNS.1 = ${DOMAIN}
DNS.2 = 127.0.0.1
EOF

# Create CSR request using private key
echo "Creating CSR request for ${DOMAIN}..."
openssl req -new -key ${DOMAIN}.key -out ${DOMAIN}.csr -config csr.conf

# Create cert.conf
cat > cert.conf <<EOF
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names

[alt_names]
DNS.1 = ${DOMAIN}
EOF

# Create SSL certificate using self-signed CA
echo "Creating SSL certificate for ${DOMAIN}..."
openssl x509 -req \
    -in ${DOMAIN}.csr \
    -CA rootCA.crt -CAkey rootCA.key \
    -CAcreateserial -out ${DOMAIN}.crt \
    -days 365 \
    -sha256 -extfile cert.conf

echo "Certificate for ${DOMAIN} has been created."

mv ${DOMAIN}.crt ${DOMAIN}.key ../certificates


