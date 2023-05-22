from flask_app import app

from flask import render_template, redirect, request, session, flash

from flask_app.models import post, user, profile

@app.route('/new_profile')
def profile():
    # always check "if 'user_id' in session:" to check if current user is logged in
    # if user_id is not in session, redirect to index to have user log in
    if 'user_id' in session:
        this_user = user.User.get_by_id({'id' : session['user_id']})
        return render_template('new_profile.html', current_user = this_user)
    # redirect to index if user_id not in session
    return redirect('/')

@app.route('/new/create', methods=['post'])
def create_profile():
    if 'user_id' in session:
        # validate user input
        if post.Post.validate_create(request.form):
            data = {
                'name' : request.form['name'],
                'user_id' : session['user_id']
            }
            this_profile = profile.Profile.save(data)
            return redirect('/user/home')
        return redirect('/new_profile')
    return redirect('/')