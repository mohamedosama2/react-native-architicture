import React from "react";

export interface locationDataFields {
    name: string;
    country: string;
    country_code: string;
    state: string;
    state_code: string;
    county: string;
    county_code: string;
    postcode: string;
    city: string;
    street: string;
    housenumber: string;
    lat: number;
    lon: number;
    formatted: string
    address_line1: string;
    address_line2: string;
}

export interface locationDataFormat {
    results: Array<locationDataFields>
}