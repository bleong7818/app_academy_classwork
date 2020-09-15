class PostsController < ApplicationController
    before_action :is_author?, only: [:edit, :update, :destroy]
    before_action :require_logged_in

    def is_author?
        @post = Post.find(params[:id])
        redirect_to post_url(@post) unless @post.author_id == current_user.id
    end

    def new
        @post = Post.new
        render :new
    end

    def create
        @post = Post.new(post_params)
        @post.author_id = current_user.id

        if @post.save
            redirect_to post_url(@post)
        else
            flash.now[:errors] = @post.errors.full_messages
            render :new
        end
    end

    def edit
        @post = Post.find(params[:id])
        render :edit
    end

    def update
        @post = Post.find(params[:id])

        if @post.update(post_params)
            redirect_to post_url(@post)
        else
            flash.now[:errors] = @posts.errors.full_messages
            render :edit
        end
    end

    def show
        @post = Post.find(params[:id])
        render :show
    end

    def destroy
        @post = Post.find(params[:id])
        if @post && @post.destroy
            redirect_to sub_url(@post.sub_id)
        end
    end

    private
    def post_params
        params.require(:post).permit(:title, :url, :content, :sub_id)
    end


end
