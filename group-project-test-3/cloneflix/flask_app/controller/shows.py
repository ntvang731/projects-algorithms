from flask_app import app 
from flask_app.models.show import Show
from flask_app.models.user import User
from flask import render_template, redirect, request, session

@app.route('/user/home')
def home_page():
    if 'user_id' not in session:
        return redirect('/login')
    
    return render_template('home.html', shows=Show.get_all_shows(), user=User.get_user_info({'id':session['user_id']}))

@app.route('/user/home/add/<int:show_id>', methods=['POST'])
def save_for_user(show_id):
    if 'user_id' not in session:
        return redirect('/login')
    Show.save_for_user(session['user_id'], show_id)
    return redirect('/user/home')

@app.route('/user/my_list')
def my_list():
    if 'user_id' not in session:
        return redirect('/login')
    
    return render_template('my_list.html', shows=Show.get_my_list(session['user_id']), user=User.get_user_info({'id':session['user_id']}))

@app.route('/user/show/new')
def new_show():
    if 'user_id' not in session:
        return redirect('/login')
    
    return render_template('new_show.html', user=User.get_user_info({'id':session['user_id']}))

@app.route('/user/show/new/process', methods=['POST'])
def create_show():
    if 'user_id' not in session:
        return redirect('/login')
    
    data = {
        'show_name': request.form['show_name'],
        'show_description': request.form['show_description'],
        'image_url': request.form['image_url']
    }
    
    Show.create_show(data)
    return redirect('/user/home')

@app.route('/user/my_list/remove', methods=['POST'])
def remove_favorite():
    user_id = request.form.get('user_id')
    show_id = request.form.get('show_id')

    Show.remove_from_my_list(user_id, show_id)

    return redirect('/user/my_list')