from flask_app.config.mysqlconnection import connectToMySQL

DB = 'cloneflix'
class Show: 
    def __init__(self, data):
        self.id = data['id']
        self.show_name = data['show_name']
        self.show_description = data['show_description']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.image_url = data['image_url']

#method to get all shows for the home page
    @classmethod
    def get_all_shows(cls):
        query = 'SELECT * FROM shows;'
        results = connectToMySQL(DB).query_db(query)
        shows = []
        for show in results:
            shows.append(cls(show))
        return shows
    
#method to get all shows for a user for "my list"
    @classmethod
    def get_my_list(cls, user_id):
        query = """
        SELECT shows.id, shows.show_name, shows.show_description, shows.created_at, shows.updated_at, shows.image_url
        FROM shows
        JOIN my_list ON shows.id = my_list.show_id
        WHERE my_list.user_id = %(user_id)s;
        """
        data = {'user_id': user_id}
        results = connectToMySQL(DB).query_db(query, data)
        shows = []
        for show in results:
            shows.append(cls(show))
        return shows
    
#method to save a show to "my list" for user
    @classmethod
    def save_for_user(cls, user_id, show_id):
        query = "INSERT INTO my_list (user_id, show_id) VALUES (%(user_id)s, %(show_id)s);"
        data = {
            'user_id': user_id,
            'show_id': show_id,
        }
        return connectToMySQL(DB).query_db(query, data)
    
    @classmethod
    def create_show(cls, data):
        query = "INSERT INTO shows (show_name, show_description, image_url) VALUES (%(show_name)s, %(show_description)s, %(image_url)s);"
        return connectToMySQL(DB).query_db(query, data)
    
    @classmethod
    def remove_from_my_list(cls, user_id, show_id):
        query = """
        DELETE FROM my_list
        WHERE user_id = %(user_id)s AND show_id = %(show_id)s;
        """
        data = {'user_id': user_id, 'show_id': show_id}
        connectToMySQL(DB).query_db(query, data)
        