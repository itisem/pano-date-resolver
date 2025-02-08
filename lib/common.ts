/********** location types **********/

// pure coordinates
export interface Coordinates{
	lat: number;
	lng: number;
}

// full location info
export interface Location extends Coordinates{
	heading?: number;
	pitch?: number;
	zoom?: number;
	panoId?: string;
	panoDate?: string;
	tags?: string[];
}