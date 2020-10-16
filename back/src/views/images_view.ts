import Image from '../models/Image';

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://ec2-3-22-9-46.us-east-2.compute.amazonaws.com:4200/uploads/${image.path}`
    }
  },

  renderMany(images: Image[]) {
    return images.map(image => this.render(image))
  }
};
