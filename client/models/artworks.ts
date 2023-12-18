export interface Artwork {
  id:               number;
  type:             Type;
  collection:       Collection[];
  collectionLabel:  Collection[];
  title:            string;
  purpose:          string[];
  publicationDate:  string[];
  authors:          Author[];
  narrativeSummary: string;
  narrative:        string;
  refersTo:         RefersTo[];
  hasPart:          Author[];
  relatedObjects:   Author[];
  pid:              string;
  iri:              string;
  href:             string;
  _meta:            Meta;
  _api:             API;
}

export interface API {
  score: number;
}

export interface Meta {
  created:      Date;
  modified:     Date;
  qualityScore: number;
}

export interface Author {
  id:               number;
  type:             Type;
  title:            string;
  pid:              string;
  iri:              string;
  href:             string;
  purpose?:         string[];
  publicationDate?: string[];
  collection?:      Collection;
}

export type Collection = "History";

export type Type = "Person" | "Topic" | "Object";

export interface RefersTo {
  id:                 number;
  type:               string;
  title:              string;
  prefLabel?:         string;
  exactMatch?:        string;
  scopeNote?:         string;
  pid:                string;
  iri:                string;
  href:               string;
  verbatimBirthDate?: string;
  birthDate?:         string;
  verbatimDeathDate?: string;
  deathDate?:         string;
  nationality?:       string[];
  briefName?:         string;
  nation?:            string[];
}
