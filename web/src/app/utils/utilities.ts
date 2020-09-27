// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// :::                                                                         :::
// :::  This routine calculates the distance between two points (given the     :::
// :::  latitude/longitude of those points). It is being used to calculate     :::
// :::  the distance between two locations using GeoDataSource (TM) prodducts  :::
// :::                                                                         :::
// :::  Definitions:                                                           :::
// :::    South latitudes are negative, east longitudes are positive           :::
// :::                                                                         :::
// :::  Passed to function:                                                    :::
// :::    lat1, lon1 = Latitude and Longitude of point 1 (in decimal degrees)  :::
// :::    lat2, lon2 = Latitude and Longitude of point 2 (in decimal degrees)  :::
// :::    unit = the unit you desire for results                               :::
// :::           where: 'M' is statute miles (default)                         :::
// :::                  'K' is kilometers                                      :::
// :::                  'N' is nautical miles                                  :::
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export function calculateDistance(lat1, lon1, lat2, lon2, unit): number {
  if ((lat1 === lat2) && (lon1 === lon2)) {
    return 0;
  } else {
    const radLat1 = Math.PI * lat1 / 180;
    const radLat2 = Math.PI * lat2 / 180;
    const theta = lon1 - lon2;
    const radTheta = Math.PI * theta / 180;
    let distance = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
    if (distance > 1) {
      distance = 1;
    }
    distance = Math.acos(distance);
    distance = distance * 180 / Math.PI;
    distance = distance * 60 * 1.1515;
    if (unit === 'K') {
      distance = distance * 1.609344;
    }
    if (unit === 'N') {
      distance = distance * 0.8684;
    }
    return distance;
  }
}
