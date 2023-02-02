"""
This code generates a file "User.db" as the prepopulated DB
For Android, move it under "android/app/src/main/assets"
"""

from service import (
    connection,
    create_table_with_type,
    insert_enum,
    insert_table
)


"""
CREATE TABLES
"""

create_table_with_type(
    "DailyGoal", 
    """
    done    BOOLEAN     NOT NULL,
    time    INTEGER     NOT NULL,
    title   VARCHAR(30) NOT NULL
    """,
    15
)
create_table_with_type("Food", "name VARCHAR(20) NOT NULL UNIQUE", 25)
connection.commit()


"""
INSERT ENUMS
"""

insert_enum("DailyGoal", ["Record", "Pill"])
insert_enum("Food", ["Carbs", "Dairy", "Fruits And Vegetables", "Liquids"])
connection.commit()


"""
INSERT INITIAL DATA
"""

insert_table(
    "Food",
    ["name", "type"],
    [
        ["Bread", 1],
        ["Potato", 1],
        ["Rice", 1],

        ["Cheese", 2],
        ["Milk", 2],
        ["Yogurt", 2],

        ["Pineapple", 3],
        ["Watermelon", 3],

        ["Chocolate", 4],
        ["Coffee", 4],
        ["Juice", 4],
        ["Other", 4],
        ["Tea", 4],
        ["Water", 4],
        ["Wine", 4],
    ]
)
connection.commit()


"""
INSERT SAMPLE DATA
"""

insert_table(
    "DailyGoal",
    ["done", "time", "title", "type"],
    [
        [False, 8 * 60, "Toma tu pastilla de la tensión", 2],
        [False, 12 * 60, "Registro aqui tu tensión", 1],
        [True, 18 * 60, "Registro de tensión", 1]
    ]
)
connection.commit()
