export interface DrupalArticle {
  type: string;
  id: string;
  drupal_internal__nid: number;
  drupal_internal__vid: number;
  langcode: string;
  revision_timestamp: Date;
  revision_log: null;
  status: boolean;
  title: string;
  created: Date;
  changed: Date;
  promote: boolean;
  sticky: boolean;
  default_langcode: boolean;
  revision_translation_affected: boolean;
  moderation_state: null;
  metatag: null;
  path: Path;
  content_translation_source: string;
  content_translation_outdated: boolean;
  body: Body;
  field_meta_tags: null;
  field_second_text: Body;
  field_subtitle: Body;
  links: Links;
  node_type: NodeType;
  revision_uid: FieldCategory;
  uid: FieldCategory;
  field_category: FieldCategory;
  field_image: FieldCategory;
  field_tags: FieldCategory[];
  relationshipNames: string[];
}

export interface Body {
  value: string;
  format: string;
  processed: string;
  summary?: string;
}

export interface FieldCategory {
  type: string;
  id: string;
  resourceIdObjMeta: FieldCategoryResourceIDObjMeta;
}

export interface FieldCategoryResourceIDObjMeta {
  drupal_internal__target_id: number;
}

export interface Links {
  describedby: Describedby;
  self: Describedby;
}

export interface Describedby {
  href: string;
}

export interface NodeType {
  type: string;
  id: string;
  resourceIdObjMeta: NodeTypeResourceIDObjMeta;
}

export interface NodeTypeResourceIDObjMeta {
  drupal_internal__target_id: string;
}

export interface Path {
  alias: string;
  pid: number;
  langcode: string;
}
