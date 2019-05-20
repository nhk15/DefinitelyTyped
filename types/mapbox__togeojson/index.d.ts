// Type definitions for @mapbox/togeojson 0.16.0"
// Project: https://github.com/mapbox/togeojson
// Definitions by: Nam Kim <https://github.com/nhk15>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable-next-line no-single-declare-module
/// <reference types="geojson" />

declare module "@mapbox/togeojson" {
    function kml(
        doc: Document
    ): GeoJSON.FeatureCollection;

    function gpx(
        doc: Document
    ): GeoJSON.FeatureCollection;
}
