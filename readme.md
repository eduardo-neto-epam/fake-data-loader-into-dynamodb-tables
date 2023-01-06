# Task 4.1.2

## Fake data loader into dynamodb tables

Node js and Typescript program that uses bash scripts to load fake products and stocks into homonymous dynamodb tables.

Requirements:

- Clone repository;
- Need aws cli configured with access key and secret access key;
- Need the tables created with correct names *Product* and *Stock*, check with 
```bash
npm run list-tables
```
- Install packages with
```bash
npm install
```
- Run 
```bash
npm run load-data
```
- On prompt, type number of products to be loaded and then Enter key.

All done. 
Run 
```bash
npm run scan-products
```
 or 
```bash
npm run scan-stocks
```
to check table contents.