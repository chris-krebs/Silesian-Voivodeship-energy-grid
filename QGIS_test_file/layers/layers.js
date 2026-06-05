var wms_layers = [];

var lyr_SRTMGL1terraindata_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SRTMGL1 / terrain data<br />\
    <img src="styles/legend/SRTMGL1terraindata_0_0.png" /> 96<br />\
    <img src="styles/legend/SRTMGL1terraindata_0_1.png" /> 2073<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SRTMGL1terraindata_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1772221.754482, 6269890.316403, 2495520.145911, 6710889.694386]
        })
    });
var lyr_Dark_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ows.terrestris.de/osm-gray/service",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Dark",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Dark',
                            popuplayertitle: 'Dark',
                            type: '',
                            opacity: 0.300000,
                            
                            
                          });
              wms_layers.push([lyr_Dark_1, 0]);
var lyr_Contours_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Contours<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Contours_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1772221.754482, 6269890.316403, 2495520.145911, 6710889.694386]
        })
    });
var format_GlobalWindPowerTrackerFebruary2026_prep_gis_slaskiecopy_3 = new ol.format.GeoJSON();
var features_GlobalWindPowerTrackerFebruary2026_prep_gis_slaskiecopy_3 = format_GlobalWindPowerTrackerFebruary2026_prep_gis_slaskiecopy_3.readFeatures(json_GlobalWindPowerTrackerFebruary2026_prep_gis_slaskiecopy_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GlobalWindPowerTrackerFebruary2026_prep_gis_slaskiecopy_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlobalWindPowerTrackerFebruary2026_prep_gis_slaskiecopy_3.addFeatures(features_GlobalWindPowerTrackerFebruary2026_prep_gis_slaskiecopy_3);
var lyr_GlobalWindPowerTrackerFebruary2026_prep_gis_slaskiecopy_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlobalWindPowerTrackerFebruary2026_prep_gis_slaskiecopy_3, 
                style: style_GlobalWindPowerTrackerFebruary2026_prep_gis_slaskiecopy_3,
                popuplayertitle: 'Global-Wind-Power-Tracker-February-2026_prep_gis_slaskie copy',
                interactive: true,
                title: '<img src="styles/legend/GlobalWindPowerTrackerFebruary2026_prep_gis_slaskiecopy_3.png" /> Global-Wind-Power-Tracker-February-2026_prep_gis_slaskie copy'
            });
var format_GlobalSolarPowerTrackerFebruary2026_gis_slaskie_only_4 = new ol.format.GeoJSON();
var features_GlobalSolarPowerTrackerFebruary2026_gis_slaskie_only_4 = format_GlobalSolarPowerTrackerFebruary2026_gis_slaskie_only_4.readFeatures(json_GlobalSolarPowerTrackerFebruary2026_gis_slaskie_only_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GlobalSolarPowerTrackerFebruary2026_gis_slaskie_only_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlobalSolarPowerTrackerFebruary2026_gis_slaskie_only_4.addFeatures(features_GlobalSolarPowerTrackerFebruary2026_gis_slaskie_only_4);
var lyr_GlobalSolarPowerTrackerFebruary2026_gis_slaskie_only_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlobalSolarPowerTrackerFebruary2026_gis_slaskie_only_4, 
                style: style_GlobalSolarPowerTrackerFebruary2026_gis_slaskie_only_4,
                popuplayertitle: 'Global-Solar-Power-Tracker-February-2026_gis_slaskie_only',
                interactive: true,
                title: '<img src="styles/legend/GlobalSolarPowerTrackerFebruary2026_gis_slaskie_only_4.png" /> Global-Solar-Power-Tracker-February-2026_gis_slaskie_only'
            });
var format_GlobalOilandGasPlantTrackerGOGPTJanuary2026_gis_slaskiecopy_5 = new ol.format.GeoJSON();
var features_GlobalOilandGasPlantTrackerGOGPTJanuary2026_gis_slaskiecopy_5 = format_GlobalOilandGasPlantTrackerGOGPTJanuary2026_gis_slaskiecopy_5.readFeatures(json_GlobalOilandGasPlantTrackerGOGPTJanuary2026_gis_slaskiecopy_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GlobalOilandGasPlantTrackerGOGPTJanuary2026_gis_slaskiecopy_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlobalOilandGasPlantTrackerGOGPTJanuary2026_gis_slaskiecopy_5.addFeatures(features_GlobalOilandGasPlantTrackerGOGPTJanuary2026_gis_slaskiecopy_5);
var lyr_GlobalOilandGasPlantTrackerGOGPTJanuary2026_gis_slaskiecopy_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlobalOilandGasPlantTrackerGOGPTJanuary2026_gis_slaskiecopy_5, 
                style: style_GlobalOilandGasPlantTrackerGOGPTJanuary2026_gis_slaskiecopy_5,
                popuplayertitle: 'Global-Oil-and-Gas-Plant-Tracker-GOGPT-January-2026_gis_slaskie copy',
                interactive: true,
                title: '<img src="styles/legend/GlobalOilandGasPlantTrackerGOGPTJanuary2026_gis_slaskiecopy_5.png" /> Global-Oil-and-Gas-Plant-Tracker-GOGPT-January-2026_gis_slaskie copy'
            });
var format_GlobalNuclearPowerTrackerSeptember2025_giscopy_6 = new ol.format.GeoJSON();
var features_GlobalNuclearPowerTrackerSeptember2025_giscopy_6 = format_GlobalNuclearPowerTrackerSeptember2025_giscopy_6.readFeatures(json_GlobalNuclearPowerTrackerSeptember2025_giscopy_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GlobalNuclearPowerTrackerSeptember2025_giscopy_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlobalNuclearPowerTrackerSeptember2025_giscopy_6.addFeatures(features_GlobalNuclearPowerTrackerSeptember2025_giscopy_6);
var lyr_GlobalNuclearPowerTrackerSeptember2025_giscopy_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlobalNuclearPowerTrackerSeptember2025_giscopy_6, 
                style: style_GlobalNuclearPowerTrackerSeptember2025_giscopy_6,
                popuplayertitle: 'Global-Nuclear-Power-Tracker-September-2025_gis copy',
                interactive: true,
                title: '<img src="styles/legend/GlobalNuclearPowerTrackerSeptember2025_giscopy_6.png" /> Global-Nuclear-Power-Tracker-September-2025_gis copy'
            });
var format_GlobalHydropowerTrackerApril2025_gis_slaskiecopy_7 = new ol.format.GeoJSON();
var features_GlobalHydropowerTrackerApril2025_gis_slaskiecopy_7 = format_GlobalHydropowerTrackerApril2025_gis_slaskiecopy_7.readFeatures(json_GlobalHydropowerTrackerApril2025_gis_slaskiecopy_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GlobalHydropowerTrackerApril2025_gis_slaskiecopy_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlobalHydropowerTrackerApril2025_gis_slaskiecopy_7.addFeatures(features_GlobalHydropowerTrackerApril2025_gis_slaskiecopy_7);
var lyr_GlobalHydropowerTrackerApril2025_gis_slaskiecopy_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlobalHydropowerTrackerApril2025_gis_slaskiecopy_7, 
                style: style_GlobalHydropowerTrackerApril2025_gis_slaskiecopy_7,
                popuplayertitle: 'Global-Hydropower-Tracker-April-2025_gis_slaskie copy',
                interactive: true,
                title: '<img src="styles/legend/GlobalHydropowerTrackerApril2025_gis_slaskiecopy_7.png" /> Global-Hydropower-Tracker-April-2025_gis_slaskie copy'
            });
