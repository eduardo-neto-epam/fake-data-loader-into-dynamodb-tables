#!/bin/bash
#Load stocks table with fake data
aws dynamodb batch-write-item --request-items file://build/src/mocks/json_data/stocks.json