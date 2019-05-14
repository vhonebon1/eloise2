class ImagesController < ApiController
  def index
    @images = Image.all
    render json: @images.to_json
  end

  def upload

  end
end
