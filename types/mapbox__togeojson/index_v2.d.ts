// Type definitions for @mapbox/togeojson 0.16.0"
// Project: https://github.com/mapbox/togeojson
// Definitions by: Nam Kim <https://github.com/nhk15>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable-next-line no-single-declare-module
/// <reference types="geojson" />

declare module togeojson {
    function okhash (
        x: string
    ): number;

    function get(
        x: Document,
        y: string
    ): HTMLAllCollection;

    function attr(
        x: Document,
        y: string
    ): any;

    function attrf(
        x: Document,
        y: string
    ): typeof parseFloat;

    function get1(
        x: Document,
        y: string
    ): HTMLElement | null;

    function norm(
        el: HTMLElement
    ): HTMLElement;

    function numarray(
        x: Array<string>
    ): Array<typeof parseFloat>;

    function nodeVal(
        x: HTMLElement
    ): string;

    function getMulti(
        x: HTMLElement,
        ys: Array<string>
    ): Array<string>;

    function extend(
        x: {[key: string]: any},
        y: {[key: string]: any}
    ): {[key: string]: any};

    function coord1(
        v: string
    ): typeof numarray;

    // get all coordinates from a coordinate array as [[],[]]
    function coord(
        v: string
    ): Array<typeof coord1>;

    function coordPair(
        x: Document
    ): CoordPair;

    function fc(): GeoJSON.FeatureCollection;

    function xml2str(
        str: HTMLElement
    ): string;

    interface CoordPair {
        coordinates: [number, number],
        time: typeof nodeVal | null,
        heartRate: typeof parseFloat | null
    }

    function kml(
        doc: Document
    ): typeof fc;

    function gpx(
        doc: Document
    ): typeof fc;
}
