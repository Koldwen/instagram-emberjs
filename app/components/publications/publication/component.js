import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PublicationComponent extends Component {
  @tracked
  isLiked = false;

  @tracked
  isBookmarked = false;

  @tracked
  profilePictureLoaded = false;

  @tracked
  mediaLoaded = false;

  get likeIcon() {
    return this.isLiked ? 'like-icon-fill' : 'like-icon';
  }

  get bookmarkIcon() {
    return this.isBookmarked ? 'bookmark-icon-fill' : 'bookmark-icon';
  }

  get likes() {
    if (this.isLiked) {
      return this.args.likes + 1;
    }
    return this.args.likes;
  }

  get loaded() {
    return this.profilePictureLoaded && this.mediaLoaded;
  }

  @action
  like() {
    this.isLiked = !this.isLiked;
  }

  @action
  comment() {
    console.log('Comment');
  }

  @action
  send() {
    console.log('Send');
  }

  @action
  bookmark() {
    this.isBookmarked = !this.isBookmarked;
  }

  @action
  waitForProfilePicture(element) {
    element.addEventListener('load', () => {
      this.profilePictureLoaded = true;
    });
  }

  @action
  waitForMedia(element) {
    element.addEventListener('load', () => {
      this.mediaLoaded = true;
    });
  }
}
