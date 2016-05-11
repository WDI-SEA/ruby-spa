class CreaturesController < ApplicationController
  def index
    @creatures = Creature.all
    @creature = Creature.new
  end

  # def create
  #   @tags = Tag.all
  #   creature = Creature.create creature_params
  #   redirect_to creature_path creature
  #   update_tags(creature)
  # end

  # def new
  #   @creature = Creature.new
  #   @tags = Tag.all
  # end

  # def edit
  #   @creature = Creature.find params[:id]
  #   @tags = Tag.all
  # end

  # def show
  #   @creature = Creature.find params[:id]
  #   @tags = Tag.all
  # end

  # def update
  #   @tags = Tag.all
  #   c = Creature.find params[:id]
  #   c.update creature_params
  #   update_tags(c)

  #   redirect_to creatures_path
  # end

  # def destroy
  #   @tags = Tag.all
  #   @creature = Creature.find(params[:id]).delete
  #   redirect_to creatures_path
  # end

  # private

  # def creature_params
  #   params.require(:creature).permit(:name, :desciption, :location)
  # end

  # def update_tags creature
  #   # get the list of checkboxes
  #   tags = params[:creature][:tag_ids]

  #   # reset all tags creature has
  #   creature.tags.clear

  #   #go through all the tags
  #   tags.each do |id|
  #     # only re-add the tags where checkboxes were checked
  #     if not id.blank?
  #       creature.tags << Tag.find(id)
  #     end
  #   end
  # end
end
