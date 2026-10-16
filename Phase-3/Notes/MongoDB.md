SQL - uses Tables, Rows, Columns
No SQL - uses Collections, Documents
    - MongoDB

# NoSQL DB
- are split into Collections
- each collection - particular type of data
    - use collection
    - blog collection
        - each with only 1 type of document

document - like a record in DB
    - each represent a single item of data
    - format like JSON: key value pair

{
    "id": Objid,
    "title": "Open Party
}



# Mongoose
is an ODM library - Object Document Mapping library

## Schemas and Models
- Schemas defines the structure of a type of data/document
    - properties and property types

**User Schema:**
- name (string), required
- age (number)
- string (string), required

**Blog Schema:**
- title (string), required
- snippet (string), required
- body (string), required


- Models allow us to communicate with database collections.

