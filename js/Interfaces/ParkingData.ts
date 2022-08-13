import React from 'react';

export interface parkingDataParameters {
    dataset: string;
    rows: number;
    start: number;
    sort: Array<string>;
    facet: Array<string>;
    format: string;
    timezone: string;
}

export interface parkingDataRecordsFields {
    grp_disponible: number;
    grp_nom: string;
    grp_statut: number
    grp_identifiant: string
    disponibilite: number
    idobj: string
    grp_complet: number
    grp_exploitation: number
    location: [number, number]
    grp_horodatage: string
}

export interface parkingDataRecordsGeometry {
    type: string;
    coordinates: [number, number];
}

export interface parkingDataRecords {
    datasetid: string;
    recordid: string;
    fields: parkingDataRecordsFields;
    geometry: parkingDataRecordsGeometry
    record_timestamp: string;
}

export interface parkingDataFacetGroupsItem {
    name: string;
    count: number;
    state: string
    path: string
}

export interface parkingDataFacetGroups {
    name: string;
    facets: Array<parkingDataFacetGroupsItem>;
}

export interface parkingDataFormat {
    nhits: number;
    parameters: parkingDataParameters;
    records: Array<parkingDataRecords>;
    facet_groups: parkingDataFacetGroups
}