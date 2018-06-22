class UsersController < ApplicationController
  before_action :authenticate_user!

     def index
       @users = User.all
     end

     def show
       @user = User.find_by(id: params[:id])
       respond_to do |format|
         format.html { render :show }
         format.json { render json: @user.tasks }
       end
     end


end
