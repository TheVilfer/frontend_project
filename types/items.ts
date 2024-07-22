export type Post = {
  id: string;
  name: string;
  type: string;
  img?: string;
};

export interface WardropeGeneration {
  top?: Post;
  dress?: Post;
  bottom?: Post;
  shoes?: Post;
}
