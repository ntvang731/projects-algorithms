from flask_app import app

from flask import render_template, redirect, request, session, flash

from flask_app.models import post, user



# @app.route('/edit/<int:favorites>')
# def edit(one_post_id):
#     if 'user_id' in session:
#         this_user = user.User.get_by_id_purchased_cars({'id' : session['user_id']})
#         this_post = post.Post.get_by_id_creator({'id' : one_post_id})
#         return render_template('edit_posting.html', current_user = this_user, one_post = this_post)
#     return redirect('/')

@app.route('/user/home')
def home():
    if 'user_id' in session:
        this_user = user.User.get_by_id({'id' : session['user_id']})
        catalog_shows = shows.Shows.get_all()
        return render_template('home.html', current_user = this_user, all_shows = these_shows)
    # redirect to index if user_id not in session
    return redirect('/')

@app.route('/display/<int:one_show_id>')
def show_posting(one_show_id):
    if 'user_id' in session:
        this_show = show.Show.get_by_id({'id' : session['show_id']})
        return render_template('show_description.html')
    return redirect('/')

@app.route('/show/delete/<int:one_show>')
def delete_show(one_show_id):
    if 'user_id' in session:
        data = {
            'id' : one_show_id
        }
        show.Show.delete_by_id(data)
        return redirect('/user/mylist')
    return redirect('/')

@app.route('/post/edit/<int:one_post_id>', methods=['post'])
def edit_posting(one_post_id):
    if 'user_id' in session:
        if post.Post.validate_create(request.form):
            data = {
                'id' : one_post_id,
                'price' : request.form['price'],
                'model' : request.form['model'],
                'make' : request.form['make'],
                'year' : request.form['year'],
                'description' : request.form['description'],
                'user_id' : session['user_id']
            }
            this_post = post.Post.update_by_id(data)
            print(this_post)
            return redirect('/dashboard')
        return redirect(f'/edit/{one_post_id}')
    return redirect('/')

@app.route('/user/<int:one_user_id>')
def show_user(one_user_id):
    print('show user route')
    if 'user_id in session':
        data = {
            'id' : one_user_id
        }
        this_user = user.User.get_by_id_purchased_cars(data)
        return render_template('show_user.html', current_user = this_user)
    return redirect('/')

@app.route('/user/join_post', methods=['post'])
def join_post():
    if 'user_id' in session:
        data = {
            'user_id' : session['user_id'], # user_id value from session
            'post_id' : request.form['post_id'] # post_id value from hidden input
        }
        post.Post.add_purchases(data)
        return redirect('/dashboard')
    return redirect('/')