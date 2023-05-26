from flask_app import app

from flask import render_template, redirect, request, session, flash

from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

# from flask_app.models import user, show

@app.route('/')
def index():
    return redirect('/user/login')

@app.route('/user/login')
def login():
    return render_template('login.html')

# @app.route('/login', methods={'post'})
# def loginProcess():
#     valid_user = User.validate_login(request.form)
#     if not valid_user:
#         return redirect('/user/login') 
#     data = {'email' : request.form['email']}
#     user_in_db = user.User.get_by_email(data)
#     if user_in_db:
#         if bcrypt.check_password_hash(user_in_db.password, request.form['password']):
#             # store user in session
#             session['user_id'] = user_in_db.id
#             # redirect to home after user logs in
#             return redirect('/user/home')
#     return redirect('/')

# @app.route('/user/register', methods=['post'])
# def register():
#     # validate user input
#     if user.User.validate_registration(request.form):
#         # secure password via bcrypt (hashing and salting)
#         password_hash = bcrypt.generate_password_hash(request.form['password'])
#         card_hash = bcrypt.generate_card_hash(request.form['card_number'])
#         # if valid then save to database
#         data = {
#             'first_name' : request.form['first_name'],
#             'last_name' : request.form['last_name'],
#             'email' : request.form['email'],
#             'plan' : request.form['plan'],
#             'password' : password_hash,
#             'card_number' : card_hash
#         }
#         return redirect('/user/home')
#     return redirect('/')

# @app.route('/logout')
# def logout():
#     # clear session when logging out
#     session.clear()
#     # redirect to root route
#     return redirect('/')