var format_GlobalCoalPlantTrackerJanuary2026_gis_slaskiecopy_8 = new ol.format.GeoJSON();
var features_GlobalCoalPlantTrackerJanuary2026_gis_slaskiecopy_8 = format_GlobalCoalPlantTrackerJanuary2026_gis_slaskiecopy_8.readFeatures(json_GlobalCoalPlantTrackerJanuary2026_gis_slaskiecopy_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GlobalCoalPlantTrackerJanuary2026_gis_slaskiecopy_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlobalCoalPlantTrackerJanuary2026_gis_slaskiecopy_8.addFeatures(features_GlobalCoalPlantTrackerJanuary2026_gis_slaskiecopy_8);
var lyr_GlobalCoalPlantTrackerJanuary2026_gis_slaskiecopy_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlobalCoalPlantTrackerJanuary2026_gis_slaskiecopy_8, 
                style: style_GlobalCoalPlantTrackerJanuary2026_gis_slaskiecopy_8,
                popuplayertitle: 'Global-Coal-Plant-Tracker-January-2026_gis_slaskie copy',
                interactive: true,
                title: '<img src="styles/legend/GlobalCoalPlantTrackerJanuary2026_gis_slaskiecopy_8.png" /> Global-Coal-Plant-Tracker-January-2026_gis_slaskie copy'
            });
var format_GlobalCoalMineTrackerMay2025V2_non_operating_gis_slaskiecopy_9 = new ol.format.GeoJSON();
var features_GlobalCoalMineTrackerMay2025V2_non_operating_gis_slaskiecopy_9 = format_GlobalCoalMineTrackerMay2025V2_non_operating_gis_slaskiecopy_9.readFeatures(json_GlobalCoalMineTrackerMay2025V2_non_operating_gis_slaskiecopy_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GlobalCoalMineTrackerMay2025V2_non_operating_gis_slaskiecopy_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlobalCoalMineTrackerMay2025V2_non_operating_gis_slaskiecopy_9.addFeatures(features_GlobalCoalMineTrackerMay2025V2_non_operating_gis_slaskiecopy_9);
var lyr_GlobalCoalMineTrackerMay2025V2_non_operating_gis_slaskiecopy_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlobalCoalMineTrackerMay2025V2_non_operating_gis_slaskiecopy_9, 
                style: style_GlobalCoalMineTrackerMay2025V2_non_operating_gis_slaskiecopy_9,
                popuplayertitle: 'Global-Coal-Mine-Tracker-May-2025-V2_non_operating_gis_slaskie copy',
                interactive: true,
                title: '<img src="styles/legend/GlobalCoalMineTrackerMay2025V2_non_operating_gis_slaskiecopy_9.png" /> Global-Coal-Mine-Tracker-May-2025-V2_non_operating_gis_slaskie copy'
            });
var format_GlobalCoalMineTrackerMay2025V2_operating_gis_slaskiecopy_10 = new ol.format.GeoJSON();
var features_GlobalCoalMineTrackerMay2025V2_operating_gis_slaskiecopy_10 = format_GlobalCoalMineTrackerMay2025V2_operating_gis_slaskiecopy_10.readFeatures(json_GlobalCoalMineTrackerMay2025V2_operating_gis_slaskiecopy_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GlobalCoalMineTrackerMay2025V2_operating_gis_slaskiecopy_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlobalCoalMineTrackerMay2025V2_operating_gis_slaskiecopy_10.addFeatures(features_GlobalCoalMineTrackerMay2025V2_operating_gis_slaskiecopy_10);
var lyr_GlobalCoalMineTrackerMay2025V2_operating_gis_slaskiecopy_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlobalCoalMineTrackerMay2025V2_operating_gis_slaskiecopy_10, 
                style: style_GlobalCoalMineTrackerMay2025V2_operating_gis_slaskiecopy_10,
                popuplayertitle: 'Global-Coal-Mine-Tracker-May-2025-V2_operating_gis_slaskie copy',
                interactive: true,
                title: '<img src="styles/legend/GlobalCoalMineTrackerMay2025V2_operating_gis_slaskiecopy_10.png" /> Global-Coal-Mine-Tracker-May-2025-V2_operating_gis_slaskie copy'
            });
var format_GlobalCementandConcreteTracker_July2025_gis_slaskiecopy_11 = new ol.format.GeoJSON();
var features_GlobalCementandConcreteTracker_July2025_gis_slaskiecopy_11 = format_GlobalCementandConcreteTracker_July2025_gis_slaskiecopy_11.readFeatures(json_GlobalCementandConcreteTracker_July2025_gis_slaskiecopy_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GlobalCementandConcreteTracker_July2025_gis_slaskiecopy_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlobalCementandConcreteTracker_July2025_gis_slaskiecopy_11.addFeatures(features_GlobalCementandConcreteTracker_July2025_gis_slaskiecopy_11);
var lyr_GlobalCementandConcreteTracker_July2025_gis_slaskiecopy_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlobalCementandConcreteTracker_July2025_gis_slaskiecopy_11, 
                style: style_GlobalCementandConcreteTracker_July2025_gis_slaskiecopy_11,
                popuplayertitle: 'Global-Cement-and-Concrete-Tracker_July-2025_gis_slaskie copy',
                interactive: true,
                title: '<img src="styles/legend/GlobalCementandConcreteTracker_July2025_gis_slaskiecopy_11.png" /> Global-Cement-and-Concrete-Tracker_July-2025_gis_slaskie copy'
            });
var format_GlobalBioenergyPowerTrackerGBPTV3_gis_slaskiecopy_12 = new ol.format.GeoJSON();
var features_GlobalBioenergyPowerTrackerGBPTV3_gis_slaskiecopy_12 = format_GlobalBioenergyPowerTrackerGBPTV3_gis_slaskiecopy_12.readFeatures(json_GlobalBioenergyPowerTrackerGBPTV3_gis_slaskiecopy_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GlobalBioenergyPowerTrackerGBPTV3_gis_slaskiecopy_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlobalBioenergyPowerTrackerGBPTV3_gis_slaskiecopy_12.addFeatures(features_GlobalBioenergyPowerTrackerGBPTV3_gis_slaskiecopy_12);
var lyr_GlobalBioenergyPowerTrackerGBPTV3_gis_slaskiecopy_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlobalBioenergyPowerTrackerGBPTV3_gis_slaskiecopy_12, 
                style: style_GlobalBioenergyPowerTrackerGBPTV3_gis_slaskiecopy_12,
                popuplayertitle: 'Global-Bioenergy-Power-Tracker-GBPT-V3_gis_slaskie copy',
                interactive: true,
                title: '<img src="styles/legend/GlobalBioenergyPowerTrackerGBPTV3_gis_slaskiecopy_12.png" /> Global-Bioenergy-Power-Tracker-GBPT-V3_gis_slaskie copy'
            });
var format_Grid_13 = new ol.format.GeoJSON();
var features_Grid_13 = format_Grid_13.readFeatures(json_Grid_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grid_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grid_13.addFeatures(features_Grid_13);
var lyr_Grid_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grid_13, 
                style: style_Grid_13,
                popuplayertitle: 'Grid',
                interactive: true,
                title: '<img src="styles/legend/Grid_13.png" /> Grid'
            });
var group_Bioenergypower = new ol.layer.Group({
                                layers: [lyr_GlobalBioenergyPowerTrackerGBPTV3_gis_slaskiecopy_12,],
                                fold: 'open',
                                title: 'Bioenergy power'});
var group_Cementandconcrete = new ol.layer.Group({
                                layers: [lyr_GlobalCementandConcreteTracker_July2025_gis_slaskiecopy_11,],
                                fold: 'open',
                                title: 'Cement and concrete'});
