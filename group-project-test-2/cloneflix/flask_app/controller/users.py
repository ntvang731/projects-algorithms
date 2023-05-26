from flask_app import app 
from flask_app.models.user import User
from flask import render_template, redirect, request, session
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)


@app.route('/')
def index():
    return redirect('/user/login')

@app.route('/user/login')
def login():
    return render_template('login.html')

@app.route('/user/register')
def register():
    return render_template('registration.html')

@app.route('/user/login/process', methods=['POST'])
def login_success():
    valid_user = User.validate_login(request.form)
    if not valid_user:
        return redirect('/user/login')
    
    user = User.get_by_email(request.form)
    session['user_id'] = user.id
    
    return redirect('/user/home')

@app.route('/user/register/process', methods=['POST'])
def register_success(): 
    if not User.validate_registration(request.form):
        return redirect('/user/register')
    data ={ 
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email'],
        'password': bcrypt.generate_password_hash(request.form['password']),
        'card_number': bcrypt.generate_password_hash(request.form['card_number']),
        'plan': request.form['plan']
    }
    User.save(data)
    
    return redirect('/user/login')

@app.route('/user/settings/<int:id>')
def user_settings(id):
    if 'user_id' not in session:
        return redirect('/login')
    
    data = {'id': id}
    
    return render_template('settings.html', user=User.get_user_info(data))

# @app.route('/user/settings/update/<int:id>', methods=["POST"])
# def update_account(id):
#     if 'user_id' not in session:
#         return redirect('/login')
    
#     User.update(request.form)
#     return redirect('/user/home')

@app.route('/user/settings/update/<int:id>', methods=["POST"])
def update_account(id):
    if 'user_id' not in session:
        return redirect('/login')

    first_name = request.form['first_name']
    last_name = request.form['last_name']
    email = request.form['email']
    plan = request.form['plan']
    card_number = request.form['card_number']

    data = {
        'id': id,
        'first_name': first_name,
        'last_name': last_name,
        'email': email,
        'plan': plan,
        'card_number': card_number
    }

    User.update(data)
    return redirect('/user/home')

@app.route('/logout')
def logout():
    # clear session when logging out
    session.clear()
    # redirect to root route
    return redirect('/')

@app.route('/test')
def test():
    return render_template('test.html')