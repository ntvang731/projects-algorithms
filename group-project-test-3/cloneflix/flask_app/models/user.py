from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import bcrypt
from flask import flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
DB = 'cloneflix'
class User: 
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.plan = data['plan']
        self.card_number = data['card_number']
        self.card_last_four = data['card_last_four']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.employee = data['employee']
        

#method to save user's information to db 
    @classmethod
    def save(cls, data):
        hashed_data = {
            'first_name': data['first_name'],
            'last_name': data['last_name'],
            'email': data['email'],
            'password': bcrypt.generate_password_hash(data['password']), 
            'card_number': bcrypt.generate_password_hash(data['card_number']), 
            'card_last_four': data['card_last_four'],  
            'plan': data['plan']
        }           
    
        query = "INSERT INTO users (first_name, last_name, email, password, card_number, card_last_four, plan) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s, %(card_number)s, %(card_last_four)s, %(plan)s)"
        return connectToMySQL(DB).query_db(query, hashed_data)

    @classmethod
    def get_by_email(cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL(DB).query_db(query,data)
        if len(results) < 1:
            return False
        return cls(results[0])
    
    @classmethod
    def get_user_info(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s"
        result = connectToMySQL(DB).query_db(query, data)
        return cls(result[0])
    
    @classmethod
    def update(cls, data):
        hashed_card_number = bcrypt.generate_password_hash(data['card_number'])
        card_last_four = data['card_number'][-4:]

        data['card_number'] = hashed_card_number
        data['card_last_four'] = card_last_four

        query = "UPDATE users SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s , plan = %(plan)s, card_number = %(card_number)s, card_last_four = %(card_last_four)s WHERE id = %(id)s;"
        return connectToMySQL(DB).query_db(query, data)
    
    @staticmethod
    def validate_registration(user):
        is_valid = True
        query = "SELECT * FROM users WHERE email = %(email)s;" 
        result = connectToMySQL(DB).query_db(query, user)
        if user['first_name'] == '':
            flash('FIRST NAME IS A REQUIRED FIELD', 'registration')
        if user['last_name'] == '':
            flash('LAST NAME IS A REQUIRED FIELD', 'registration')
            is_valid = False
        if len(result) >= 1:
            flash('EMAIL ALREADY IN USE', 'registration')
            is_valid = False
        if user['email'] == '':
            flash('EMAIL IS A REQUIRED FIELD', 'registration')
            is_valid = False
        if user['password'] == '':
            flash('PASSWORD IS A REQUIRED FIELD', 'registration')
            is_valid = False
        if user['password'] != user['confirm_password']:
            flash('PASSWORDS DO NOT MATCH' ,'registration')
            is_valid = False
        if user['card_number'] == '':
            flash('INVALID CARD NUMBER', 'registration')
            is_valid = False
        if user['plan'] == '':
            flash('PLEASE SELECT A PLAN', 'registration')
            is_valid = False
        return is_valid
    
    @staticmethod
    def validate_login(data):
        user = User.get_by_email(data)
        if not EMAIL_REGEX.match(data["email"]) or not user:
            flash("INVALID EMAIL OR PASSWORD", "login")
            return False
        return user