var group_Coalmineoperating = new ol.layer.Group({
                                layers: [lyr_GlobalCoalMineTrackerMay2025V2_operating_gis_slaskiecopy_10,],
                                fold: 'open',
                                title: 'Coal mine // operating'});
var group_Coalminenonoperating = new ol.layer.Group({
                                layers: [lyr_GlobalCoalMineTrackerMay2025V2_non_operating_gis_slaskiecopy_9,],
                                fold: 'open',
                                title: 'Coal mine // non-operating'});
var group_Coalpower = new ol.layer.Group({
                                layers: [lyr_GlobalCoalPlantTrackerJanuary2026_gis_slaskiecopy_8,],
                                fold: 'open',
                                title: 'Coal power'});
var group_Hydropower = new ol.layer.Group({
                                layers: [lyr_GlobalHydropowerTrackerApril2025_gis_slaskiecopy_7,],
                                fold: 'open',
                                title: 'Hydro power'});
var group_Nuclearpower = new ol.layer.Group({
                                layers: [lyr_GlobalNuclearPowerTrackerSeptember2025_giscopy_6,],
                                fold: 'open',
                                title: 'Nuclear power'});
var group_Oilandgaspower = new ol.layer.Group({
                                layers: [lyr_GlobalOilandGasPlantTrackerGOGPTJanuary2026_gis_slaskiecopy_5,],
                                fold: 'open',
                                title: 'Oil and gas power'});
var group_Solarpower = new ol.layer.Group({
                                layers: [lyr_GlobalSolarPowerTrackerFebruary2026_gis_slaskie_only_4,],
                                fold: 'open',
                                title: 'Solar power'});
var group_Windpower = new ol.layer.Group({
                                layers: [lyr_GlobalWindPowerTrackerFebruary2026_prep_gis_slaskiecopy_3,],
                                fold: 'open',
                                title: 'Wind power'});

