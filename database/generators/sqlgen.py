import pandas as pd

def csv_to_sql(csv_file, table_name):
    # Read the CSV file into a pandas DataFrame
    df = pd.read_csv(csv_file)
    
    # Generate the SQL query for creating the table
    create_table_query = f"CREATE TABLE IF NOT EXISTS {table_name} ("
    for column in df.columns:
        # Assuming all columns are of type VARCHAR for simplicity
        create_table_query += f"{column} VARCHAR,"
    create_table_query = create_table_query[:-1] + ");"
    
    # Generate the SQL query for inserting data
    insert_query = f"INSERT INTO {table_name} VALUES "
    for index, row in df.iterrows():
        values = ",".join([f"'{str(val)}'" for val in row.values])
        insert_query += f"({values}),"
    insert_query = insert_query[:-1] + ";"
    
    return create_table_query, insert_query

def main():
    csv_file = "geography_questions.csv"  # Change this to the path of your CSV file
    table_name = "questions"  # Change this to the desired table name
    
    create_table_query, insert_query = csv_to_sql(csv_file, table_name)
    
    print("CREATE TABLE QUERY:")
    print(create_table_query)
    print("\nINSERT QUERY:")
    print(insert_query)

if __name__ == "__main__":
    main()
