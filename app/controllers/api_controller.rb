class ApiController < ApplicationController
  def index
  end

  def all
    @creatures = Creature.all
    render :json => @creatures
  end

  def show
    @creature = Creature.find_by_id params[:id]
    render :json => @creature
  end

  def create
    puts 'creating creature'
    @creature = Creature.create creature_params

  end

  private

  def creature_params
    params.require(:creature).permit(:species, :location, :description)
  end
end
