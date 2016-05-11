# The South Lake Union Bog - Intro to Rails

Researchers at your local biology lab are exploring and documenting the history of the South Lake Union bog, and the creatures of interest. Our job is to encourage people in the community to explore SLU and submit their findings using our web application.

We'll be creating a single model app to demonstrate editing resources. Its important to get comfortable with the process of starting a new Rails app since you'll be doing this for quite awhile

##Components

### Bog Model

* A creature model that stores `name` and `description`

### Bog Controller

* A controller for your home page
* A controller that manages bog creature


### Bog Routes / Views

| route | description | controller |  action/view |
|-------|-----|----|-----|------|
| GET /  | Your home page | home | index |
| GET /creatures | list all creatures | creatures | index |
| GET /creatures/new | show add creature form | creatures | new |
| POST /creatures | create creature | creatures | create (no view) |
| GET /creatures/1 | list creature (id=1) | creatures | show |
| GET /creatures/2/edit | show edit creature form (id=2) | creatures | edit |
| PUT /creatures/3 | update an existing creature (id=3) | creatures | update |
| DELETE /creatures/3 | delete an existing creature (id=3) | creatures | destroy (no view) |

**Remember:** you can list all routes by running `rake routes` at the command line.

##Recommended Process

###Create basic app

* Fork and clone this repo
* cd into the directory
* Create app `rails new ./ -d postgresql`
* Create database `rake db:create`
* Test app
  * Run server `rails s`
  * Goto: localhost:3000

**NOTE:** To submit your homework, make sure to commit all files and make a pull request.

###Build specific functionality

* Create model `rails g model ...` (you write the rest of this command)
* Migrate `rake db:migrate`
* Test models
    * run console `rails c`
    * Try some stuff...
        * `Creature.all`
        * `Creature.create`
        * `Createre.new`
        * `Creature.find`
        * ...etc ...etc
* Close console run `rails s`
* Create routes...
    * Add route to `routes.rb`
    * Add controller / action
    * Add view
    * Test (go to url in browser)
    * Repeat for each view
* Add HTML to each view
    * Use bootstrap
    * Make it pretty... oh so pretty!!!
* Add code to make the app functional

## Styling

* Add a pretty home page. Maybe add in a carousel or something
* Make a navigation bar. Everyone loves nav bars.
* Use [Bootstrap form helper](https://github.com/bootstrap-ruby/rails-bootstrap-forms). Makes Bootstrap forms easily


## Edit/Delete

* Make an edit form to edit an existing *Creature*
* Make a delete button for each *Creature*

**Note about PATCH/PUT/DELETE**

For delete and edit we will use the DELETE and PATCH or PUT verbs (see RESTful routes). Rails has a solution called method override to allow us to use these verbs without AJAX. This works by creating a post form and creating hidden form field named "_method" which rails uses to override the method. This can also be done automatically by the form helper.

More details here: [Using method override in rails](http://guides.rubyonrails.org/form_helpers.html#how-do-forms-with-patch-put-or-delete-methods-work-questionmark)
