class SubsController < ApplicationController
    before_action :is_moderator_of_sub?, only: [:edit, :update]
    before_action :require_logged_in

    def index
        @subs = Sub.all
        render :index
    end

    def is_moderator_of_sub?
        @sub = Sub.find(params[:id])
        redirect_to sub_url(@sub) unless @sub.moderator_id == current_user.id
    end

    def new
        @sub = Sub.new
        render :new
    end

    def create
        @sub = Sub.new(sub_params)
        @sub.moderator_id = current_user.id
        if @sub.save
            redirect_to sub_url(@sub)
        else
            flash.now[:errors] = @sub.errors.full_messages
            render :new
        end
    end

    def edit
        @sub = Sub.find(params[:id])
        render :edit if @sub
    end

    def update
        @sub = Sub.find(params[:id])
        if @sub.update(sub_params)
            redirect_to sub_url(@sub)
        else
            flash.now[:errors] = @sub.errors.full_messages
            render :edit
        end
    end

    def show
        @sub = Sub.find(params[:id])
        render :show
    end

    # def destroy

    # end

    private
    def sub_params
        params.require(:sub).permit(:title, :description)
    end
end