lyr_SRTMGL1terraindata_0.setVisible(true);lyr_Dark_1.setVisible(true);lyr_Contours_2.setVisible(true);lyr_GlobalWindPowerTrackerFebruary2026_prep_gis_slaskiecopy_3.setVisible(true);lyr_GlobalSolarPowerTrackerFebruary2026_gis_slaskie_only_4.setVisible(true);lyr_GlobalOilandGasPlantTrackerGOGPTJanuary2026_gis_slaskiecopy_5.setVisible(true);lyr_GlobalNuclearPowerTrackerSeptember2025_giscopy_6.setVisible(true);lyr_GlobalHydropowerTrackerApril2025_gis_slaskiecopy_7.setVisible(true);lyr_GlobalCoalPlantTrackerJanuary2026_gis_slaskiecopy_8.setVisible(true);lyr_GlobalCoalMineTrackerMay2025V2_non_operating_gis_slaskiecopy_9.setVisible(true);lyr_GlobalCoalMineTrackerMay2025V2_operating_gis_slaskiecopy_10.setVisible(true);lyr_GlobalCementandConcreteTracker_July2025_gis_slaskiecopy_11.setVisible(true);lyr_GlobalBioenergyPowerTrackerGBPTV3_gis_slaskiecopy_12.setVisible(true);lyr_Grid_13.setVisible(true);
var layersList = [lyr_SRTMGL1terraindata_0,lyr_Dark_1,lyr_Contours_2,group_Windpower,group_Solarpower,group_Oilandgaspower,group_Nuclearpower,group_Hydropower,group_Coalpower,group_Coalminenonoperating,group_Coalmineoperating,group_Cementandconcrete,group_Bioenergypower,lyr_Grid_13];
lyr_GlobalWindPowerTrackerFebruary2026_prep_gis_slaskiecopy_3.set('fieldAliases', {'Date Last Researched': 'Date Last Researched', 'Country/Area': 'Country/Area', 'Project Name': 'Project Name', 'Phase Name': 'Phase Name', 'Capacity (MW)': 'Capacity (MW)', 'Installation Type': 'Installation Type', 'Status': 'Status', 'Start year': 'Start year', 'Retired year': 'Retired year', 'Operator': 'Operator', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location accuracy': 'Location accuracy', 'City': 'City', 'Local area (taluk, county)': 'Local area (taluk, county)', 'Major area (prefecture, district)': 'Major area (prefecture, district)', 'State/Province': 'State/Province', 'Subregion': 'Subregion', 'Region': 'Region', 'GEM location ID': 'GEM location ID', 'GEM phase ID': 'GEM phase ID', 'Other IDs (location)': 'Other IDs (location)', 'Other IDs (unit/phase)': 'Other IDs (unit/phase)', 'Wiki URL': 'Wiki URL', });
lyr_GlobalSolarPowerTrackerFebruary2026_gis_slaskie_only_4.set('fieldAliases', {'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Date Last Researched': 'Date Last Researched', 'Country/Area': 'Country/Area', 'Project Name': 'Project Name', 'Capacity (MW)': 'Capacity (MW)', 'Capacity Rating': 'Capacity Rating', 'Technology Type': 'Technology Type', 'Status': 'Status', 'Location accuracy': 'Location accuracy', 'City': 'City', 'Local area (taluk, county)': 'Local area (taluk, county)', 'State/Province': 'State/Province', 'Subregion': 'Subregion', 'Region': 'Region', 'GEM location ID': 'GEM location ID', 'GEM phase ID': 'GEM phase ID', 'Wiki URL': 'Wiki URL', });
lyr_GlobalOilandGasPlantTrackerGOGPTJanuary2026_gis_slaskiecopy_5.set('fieldAliases', {'Wiki URL': 'Wiki URL', 'Country/Area': 'Country/Area', 'Plant name': 'Plant name', 'Other Name(s)': 'Other Name(s)', 'Unit name': 'Unit name', 'Fuel': 'Fuel', 'Capacity (MW)': 'Capacity (MW)', 'Status': 'Status', 'Turbine/Engine Technology': 'Turbine/Engine Technology', 'Equipment Manufacturer/Model': 'Equipment Manufacturer/Model', 'CHP': 'CHP', 'Hydrogen capable?': 'Hydrogen capable?', 'CCS attachment?': 'CCS attachment?', 'Conversion/replacement?': 'Conversion/replacement?', 'Conversion from/replacement of (fuel)': 'Conversion from/replacement of (fuel)', 'Conversion from/replacement of (GEM unit ID)': 'Conversion from/replacement of (GEM unit ID)', 'Start year': 'Start year', 'Owner(s)': 'Owner(s)', 'Owner(s) GEM Entity ID': 'Owner(s) GEM Entity ID', 'Parent(s)': 'Parent(s)', 'Parent GEM Entity ID': 'Parent GEM Entity ID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location accuracy': 'Location accuracy', 'City': 'City', 'Major area (prefecture, district)': 'Major area (prefecture, district)', 'State/Province': 'State/Province', 'Subregion': 'Subregion', 'Region': 'Region', 'Other IDs (location)': 'Other IDs (location)', 'Other IDs (unit)': 'Other IDs (unit)', 'GEM location ID': 'GEM location ID', 'GEM unit ID': 'GEM unit ID', 'Fuel classification?': 'Fuel classification?', });
lyr_GlobalNuclearPowerTrackerSeptember2025_giscopy_6.set('fieldAliases', {'Date Last Researched': 'Date Last Researched', 'Country/Area': 'Country/Area', 'Project Name': 'Project Name', 'Unit Name': 'Unit Name', 'Capacity (MW)': 'Capacity (MW)', 'Status': 'Status', 'Reactor Type': 'Reactor Type', 'Model': 'Model', 'Start Year': 'Start Year', 'Commercial Operation Date': 'Commercial Operation Date', 'Owner': 'Owner', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location Accuracy': 'Location Accuracy', 'City': 'City', 'State/Province': 'State/Province', 'Subregion': 'Subregion', 'Region': 'Region', 'GEM location ID': 'GEM location ID', 'GEM unit ID': 'GEM unit ID', 'Wiki URL': 'Wiki URL', });
lyr_GlobalHydropowerTrackerApril2025_gis_slaskiecopy_7.set('fieldAliases', {'Date Last Researched': 'Date Last Researched', 'Country/Area 1': 'Country/Area 1', 'Project Name': 'Project Name', 'Other name(s)': 'Other name(s)', 'Capacity (MW)': 'Capacity (MW)', 'Binational': 'Binational', 'Country/Area 1 Capacity (MW)': 'Country/Area 1 Capacity (MW)', 'Status': 'Status', 'Start Year': 'Start Year', 'Owner': 'Owner', 'Technology Type': 'Technology Type', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location Accuracy': 'Location Accuracy', 'Local Area 1': 'Local Area 1', 'State/Province 1': 'State/Province 1', 'Subregion 1': 'Subregion 1', 'Region 1': 'Region 1', 'GEM location ID': 'GEM location ID', 'GEM unit ID': 'GEM unit ID', 'Wiki URL': 'Wiki URL', });
lyr_GlobalCoalPlantTrackerJanuary2026_gis_slaskiecopy_8.set('fieldAliases', {'GEM unit/phase ID': 'GEM unit/phase ID', 'GEM location ID': 'GEM location ID', 'Country/Area': 'Country/Area', 'Wiki URL': 'Wiki URL', 'Plant name': 'Plant name', 'Unit name': 'Unit name', 'Plant name (other)': 'Plant name (other)', 'Plant name (local)': 'Plant name (local)', 'Owner': 'Owner', 'Owner GEM Entity ID': 'Owner GEM Entity ID', 'Parent': 'Parent', 'Parent GEM Entity ID': 'Parent GEM Entity ID', 'Capacity (MW)': 'Capacity (MW)', 'Status': 'Status', 'Start year': 'Start year', 'Retired year': 'Retired year', 'Planned retirement': 'Planned retirement', 'Coal phaseout year': 'Coal phaseout year', 'Net zero year': 'Net zero year', 'Combustion technology': 'Combustion technology', 'Coal type': 'Coal type', 'Coal source': 'Coal source', 'Conversion to (fuel)': 'Conversion to (fuel)', 'Conversion to (GEM unit ID)': 'Conversion to (GEM unit ID)', 'Alternate Fuel': 'Alternate Fuel', 'Location': 'Location', 'Local area (taluk, county)': 'Local area (taluk, county)', 'Major area (prefecture, district)': 'Major area (prefecture, district)', 'Subnational unit (province, state)': 'Subnational unit (province, state)', 'Subregion': 'Subregion', 'Region': 'Region', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location accuracy': 'Location accuracy', 'Captive': 'Captive', 'Captive industry use': 'Captive industry use', 'CHP': 'CHP', 'Capacity factor': 'Capacity factor', 'Plant age (years)': 'Plant age (years)', 'Heat rate (Btu per kWh)': 'Heat rate (Btu per kWh)', 'Emission factor (kg of CO2 per TJ)': 'Emission factor (kg of CO2 per TJ)', 'Annual CO2 (million tonnes / annum)': 'Annual CO2 (million tonnes / annum)', 'Remaining plant lifetime (years)': 'Remaining plant lifetime (years)', 'Lifetime CO2 (million tonnes)': 'Lifetime CO2 (million tonnes)', });
lyr_GlobalCoalMineTrackerMay2025V2_non_operating_gis_slaskiecopy_9.set('fieldAliases', {'GEM Mine ID': 'GEM Mine ID', 'Country / Area': 'Country / Area', 'Mine Name': 'Mine Name', 'Mine Name AKAs': 'Mine Name AKAs', 'Mine Name (Non-ENG)': 'Mine Name (Non-ENG)', 'Owners': 'Owners', 'Parent Company': 'Parent Company', 'Company HQs': 'Company HQs', 'Capacity (Mtpa)': 'Capacity (Mtpa)', 'Production (Mtpa)': 'Production (Mtpa)', 'Year of Production': 'Year of Production', 'Mine Type': 'Mine Type', 'Mining Method': 'Mining Method', 'Mine Size
(Km2)': 'Mine Size
(Km2)', 'Mine Depth
(m)': 'Mine Depth
(m)', 'Depth Accuracy': 'Depth Accuracy', 'Workforce Size': 'Workforce Size', 'Workforce Accuracy': 'Workforce Accuracy', 'Coal Type': 'Coal Type', 'Coal Grade': 'Coal Grade', 'Opening Year': 'Opening Year', 'Closing Year': 'Closing Year', 'Reason for Closure': 'Reason for Closure', 'Mine Site Status': 'Mine Site Status', 'Coalfield': 'Coalfield', 'Location': 'Location', 'Prefecture, District': 'Prefecture, District', 'State, Province': 'State, Province', 'Subregion': 'Subregion', 'Region': 'Region', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location Accuracy': 'Location Accuracy', 'Reported Coal Mine Methane Emissions (thousand tonnes per year)': 'Reported Coal Mine Methane Emissions (thousand tonnes per year)', });
lyr_GlobalCoalMineTrackerMay2025V2_operating_gis_slaskiecopy_10.set('fieldAliases', {'GEM Mine ID': 'GEM Mine ID', 'Country / Area': 'Country / Area', 'Mine Name': 'Mine Name', 'Mine Name AKAs': 'Mine Name AKAs', 'GEM Wiki Page (ENG)': 'GEM Wiki Page (ENG)', 'Status': 'Status', 'Owners': 'Owners', 'GEM Entity ID': 'GEM Entity ID', 'Owners (Non-ENG)': 'Owners (Non-ENG)', 'Parent Company': 'Parent Company', 'GEM Entity ID_1': 'GEM Entity ID_1', 'Company HQs': 'Company HQs', 'Capacity (Mtpa)': 'Capacity (Mtpa)', 'Production (Mtpa)': 'Production (Mtpa)', 'Year of Production': 'Year of Production', 'Mine Type': 'Mine Type', 'Mining Method': 'Mining Method', 'Mine Size (Km2)': 'Mine Size (Km2)', 'Mine Depth (m)': 'Mine Depth (m)', 'Depth Accuracy': 'Depth Accuracy', 'Workforce Size': 'Workforce Size', 'Workforce Accuracy': 'Workforce Accuracy', 'Coal Type': 'Coal Type', 'Coal Grade': 'Coal Grade', 'Total Reserves (Proven and Probable, Mt)': 'Total Reserves (Proven and Probable, Mt)', 'Year of Total Reserves Recorded': 'Year of Total Reserves Recorded', 'Total Resource (Inferred, Indicated, Measured)': 'Total Resource (Inferred, Indicated, Measured)', 'Reserve to Production Ratio (R/P)': 'Reserve to Production Ratio (R/P)', 'Opening Year': 'Opening Year', 'Closing Year': 'Closing Year', 'Reported Life of Mine': 'Reported Life of Mine', 'Reported Year of Mine Life': 'Reported Year of Mine Life', 'Coalfield': 'Coalfield', 'Location': 'Location', 'State, Province': 'State, Province', 'Subregion': 'Subregion', 'Region': 'Region', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location Accuracy': 'Location Accuracy', 'Reported Coal Mine Methane Emissions (thousand tonnes per year)': 'Reported Coal Mine Methane Emissions (thousand tonnes per year)', 'Year of Reported Coal Mine Methane Emissions': 'Year of Reported Coal Mine Methane Emissions', 'Has associated CMM mitigation data': 'Has associated CMM mitigation data', 'GEM Coal Mine Methane Emissions Estimate (MCM/yr)': 'GEM Coal Mine Methane Emissions Estimate (MCM/yr)', 'GEM Coal Mine Methane Emissions Estimate (M tonnes/yr)': 'GEM Coal Mine Methane Emissions Estimate (M tonnes/yr)', 'Methane Gas Content (m^3/tonne) (Updated)': 'Methane Gas Content (m^3/tonne) (Updated)', 'Methane Emissions Factor (Updated)': 'Methane Emissions Factor (Updated)', 'CMM Emissions (CO2e 20 years)': 'CMM Emissions (CO2e 20 years)', 'CMM Emissions (CO2e 100 years)': 'CMM Emissions (CO2e 100 years)', 'ISO Code': 'ISO Code', });
lyr_GlobalCementandConcreteTracker_July2025_gis_slaskiecopy_11.set('fieldAliases', {'GEM Plant ID': 'GEM Plant ID', 'GEM Asset name (English)': 'GEM Asset name (English)', 'Asset name (other language)': 'Asset name (other language)', 'Alternative asset name(s)': 'Alternative asset name(s)', 'SFI ID': 'SFI ID', 'LeadIT Project ID': 'LeadIT Project ID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Coordinate accuracy': 'Coordinate accuracy', 'GEM wiki page': 'GEM wiki page', 'Municipality': 'Municipality', 'Subnational unit': 'Subnational unit', 'Country/Area': 'Country/Area', 'Cement Capacity (millions metric tonnes per annum)': 'Cement Capacity (millions metric tonnes per annum)', 'Clinker Capacity (millions metric tonnes per annum)': 'Clinker Capacity (millions metric tonnes per annum)', 'Majority Cement Type': 'Majority Cement Type', 'Cement Color': 'Cement Color', 'Operating status': 'Operating status', 'Start date': 'Start date', 'Owner name (English)': 'Owner name (English)', 'Owner name (other language)': 'Owner name (other language)', 'Owner Entity ID': 'Owner Entity ID', 'Parent': 'Parent', 'Parent Entity ID': 'Parent Entity ID', 'Plant type': 'Plant type', 'Production type': 'Production type', 'CCS/CCUS': 'CCS/CCUS', 'Alternative Fuel': 'Alternative Fuel', 'Clay Calcination': 'Clay Calcination', 'field_30': 'field_30', 'field_31': 'field_31', 'field_32': 'field_32', 'field_33': 'field_33', 'field_34': 'field_34', 'field_35': 'field_35', 'field_36': 'field_36', 'field_37': 'field_37', 'field_38': 'field_38', 'field_39': 'field_39', 'field_40': 'field_40', 'field_41': 'field_41', 'field_42': 'field_42', });
lyr_GlobalBioenergyPowerTrackerGBPTV3_gis_slaskiecopy_12.set('fieldAliases', {'Date last researched': 'Date last researched', 'Country/Area': 'Country/Area', 'Project Name': 'Project Name', 'Unit Name': 'Unit Name', 'Other Name(s)': 'Other Name(s)', 'Capacity (MW)': 'Capacity (MW)', 'Fuel': 'Fuel', 'Status': 'Status', 'Conversion/Replacement?': 'Conversion/Replacement?', 'Unit Conversion Year': 'Unit Conversion Year', 'Start Year': 'Start Year', 'Operator(s)': 'Operator(s)', 'Operator(s) GEM Entity ID': 'Operator(s) GEM Entity ID', 'Owner(s)': 'Owner(s)', 'Owner Name(s) in Local Language / Script': 'Owner Name(s) in Local Language / Script', 'Owner(s) GEM Entity ID': 'Owner(s) GEM Entity ID', 'Parent(s)': 'Parent(s)', 'Parent(s) GEM Entity ID': 'Parent(s) GEM Entity ID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location Accuracy': 'Location Accuracy', 'City': 'City', 'Major Area (prefecture, district)': 'Major Area (prefecture, district)', 'State/Province': 'State/Province', 'Subregion': 'Subregion', 'Region': 'Region', 'GEM location ID': 'GEM location ID', 'GEM phase ID': 'GEM phase ID', 'Wiki URL': 'Wiki URL', });
lyr_Grid_13.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_GlobalWindPowerTrackerFebruary2026_prep_gis_slaskiecopy_3.set('fieldImages', {'Date Last Researched': 'DateTime', 'Country/Area': 'TextEdit', 'Project Name': 'TextEdit', 'Phase Name': 'Range', 'Capacity (MW)': 'Range', 'Installation Type': 'TextEdit', 'Status': 'TextEdit', 'Start year': 'Range', 'Retired year': 'TextEdit', 'Operator': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Location accuracy': 'TextEdit', 'City': 'TextEdit', 'Local area (taluk, county)': 'TextEdit', 'Major area (prefecture, district)': 'TextEdit', 'State/Province': 'TextEdit', 'Subregion': 'TextEdit', 'Region': 'TextEdit', 'GEM location ID': 'TextEdit', 'GEM phase ID': 'TextEdit', 'Other IDs (location)': 'TextEdit', 'Other IDs (unit/phase)': 'TextEdit', 'Wiki URL': 'TextEdit', });
lyr_GlobalSolarPowerTrackerFebruary2026_gis_slaskie_only_4.set('fieldImages', {'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Date Last Researched': 'DateTime', 'Country/Area': 'TextEdit', 'Project Name': 'TextEdit', 'Capacity (MW)': 'TextEdit', 'Capacity Rating': 'TextEdit', 'Technology Type': 'TextEdit', 'Status': 'TextEdit', 'Location accuracy': 'TextEdit', 'City': 'TextEdit', 'Local area (taluk, county)': 'TextEdit', 'State/Province': 'TextEdit', 'Subregion': 'TextEdit', 'Region': 'TextEdit', 'GEM location ID': 'TextEdit', 'GEM phase ID': 'TextEdit', 'Wiki URL': 'TextEdit', });
lyr_GlobalOilandGasPlantTrackerGOGPTJanuary2026_gis_slaskiecopy_5.set('fieldImages', {'Wiki URL': 'TextEdit', 'Country/Area': 'TextEdit', 'Plant name': 'TextEdit', 'Other Name(s)': 'TextEdit', 'Unit name': 'TextEdit', 'Fuel': 'TextEdit', 'Capacity (MW)': 'Range', 'Status': 'TextEdit', 'Turbine/Engine Technology': 'TextEdit', 'Equipment Manufacturer/Model': 'TextEdit', 'CHP': 'CheckBox', 'Hydrogen capable?': 'TextEdit', 'CCS attachment?': 'TextEdit', 'Conversion/replacement?': 'TextEdit', 'Conversion from/replacement of (fuel)': 'TextEdit', 'Conversion from/replacement of (GEM unit ID)': 'TextEdit', 'Start year': 'TextEdit', 'Owner(s)': 'TextEdit', 'Owner(s) GEM Entity ID': 'TextEdit', 'Parent(s)': 'TextEdit', 'Parent GEM Entity ID': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Location accuracy': 'TextEdit', 'City': 'TextEdit', 'Major area (prefecture, district)': 'TextEdit', 'State/Province': 'TextEdit', 'Subregion': 'TextEdit', 'Region': 'TextEdit', 'Other IDs (location)': 'TextEdit', 'Other IDs (unit)': 'TextEdit', 'GEM location ID': 'TextEdit', 'GEM unit ID': 'TextEdit', 'Fuel classification?': 'TextEdit', });
lyr_GlobalNuclearPowerTrackerSeptember2025_giscopy_6.set('fieldImages', {'Date Last Researched': 'DateTime', 'Country/Area': 'TextEdit', 'Project Name': 'TextEdit', 'Unit Name': 'Range', 'Capacity (MW)': 'Range', 'Status': 'TextEdit', 'Reactor Type': 'TextEdit', 'Model': 'TextEdit', 'Start Year': 'Range', 'Commercial Operation Date': 'Range', 'Owner': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Location Accuracy': 'TextEdit', 'City': 'TextEdit', 'State/Province': 'TextEdit', 'Subregion': 'TextEdit', 'Region': 'TextEdit', 'GEM location ID': 'TextEdit', 'GEM unit ID': 'TextEdit', 'Wiki URL': 'TextEdit', });
lyr_GlobalHydropowerTrackerApril2025_gis_slaskiecopy_7.set('fieldImages', {'Date Last Researched': 'Range', 'Country/Area 1': 'TextEdit', 'Project Name': 'TextEdit', 'Other name(s)': 'TextEdit', 'Capacity (MW)': 'Range', 'Binational': 'CheckBox', 'Country/Area 1 Capacity (MW)': 'Range', 'Status': 'TextEdit', 'Start Year': 'Range', 'Owner': 'TextEdit', 'Technology Type': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Location Accuracy': 'TextEdit', 'Local Area 1': 'TextEdit', 'State/Province 1': 'TextEdit', 'Subregion 1': 'TextEdit', 'Region 1': 'TextEdit', 'GEM location ID': 'TextEdit', 'GEM unit ID': 'TextEdit', 'Wiki URL': 'TextEdit', });
lyr_GlobalCoalPlantTrackerJanuary2026_gis_slaskiecopy_8.set('fieldImages', {'GEM unit/phase ID': 'TextEdit', 'GEM location ID': 'TextEdit', 'Country/Area': 'TextEdit', 'Wiki URL': 'TextEdit', 'Plant name': 'TextEdit', 'Unit name': 'TextEdit', 'Plant name (other)': 'TextEdit', 'Plant name (local)': 'TextEdit', 'Owner': 'TextEdit', 'Owner GEM Entity ID': 'TextEdit', 'Parent': 'TextEdit', 'Parent GEM Entity ID': 'TextEdit', 'Capacity (MW)': 'TextEdit', 'Status': 'TextEdit', 'Start year': 'Range', 'Retired year': 'Range', 'Planned retirement': 'Range', 'Coal phaseout year': 'Range', 'Net zero year': 'Range', 'Combustion technology': 'TextEdit', 'Coal type': 'TextEdit', 'Coal source': 'TextEdit', 'Conversion to (fuel)': 'TextEdit', 'Conversion to (GEM unit ID)': 'TextEdit', 'Alternate Fuel': 'TextEdit', 'Location': 'TextEdit', 'Local area (taluk, county)': 'TextEdit', 'Major area (prefecture, district)': 'TextEdit', 'Subnational unit (province, state)': 'TextEdit', 'Subregion': 'TextEdit', 'Region': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Location accuracy': 'TextEdit', 'Captive': 'TextEdit', 'Captive industry use': 'TextEdit', 'CHP': 'CheckBox', 'Capacity factor': 'TextEdit', 'Plant age (years)': 'Range', 'Heat rate (Btu per kWh)': 'TextEdit', 'Emission factor (kg of CO2 per TJ)': 'Range', 'Annual CO2 (million tonnes / annum)': 'TextEdit', 'Remaining plant lifetime (years)': 'Range', 'Lifetime CO2 (million tonnes)': 'TextEdit', });
lyr_GlobalCoalMineTrackerMay2025V2_non_operating_gis_slaskiecopy_9.set('fieldImages', {'GEM Mine ID': 'TextEdit', 'Country / Area': 'TextEdit', 'Mine Name': 'TextEdit', 'Mine Name AKAs': 'TextEdit', 'Mine Name (Non-ENG)': 'TextEdit', 'Owners': 'TextEdit', 'Parent Company': 'TextEdit', 'Company HQs': 'TextEdit', 'Capacity (Mtpa)': 'TextEdit', 'Production (Mtpa)': 'TextEdit', 'Year of Production': 'Range', 'Mine Type': 'TextEdit', 'Mining Method': 'TextEdit', 'Mine Size
(Km2)': 'TextEdit', 'Mine Depth
(m)': 'Range', 'Depth Accuracy': 'TextEdit', 'Workforce Size': 'Range', 'Workforce Accuracy': 'TextEdit', 'Coal Type': 'TextEdit', 'Coal Grade': 'TextEdit', 'Opening Year': 'Range', 'Closing Year': 'Range', 'Reason for Closure': 'TextEdit', 'Mine Site Status': 'TextEdit', 'Coalfield': 'TextEdit', 'Location': 'TextEdit', 'Prefecture, District': 'TextEdit', 'State, Province': 'TextEdit', 'Subregion': 'TextEdit', 'Region': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Location Accuracy': 'TextEdit', 'Reported Coal Mine Methane Emissions (thousand tonnes per year)': 'TextEdit', });
lyr_GlobalCoalMineTrackerMay2025V2_operating_gis_slaskiecopy_10.set('fieldImages', {'GEM Mine ID': 'TextEdit', 'Country / Area': 'TextEdit', 'Mine Name': 'TextEdit', 'Mine Name AKAs': 'TextEdit', 'GEM Wiki Page (ENG)': 'TextEdit', 'Status': 'TextEdit', 'Owners': 'TextEdit', 'GEM Entity ID': 'TextEdit', 'Owners (Non-ENG)': 'TextEdit', 'Parent Company': 'TextEdit', 'GEM Entity ID_1': 'TextEdit', 'Company HQs': 'TextEdit', 'Capacity (Mtpa)': 'TextEdit', 'Production (Mtpa)': 'TextEdit', 'Year of Production': 'Range', 'Mine Type': 'TextEdit', 'Mining Method': 'TextEdit', 'Mine Size (Km2)': 'TextEdit', 'Mine Depth (m)': 'Range', 'Depth Accuracy': 'TextEdit', 'Workforce Size': 'Range', 'Workforce Accuracy': 'TextEdit', 'Coal Type': 'TextEdit', 'Coal Grade': 'TextEdit', 'Total Reserves (Proven and Probable, Mt)': 'TextEdit', 'Year of Total Reserves Recorded': 'Range', 'Total Resource (Inferred, Indicated, Measured)': 'TextEdit', 'Reserve to Production Ratio (R/P)': 'Range', 'Opening Year': 'Range', 'Closing Year': 'Range', 'Reported Life of Mine': 'TextEdit', 'Reported Year of Mine Life': 'TextEdit', 'Coalfield': 'TextEdit', 'Location': 'TextEdit', 'State, Province': 'TextEdit', 'Subregion': 'TextEdit', 'Region': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Location Accuracy': 'TextEdit', 'Reported Coal Mine Methane Emissions (thousand tonnes per year)': 'TextEdit', 'Year of Reported Coal Mine Methane Emissions': 'Range', 'Has associated CMM mitigation data': 'CheckBox', 'GEM Coal Mine Methane Emissions Estimate (MCM/yr)': 'TextEdit', 'GEM Coal Mine Methane Emissions Estimate (M tonnes/yr)': 'TextEdit', 'Methane Gas Content (m^3/tonne) (Updated)': 'TextEdit', 'Methane Emissions Factor (Updated)': 'TextEdit', 'CMM Emissions (CO2e 20 years)': 'TextEdit', 'CMM Emissions (CO2e 100 years)': 'TextEdit', 'ISO Code': 'Range', });
lyr_GlobalCementandConcreteTracker_July2025_gis_slaskiecopy_11.set('fieldImages', {'GEM Plant ID': 'TextEdit', 'GEM Asset name (English)': 'TextEdit', 'Asset name (other language)': 'TextEdit', 'Alternative asset name(s)': 'TextEdit', 'SFI ID': 'TextEdit', 'LeadIT Project ID': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Coordinate accuracy': 'TextEdit', 'GEM wiki page': 'TextEdit', 'Municipality': 'TextEdit', 'Subnational unit': 'TextEdit', 'Country/Area': 'TextEdit', 'Cement Capacity (millions metric tonnes per annum)': 'TextEdit', 'Clinker Capacity (millions metric tonnes per annum)': 'TextEdit', 'Majority Cement Type': 'TextEdit', 'Cement Color': 'TextEdit', 'Operating status': 'TextEdit', 'Start date': 'Range', 'Owner name (English)': 'TextEdit', 'Owner name (other language)': 'TextEdit', 'Owner Entity ID': 'TextEdit', 'Parent': 'TextEdit', 'Parent Entity ID': 'TextEdit', 'Plant type': 'TextEdit', 'Production type': 'TextEdit', 'CCS/CCUS': 'TextEdit', 'Alternative Fuel': 'TextEdit', 'Clay Calcination': 'TextEdit', 'field_30': 'TextEdit', 'field_31': 'TextEdit', 'field_32': 'TextEdit', 'field_33': 'TextEdit', 'field_34': 'TextEdit', 'field_35': 'TextEdit', 'field_36': 'TextEdit', 'field_37': 'TextEdit', 'field_38': 'TextEdit', 'field_39': 'TextEdit', 'field_40': 'TextEdit', 'field_41': 'TextEdit', 'field_42': 'TextEdit', });
lyr_GlobalBioenergyPowerTrackerGBPTV3_gis_slaskiecopy_12.set('fieldImages', {'Date last researched': 'Range', 'Country/Area': 'TextEdit', 'Project Name': 'TextEdit', 'Unit Name': 'TextEdit', 'Other Name(s)': 'TextEdit', 'Capacity (MW)': 'TextEdit', 'Fuel': 'TextEdit', 'Status': 'TextEdit', 'Conversion/Replacement?': 'TextEdit', 'Unit Conversion Year': 'Range', 'Start Year': 'Range', 'Operator(s)': 'TextEdit', 'Operator(s) GEM Entity ID': 'TextEdit', 'Owner(s)': 'TextEdit', 'Owner Name(s) in Local Language / Script': 'TextEdit', 'Owner(s) GEM Entity ID': 'TextEdit', 'Parent(s)': 'TextEdit', 'Parent(s) GEM Entity ID': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Location Accuracy': 'TextEdit', 'City': 'TextEdit', 'Major Area (prefecture, district)': 'TextEdit', 'State/Province': 'TextEdit', 'Subregion': 'TextEdit', 'Region': 'TextEdit', 'GEM location ID': 'TextEdit', 'GEM phase ID': 'TextEdit', 'Wiki URL': 'TextEdit', });
lyr_Grid_13.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_GlobalWindPowerTrackerFebruary2026_prep_gis_slaskiecopy_3.set('fieldLabels', {'Date Last Researched': 'no label', 'Country/Area': 'no label', 'Project Name': 'no label', 'Phase Name': 'no label', 'Capacity (MW)': 'no label', 'Installation Type': 'no label', 'Status': 'no label', 'Start year': 'no label', 'Retired year': 'no label', 'Operator': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Location accuracy': 'no label', 'City': 'no label', 'Local area (taluk, county)': 'no label', 'Major area (prefecture, district)': 'no label', 'State/Province': 'no label', 'Subregion': 'no label', 'Region': 'no label', 'GEM location ID': 'no label', 'GEM phase ID': 'no label', 'Other IDs (location)': 'no label', 'Other IDs (unit/phase)': 'no label', 'Wiki URL': 'no label', });
lyr_GlobalSolarPowerTrackerFebruary2026_gis_slaskie_only_4.set('fieldLabels', {'Longitude': 'no label', 'Latitude': 'no label', 'Date Last Researched': 'no label', 'Country/Area': 'no label', 'Project Name': 'no label', 'Capacity (MW)': 'no label', 'Capacity Rating': 'no label', 'Technology Type': 'no label', 'Status': 'no label', 'Location accuracy': 'no label', 'City': 'no label', 'Local area (taluk, county)': 'no label', 'State/Province': 'no label', 'Subregion': 'no label', 'Region': 'no label', 'GEM location ID': 'no label', 'GEM phase ID': 'no label', 'Wiki URL': 'no label', });
lyr_GlobalOilandGasPlantTrackerGOGPTJanuary2026_gis_slaskiecopy_5.set('fieldLabels', {'Wiki URL': 'no label', 'Country/Area': 'no label', 'Plant name': 'no label', 'Other Name(s)': 'no label', 'Unit name': 'no label', 'Fuel': 'no label', 'Capacity (MW)': 'no label', 'Status': 'no label', 'Turbine/Engine Technology': 'no label', 'Equipment Manufacturer/Model': 'no label', 'CHP': 'no label', 'Hydrogen capable?': 'no label', 'CCS attachment?': 'no label', 'Conversion/replacement?': 'no label', 'Conversion from/replacement of (fuel)': 'no label', 'Conversion from/replacement of (GEM unit ID)': 'no label', 'Start year': 'no label', 'Owner(s)': 'no label', 'Owner(s) GEM Entity ID': 'no label', 'Parent(s)': 'no label', 'Parent GEM Entity ID': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Location accuracy': 'no label', 'City': 'no label', 'Major area (prefecture, district)': 'no label', 'State/Province': 'no label', 'Subregion': 'no label', 'Region': 'no label', 'Other IDs (location)': 'no label', 'Other IDs (unit)': 'no label', 'GEM location ID': 'no label', 'GEM unit ID': 'no label', 'Fuel classification?': 'no label', });
lyr_GlobalNuclearPowerTrackerSeptember2025_giscopy_6.set('fieldLabels', {'Date Last Researched': 'no label', 'Country/Area': 'no label', 'Project Name': 'no label', 'Unit Name': 'no label', 'Capacity (MW)': 'no label', 'Status': 'no label', 'Reactor Type': 'no label', 'Model': 'no label', 'Start Year': 'no label', 'Commercial Operation Date': 'no label', 'Owner': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Location Accuracy': 'no label', 'City': 'no label', 'State/Province': 'no label', 'Subregion': 'no label', 'Region': 'no label', 'GEM location ID': 'no label', 'GEM unit ID': 'no label', 'Wiki URL': 'no label', });
lyr_GlobalHydropowerTrackerApril2025_gis_slaskiecopy_7.set('fieldLabels', {'Date Last Researched': 'no label', 'Country/Area 1': 'no label', 'Project Name': 'no label', 'Other name(s)': 'no label', 'Capacity (MW)': 'no label', 'Binational': 'no label', 'Country/Area 1 Capacity (MW)': 'no label', 'Status': 'no label', 'Start Year': 'no label', 'Owner': 'no label', 'Technology Type': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Location Accuracy': 'no label', 'Local Area 1': 'no label', 'State/Province 1': 'no label', 'Subregion 1': 'no label', 'Region 1': 'no label', 'GEM location ID': 'no label', 'GEM unit ID': 'no label', 'Wiki URL': 'no label', });
lyr_GlobalCoalPlantTrackerJanuary2026_gis_slaskiecopy_8.set('fieldLabels', {'GEM unit/phase ID': 'no label', 'GEM location ID': 'no label', 'Country/Area': 'no label', 'Wiki URL': 'no label', 'Plant name': 'no label', 'Unit name': 'no label', 'Plant name (other)': 'no label', 'Plant name (local)': 'no label', 'Owner': 'no label', 'Owner GEM Entity ID': 'no label', 'Parent': 'no label', 'Parent GEM Entity ID': 'no label', 'Capacity (MW)': 'no label', 'Status': 'no label', 'Start year': 'no label', 'Retired year': 'no label', 'Planned retirement': 'no label', 'Coal phaseout year': 'no label', 'Net zero year': 'no label', 'Combustion technology': 'no label', 'Coal type': 'no label', 'Coal source': 'no label', 'Conversion to (fuel)': 'no label', 'Conversion to (GEM unit ID)': 'no label', 'Alternate Fuel': 'no label', 'Location': 'no label', 'Local area (taluk, county)': 'no label', 'Major area (prefecture, district)': 'no label', 'Subnational unit (province, state)': 'no label', 'Subregion': 'no label', 'Region': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Location accuracy': 'no label', 'Captive': 'no label', 'Captive industry use': 'no label', 'CHP': 'no label', 'Capacity factor': 'no label', 'Plant age (years)': 'no label', 'Heat rate (Btu per kWh)': 'no label', 'Emission factor (kg of CO2 per TJ)': 'no label', 'Annual CO2 (million tonnes / annum)': 'no label', 'Remaining plant lifetime (years)': 'no label', 'Lifetime CO2 (million tonnes)': 'no label', });
lyr_GlobalCoalMineTrackerMay2025V2_non_operating_gis_slaskiecopy_9.set('fieldLabels', {'GEM Mine ID': 'no label', 'Country / Area': 'no label', 'Mine Name': 'no label', 'Mine Name AKAs': 'no label', 'Mine Name (Non-ENG)': 'no label', 'Owners': 'no label', 'Parent Company': 'no label', 'Company HQs': 'no label', 'Capacity (Mtpa)': 'no label', 'Production (Mtpa)': 'no label', 'Year of Production': 'no label', 'Mine Type': 'no label', 'Mining Method': 'no label', 'Mine Size
(Km2)': 'no label', 'Mine Depth
(m)': 'no label', 'Depth Accuracy': 'no label', 'Workforce Size': 'no label', 'Workforce Accuracy': 'no label', 'Coal Type': 'no label', 'Coal Grade': 'no label', 'Opening Year': 'no label', 'Closing Year': 'no label', 'Reason for Closure': 'no label', 'Mine Site Status': 'no label', 'Coalfield': 'no label', 'Location': 'no label', 'Prefecture, District': 'no label', 'State, Province': 'no label', 'Subregion': 'no label', 'Region': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Location Accuracy': 'no label', 'Reported Coal Mine Methane Emissions (thousand tonnes per year)': 'no label', });
lyr_GlobalCoalMineTrackerMay2025V2_operating_gis_slaskiecopy_10.set('fieldLabels', {'GEM Mine ID': 'no label', 'Country / Area': 'no label', 'Mine Name': 'no label', 'Mine Name AKAs': 'no label', 'GEM Wiki Page (ENG)': 'no label', 'Status': 'no label', 'Owners': 'no label', 'GEM Entity ID': 'no label', 'Owners (Non-ENG)': 'no label', 'Parent Company': 'no label', 'GEM Entity ID_1': 'no label', 'Company HQs': 'no label', 'Capacity (Mtpa)': 'no label', 'Production (Mtpa)': 'no label', 'Year of Production': 'no label', 'Mine Type': 'no label', 'Mining Method': 'no label', 'Mine Size (Km2)': 'no label', 'Mine Depth (m)': 'no label', 'Depth Accuracy': 'no label', 'Workforce Size': 'no label', 'Workforce Accuracy': 'no label', 'Coal Type': 'no label', 'Coal Grade': 'no label', 'Total Reserves (Proven and Probable, Mt)': 'no label', 'Year of Total Reserves Recorded': 'no label', 'Total Resource (Inferred, Indicated, Measured)': 'no label', 'Reserve to Production Ratio (R/P)': 'no label', 'Opening Year': 'no label', 'Closing Year': 'no label', 'Reported Life of Mine': 'no label', 'Reported Year of Mine Life': 'no label', 'Coalfield': 'no label', 'Location': 'no label', 'State, Province': 'no label', 'Subregion': 'no label', 'Region': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Location Accuracy': 'no label', 'Reported Coal Mine Methane Emissions (thousand tonnes per year)': 'no label', 'Year of Reported Coal Mine Methane Emissions': 'no label', 'Has associated CMM mitigation data': 'no label', 'GEM Coal Mine Methane Emissions Estimate (MCM/yr)': 'no label', 'GEM Coal Mine Methane Emissions Estimate (M tonnes/yr)': 'no label', 'Methane Gas Content (m^3/tonne) (Updated)': 'no label', 'Methane Emissions Factor (Updated)': 'no label', 'CMM Emissions (CO2e 20 years)': 'no label', 'CMM Emissions (CO2e 100 years)': 'no label', 'ISO Code': 'no label', });
lyr_GlobalCementandConcreteTracker_July2025_gis_slaskiecopy_11.set('fieldLabels', {'GEM Plant ID': 'no label', 'GEM Asset name (English)': 'no label', 'Asset name (other language)': 'no label', 'Alternative asset name(s)': 'no label', 'SFI ID': 'no label', 'LeadIT Project ID': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Coordinate accuracy': 'no label', 'GEM wiki page': 'no label', 'Municipality': 'no label', 'Subnational unit': 'no label', 'Country/Area': 'no label', 'Cement Capacity (millions metric tonnes per annum)': 'no label', 'Clinker Capacity (millions metric tonnes per annum)': 'no label', 'Majority Cement Type': 'no label', 'Cement Color': 'no label', 'Operating status': 'no label', 'Start date': 'no label', 'Owner name (English)': 'no label', 'Owner name (other language)': 'no label', 'Owner Entity ID': 'no label', 'Parent': 'no label', 'Parent Entity ID': 'no label', 'Plant type': 'no label', 'Production type': 'no label', 'CCS/CCUS': 'no label', 'Alternative Fuel': 'no label', 'Clay Calcination': 'no label', 'field_30': 'no label', 'field_31': 'no label', 'field_32': 'no label', 'field_33': 'no label', 'field_34': 'no label', 'field_35': 'no label', 'field_36': 'no label', 'field_37': 'no label', 'field_38': 'no label', 'field_39': 'no label', 'field_40': 'no label', 'field_41': 'no label', 'field_42': 'no label', });
lyr_GlobalBioenergyPowerTrackerGBPTV3_gis_slaskiecopy_12.set('fieldLabels', {'Date last researched': 'no label', 'Country/Area': 'no label', 'Project Name': 'no label', 'Unit Name': 'no label', 'Other Name(s)': 'no label', 'Capacity (MW)': 'no label', 'Fuel': 'no label', 'Status': 'no label', 'Conversion/Replacement?': 'no label', 'Unit Conversion Year': 'no label', 'Start Year': 'no label', 'Operator(s)': 'no label', 'Operator(s) GEM Entity ID': 'no label', 'Owner(s)': 'no label', 'Owner Name(s) in Local Language / Script': 'no label', 'Owner(s) GEM Entity ID': 'no label', 'Parent(s)': 'no label', 'Parent(s) GEM Entity ID': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Location Accuracy': 'no label', 'City': 'no label', 'Major Area (prefecture, district)': 'no label', 'State/Province': 'no label', 'Subregion': 'no label', 'Region': 'no label', 'GEM location ID': 'no label', 'GEM phase ID': 'no label', 'Wiki URL': 'no label', });
lyr_Grid_13.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_Grid_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});