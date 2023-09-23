// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Post → carousel*
 */
export interface PostDocumentDataCarouselItem {
  /**
   * image field in *Post → carousel*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: post.carousel[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Item in *Post → tags*
 */
export interface PostDocumentDataTagsItem {
  /**
   * tag field in *Post → tags*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.tags[].tag
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tag: prismic.KeyTextField;
}

/**
 * Content for Post documents
 */
interface PostDocumentData {
  /**
   * thumbnail field in *Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: post.thumbnail
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  thumbnail: prismic.ImageField<never>;

  /**
   * title field in *Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * resume field in *Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.resume
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  resume: prismic.KeyTextField;

  /**
   * repository field in *Post*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: post.repository
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  repository: prismic.LinkField;

  /**
   * application field in *Post*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: post.application
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  application: prismic.LinkField;

  /**
   * content field in *Post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * video field in *Post*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: post.video
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  video: prismic.LinkField;

  /**
   * carousel field in *Post*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: post.carousel[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  carousel: prismic.GroupField<Simplify<PostDocumentDataCarouselItem>>;

  /**
   * tags field in *Post*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: post.tags[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  tags: prismic.GroupField<Simplify<PostDocumentDataTagsItem>>;
}

/**
 * Post document from Prismic
 *
 * - **API ID**: `post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PostDocumentData>, "post", Lang>;

export type AllDocumentTypes = PostDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      PostDocument,
      PostDocumentData,
      PostDocumentDataCarouselItem,
      PostDocumentDataTagsItem,
      AllDocumentTypes,
    };
  }
}
