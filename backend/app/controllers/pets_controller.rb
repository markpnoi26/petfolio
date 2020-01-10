class PetsController < ApplicationController

  def index
    pets = Pet.all
    render json: pets
  end

  def show
    pet = Pet.find_by_id(params[:id])
    render json: pet, include: [:user]
  end

  def create
    pet = Pet.new(pet_params)
    if pet.valid?
      pet.save
      render json: pet, include: [:user]
    else
      render json: {error: "Pet cannot be created"}
    end
  end

  def update
    pet = Pet.find_by_id(params[:id])
    pet.update(pet_params)
    render json: pet, include: [:user]
  end

  private

  def pet_params
    params.require(:pet).permit(:name, :age, :animal_type, :pet_care)
  end

end
