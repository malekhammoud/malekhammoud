#!/bin/bash

# Define the database and output file
DB_FILE="saas_data.db"
OUTPUT_FILE="categories_list.txt"

# Check if the database exists
if [ ! -f "$DB_FILE" ]; then
    echo "Error: $DB_FILE not found."
    exit 1
fi

# Query the categories and save them to the output file
sqlite3 "$DB_FILE" "SELECT name FROM categories ORDER BY name ASC;" > "$OUTPUT_FILE"

echo "Successfully exported categories to $OUTPUT_FILE"
