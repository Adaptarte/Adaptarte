from sqlite3 import (
    connect,
    Connection
)
from typing import (
    Iterable,
    TypeAlias
)

Row: TypeAlias = Iterable[bool | int | str]

DB_NAME: str = "User.db"
connection = connect(DB_NAME)
cursor = connection.cursor()


def get_table(name: str) -> str:
    return f"{name}s"


def get_enum(name: str) -> str:
    return f"{name}Type"


def create_table(name: str, attrs: str) -> str:
    table = get_table(name)
    id = "id INTEGER PRIMARY KEY AUTOINCREMENT"
    cursor.execute(f"DROP TABLE IF EXISTS {table}")
    cursor.execute(f"CREATE TABLE {table} ({id}, {attrs})")
    return table


def create_enum(table: str, size: int = 20) -> str:
    attrs = f"name VARCHAR({size}) NOT NULL UNIQUE"
    return create_table(get_enum(table), attrs)


def create_table_with_type(table: str, attrs: str, type_size: int) -> str:
    enum = create_enum(table, type_size)
    type = f"type INTEGER NOT NULL, FOREIGN KEY(type) REFERENCES {enum}(id)"
    return create_table(table, f"{attrs}, {type}")


def insert_table(table: str, cols: Iterable[str], rows: Iterable[Row]) -> str:
    values = ",".join(["?"] * len(cols))
    attrs = ",".join(cols)
    table = get_table(table)
    sql = f"INSERT INTO {table} ({attrs}) VALUES ({values})"
    cursor.executemany(sql, rows)
    return table


def insert_enum(table: str, names: Iterable[str]) -> str:
    rows = [[i] for i in names]
    return insert_table(get_enum(table), ["name"], rows)
