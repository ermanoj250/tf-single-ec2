def get_data():
    try:
        with open('names.txt', 'r') as file:
            names = file.read()
            data = names.split()

        return {
            "message": "Data read from file",
            "data": data
        }

    except FileNotFoundError:
        return {
            "error": "names.txt not found"
        }