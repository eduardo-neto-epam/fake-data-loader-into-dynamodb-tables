#!/bin/bash
#Load products table with desired number of products
aws dynamodb batch-write-item --request-items file://build/src/mocks/json_data/products.json