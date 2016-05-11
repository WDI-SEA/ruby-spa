class CreaturesController < ApplicationController
  def index
    @creatures = Creature.all
  end

  def create
    creature = Creature.create creature_params
    redirect_to creature_path creature
  end

  def new
    @creature = Creature.new
    @tags = Tag.all
  end


  def edit
    @creature = Creature.find params[:id]
    @tags = Tag.all
  end

  def show
    @creature = Creature.find params[:id]
  end

  def update
    c = Creature.find params[:id]
    c.update creature_params
    update_tags(c)

    redirect_to creatures_path
  end

  def destroy
    Creature.find(params[:id]).delete
    redirect_to creatures_path
  end

  private

  def creature_params
    params.require(:creature).permit(:species, :location, :description, tag_ids: []) 
  end

  def update_tags(creature)
    #get the list of all boxes from form
    tags = params[:creature][:tag_ids]
    puts tags
    #reset all tags the creaure currently has
    creature.tags.clear
    #go through all tags from the form
    tags.each do |id|
      # only readd the tags where checkboxes were checked
      if not id.blank?
        creature.tags << Tag.find(id)
      end
    end
  end
end
