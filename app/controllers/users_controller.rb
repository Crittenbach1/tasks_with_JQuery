class UsersController < ApplicationController
  before_action :authenticate_user!

     def index
       @users = User.all
       respond_to do |format|
         format.html { render show: @users }
         format.json { render json: @users }
       end
     end

     def show
       @user = User.find_by(id: params[:id])
       respond_to do |format|
         format.html { render show: @user }
         format.json { render json: @user.tasks }
       end
     end


end
